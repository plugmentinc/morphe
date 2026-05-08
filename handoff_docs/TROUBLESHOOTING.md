# トラブルシューティング（TROUBLESHOOTING）

> よくある問題と解決法をまとめます。Claude Code が問題に遭遇した際の参照資料です。

---

## 進化モーフ関連

### 問題1：卵が一瞬しか表示されない（修正済み）

**症状：** スクロールしてもモーフが一瞬卵→すぐにidleになる

**原因：**
- 表示開始時のscrollY位置から進捗計算していた
- 200px時点で既に「全体の20%スクロール済み」と判定されてしまう

**解決方法（現在の実装）：**
```javascript
let morphStartScrollY = null;
let isMorphVisible = false;

// 表示開始時に scrollY を記録
if (shouldShow && !isMorphVisible) {
  morphStartScrollY = scrollY;
  isMorphVisible = true;
  currentStageIndex = -1;  // リセット
  updateMorphStage(0);  // 卵から強制開始
}

// 表示後は表示開始位置からの相対進捗で計算
const remainingScroll = totalHeight - morphStartScrollY;
const scrolledFromStart = scrollY - morphStartScrollY;
const progress = scrolledFromStart / remainingScroll;
```

### 問題2：モーフがクリックしても反応しない

**確認事項：**
- `morph-evolution` 要素に `pointer-events: auto` があるか
- z-index が他の要素より高いか（95）
- JSのclickリスナーが登録されているか

```css
#morph-evolution {
  pointer-events: auto;  /* これがないとクリック不可 */
  z-index: 95;
}
```

### 問題3：吹き出しが表示されない

**確認事項：**
- `.morph-evo-bubble` の opacity が 0 のままになっていないか
- `show-bubble` クラスが追加されているか
- bubbleTimeoutId が正しく管理されているか

---

## ナビゲーション関連

### 問題1：ページ間でナビが微妙にズレる（修正済み）

**症状：** ページ切替時、ロゴ位置やナビ位置が動く

**原因：**
- ページごとに `nav` の CSS が異なる
  - `position: sticky` vs `fixed`
  - `height: 60px / 64px / 68px` で異なる
  - `flex: 1` の有無

**解決方法：**
全ページで以下に統一済み：
```css
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: 64px;
  padding: 0 40px;
  gap: 40px;
  display: flex;
  align-items: center;
}
.nav-links {
  flex: 1;
  gap: 32px;
}
body { padding-top: 64px; }  /* fixed分の余白 */
```

### 問題2：ナビ項目の順序が違う（修正済み）

**症状：** ページごとに Service と Plan の順序が違う

**統一順序：** About → Works → Service → Plan → FAQ

### 問題3：ロゴクリックで動かない

**確認：** `<a href="/">` になっているか
- 全ページのロゴリンクは `href="/"` で統一

---

## デプロイ関連

### 問題1：Vercel で 404 NOT_FOUND

**原因：**
- index.html がルートにない
- フォルダ構造が二重（`morphe-phi/morphe-phi/...`）
- vercel.json が削除された

**解決方法：**
1. GitHub リポジトリを確認
2. ルート直下に `index.html` があるか
3. `vercel.json` が存在するか
4. ZIPを再アップロードする際は**フォルダの中身を選択**してアップロード

### 問題2：画像が表示されない

**原因：** assets パスが相対パスになっている

**解決：** 全画像参照を `/assets/...` の絶対パスに統一
```html
<!-- ❌ 間違い -->
<img src="assets/morph_idle.png">
<img src="../assets/morph_idle.png">

<!-- ✅ 正解 -->
<img src="/assets/morph_idle.png">
```

### 問題3：Vercelビルドエラー

**確認方法：**
1. Vercelダッシュボード → 該当デプロイ → **Build Logs**
2. エラーメッセージをコピー

**よくある原因：**
- `vercel.json` の構文エラー
- `api/contact.js` の構文エラー
- ファイル名に不正な文字

### 問題4：GitHub Web画面のアップロードでフォルダ崩れ

**症状：** ドラッグ&ドロップでフォルダ構造がフラット化

**解決：**
- **GitHub Desktop を使用**（推奨）
- または、フォルダ構造を保持したZIPを丁寧に展開

---

## 問い合わせフォーム関連

### 問題1：送信しても何も起きない

**確認事項：**
1. ブラウザのDevTools → Console でエラー確認
2. Network タブで `/api/contact` のリクエスト確認
3. レスポンスステータス確認

**404が返る場合：**
- `api/contact.js` が正しくデプロイされているか
- Vercel側で API Routes が有効になっているか

**500が返る場合：**
- `api/contact.js` の構文エラー
- Vercelログを確認

### 問題2：メールが届かない

**Phase 1（現在）の動作：**
- メールは送信されない（ログ出力のみ）
- Vercelダッシュボード → Functions → Logsで確認

**Phase 2（Resend連携）への移行：**
1. https://resend.com で無料アカウント作成
2. ドメイン認証（morphe.jp）
3. APIキー発行
4. Vercel → Settings → Environment Variables
5. `RESEND_API_KEY` を設定
6. 再デプロイで自動有効化

### 問題3：mailto fallback が起動しない

**原因：** ブラウザがmailto対応していない

**確認：** 別の連絡手段を表示
```javascript
alert('お問い合わせは hello@morphe.jp まで直接ご連絡ください。');
```

---

## レイアウト関連

### 問題1：モバイルでレイアウトが崩れる

**確認事項：**
1. `viewport` メタタグがあるか
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```
2. `@media (max-width: 600px)` の指定
3. グリッドの `grid-template-columns: 1fr` への変更

### 問題2：fixedナビが内容と重なる

**原因：** body の padding-top 不足

**解決：**
```css
body { padding-top: 64px; }  /* nav の高さ分 */

@media (max-width: 900px) {
  body { padding-top: 64px; }  /* スマホでも64px統一 */
}
```

---

## 構文エラー

### 問題1：CSSが反映されない

**確認方法：**
```bash
# 括弧バランスをチェック
grep -c "{" index.html
grep -c "}" index.html
# この数が一致する必要あり
```

### 問題2：JavaScriptエラー

**確認方法：**
```bash
# 括弧バランス
python3 -c "
content = open('index.html').read()
print('{}=', content.count('{'), '/', content.count('}'))
print('()=', content.count('('), '/', content.count(')'))
"
```

ブラウザDevToolsの Console でエラーメッセージを確認。

---

## 全ファイル整合性チェックスクリプト

```python
import os, re

files = [
    'index.html', 'about/index.html', 'works/index.html',
    'contact/index.html', 'lp/web-design/index.html',
    'privacy/index.html', 'tokushoho/index.html'
]

for f in files:
    if not os.path.exists(f):
        print(f'  ✗ MISSING: {f}')
        continue
    
    with open(f) as file:
        content = file.read()
    
    div_b = content.count('<div') == content.count('</div>')
    section_b = content.count('<section') == content.count('</section>')
    style_blocks = re.findall(r'<style[^>]*>(.*?)</style>', content, re.DOTALL)
    css_b = sum(b.count('{') for b in style_blocks) == sum(b.count('}') for b in style_blocks)
    js_blocks = re.findall(r'<script[^>]*>(.*?)</script>', content, re.DOTALL)
    js_total = ''.join(js_blocks)
    js_b = js_total.count('{') == js_total.count('}') and js_total.count('(') == js_total.count(')')
    
    status = '✓' if (div_b and section_b and css_b and js_b) else '✗'
    print(f'{status} {f}')
```

---

## デバッグツール

### Chrome DevTools

| キー | 機能 |
|---|---|
| F12 | DevTools開く |
| Ctrl+Shift+I | 同上 |
| Ctrl+Shift+M | レスポンシブモード |
| Ctrl+Shift+P | コマンドパレット |

### モバイルデバッグ

1. Chromeで `chrome://inspect` を開く
2. USBで実機を接続
3. ブラウザに表示されるリンクから実機画面を確認

---

## ヘルプを求める前のチェックリスト

問題に遭遇したら、まず以下を確認：

- [ ] CLAUDE.md を読んだか
- [ ] DESIGN_SYSTEM.md でカラー・フォント仕様確認したか
- [ ] PAGE_SPECS.md で該当ページの仕様確認したか
- [ ] ブラウザのDevToolsでエラーを確認したか
- [ ] Vercelのデプロイログを確認したか
- [ ] 構文エラーチェックをしたか
- [ ] レスポンシブ表示を全サイズで確認したか
- [ ] 進化モーフ・フローティングCTAが正しく動作するか

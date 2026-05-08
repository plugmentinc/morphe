# Claude Code よく使うコマンド集

## プロジェクト構造の確認

```bash
# 全HTMLファイル一覧
find . -name "*.html" -type f | sort

# 構文整合性チェック
python3 -c "
import os, re
files = ['index.html', 'about/index.html', 'works/index.html', 'contact/index.html']
for f in files:
    if not os.path.exists(f): continue
    with open(f) as file: c = file.read()
    print(f'{f}: div={c.count(\"<div\")}/{c.count(\"</div>\")}, section={c.count(\"<section\")}/{c.count(\"</section>\")}')
"
```

## 検索・置換

```bash
# 特定の文字列を全ファイルで検索
grep -rn "検索文字列" . --include="*.html" --include="*.css" --include="*.js"

# 全ページのナビゲーション一括変更（例：項目追加）
# 必ず以下5ファイルを同期
# - index.html
# - about/index.html
# - works/index.html
# - lp/web-design/index.html
# - shared/global.css（contact/privacy/tokushohoが参照）
```

## 料金プラン変更

```bash
# 価格を一括変更したい場合
grep -rn "498,000" . --include="*.html"
# → 出てきた全箇所を確認・変更
```

## デプロイ前の最終チェック

```bash
# 1. 構文チェック
python3 << 'EOF'
import os, re
files = ['index.html', 'about/index.html', 'works/index.html', 'contact/index.html', 'lp/web-design/index.html', 'privacy/index.html', 'tokushoho/index.html']
for f in files:
    with open(f) as file: c = file.read()
    style_blocks = re.findall(r'<style[^>]*>(.*?)</style>', c, re.DOTALL)
    css_b = sum(b.count('{') for b in style_blocks) == sum(b.count('}') for b in style_blocks)
    js_blocks = re.findall(r'<script[^>]*>(.*?)</script>', c, re.DOTALL)
    js_total = ''.join(js_blocks)
    js_b = js_total.count('{') == js_total.count('}')
    print(f'{f}: CSS={"✓" if css_b else "✗"}, JS={"✓" if js_b else "✗"}')
EOF

# 2. 進化モーフが全ページにあるか確認
grep -l "morph-evolution" *.html */*.html

# 3. /assets/ 絶対パス使用確認
grep -c '/assets/' index.html
```

## Git 操作

```bash
# 状態確認
git status

# 変更差分確認
git diff

# コミット
git add .
git commit -m "feat: 機能追加の説明"

# プッシュ（Vercel自動デプロイ起動）
git push origin main

# 直前のコミットをやり直し
git commit --amend -m "新しいメッセージ"

# 緊急ロールバック
git revert HEAD
git push origin main
```

## Vercel 確認

```bash
# Vercel CLI が入っている場合
vercel ls         # プロジェクト一覧
vercel logs       # 最新デプロイのログ
vercel --prod     # 本番デプロイ
```

ブラウザで確認: https://vercel.com/dashboard

## ローカル動作確認

```bash
# シンプルな HTTP サーバー起動
python3 -m http.server 8000
# → http://localhost:8000/ で確認

# Live reload が必要なら
npx live-server
```

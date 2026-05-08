# コーディング規約（Conventions）

## ファイル構造

### HTMLファイル
- 各ページは独立した `index.html`
- ディレクトリ名 = URL（例：`/about/index.html` → `/about`）
- 全てのCSSはインライン（`<style>`タグ）または `shared/global.css`

### CSS
- `shared/global.css`: 共通スタイル（contact, privacy, tokushohoが参照）
- 各HTMLファイル内 `<style>`: そのページ固有のスタイル
- BEM風の命名は不採用、シンプルな機能名で命名

### JavaScript
- `shared/global.js`: 共通JS（contact等）
- 各HTMLファイル内 `<script>`: そのページ固有のJS
- IIFEパターン（`(function() { ... })();`）でスコープ汚染防止
- `'use strict';` を必ず使う

## 命名規則

### CSS クラス
```css
/* セクション名は kebab-case */
.hero-section { }
.about-section { }
.works-grid { }

/* 状態クラス */
.is-active { }
.is-visible { }
.show-bubble { }

/* モーフ関連は morph- プレフィックス */
.morph-evo-bubble { }
.morph-evo-stage-label { }
```

### CSS変数
```css
/* セマンティック名 */
--black: #0d0d0d;
--white: #fafafa;

/* 機能名 */
--pink-1, --pink-2  /* 数字でバリエーション */
```

### JavaScript 変数
```javascript
/* camelCase */
const morphEvolution = ...;
const currentStageIndex = 0;
const isMorphVisible = false;
```

## HTML 規則

### 必須メタタグ
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ページ名 | MORPHE株式会社</title>
<meta name="description" content="...">
```

### OGPは必ず設定
```html
<meta property="og:type" content="website">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:url" content="https://morphe-phi.vercel.app/...">
<meta property="og:image" content="https://morphe-phi.vercel.app/assets/morphe_logo_full.png">
```

### ファビコン
```html
<link rel="icon" type="image/png" href="/assets/morphe_m_only.png">
```

### 画像のパス
```html
<!-- ✅ 絶対パス -->
<img src="/assets/morph_idle.png">

<!-- ❌ 相対パス -->
<img src="assets/morph_idle.png">
<img src="../assets/morph_idle.png">
```

## CSS 規則

### CSS変数を最大限活用
```css
/* ✅ 変数使用 */
color: var(--black);
background: var(--white);

/* ❌ ハードコード */
color: #0d0d0d;
background: #fafafa;
```

### レスポンシブは必ず対応
```css
/* デスクトップ first */
.section { padding: 120px 40px; }

/* タブレット */
@media (max-width: 900px) {
  .section { padding: 80px 24px; }
}

/* スマホ */
@media (max-width: 600px) {
  .section { padding: 60px 20px; }
}
```

### アニメーションは滑らかに
```css
/* ✅ イージング指定 */
transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

/* ❌ デフォルトイージング */
transition: transform 0.3s;
```

### will-change は使わない
- 必要な箇所だけブラウザに任せる
- 過度な使用は逆効果

## JavaScript 規則

### IIFE パターン
```javascript
(function() {
  'use strict';
  
  // コード
  
})();
```

### イベントリスナーは passive
```javascript
window.addEventListener('scroll', handler, { passive: true });
```

### requestAnimationFrame でスロットリング
```javascript
let ticking = false;
function handleScroll() {
  if (ticking) return;
  requestAnimationFrame(() => {
    // 処理
    ticking = false;
  });
  ticking = true;
}
```

### 防御的プログラミング
```javascript
// 要素の存在確認
const morphEvo = document.getElementById('morph-evolution');
if (!morphEvo) return;
```

## コメント規則

### セクションコメント
```css
/* ══════════════════════════════════════════
   HERO セクション
═══════════════════════════════════════════ */
```

### 重要な修正コメント
```javascript
/* バグ修正：卵から開始するため -1 で初期化 */
let currentStageIndex = -1;
```

### 一時的なコード（避ける）
```javascript
// TODO: 後で実装
// FIXME: バグの可能性
```
TODO/FIXMEは可能な限り避け、即対応する。

## 禁止事項

### 絶対やってはいけない
- ❌ `console.log()` を本番に残す
- ❌ `alert()` の多用
- ❌ インラインスタイル `style="..."` の濫用
- ❌ `!important` の濫用
- ❌ jQuery等の外部ライブラリ追加
- ❌ ES6以前の古い記法
- ❌ ベンダープレフィックスの忘れ
  ```css
  /* ✅ */
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  ```

### 推奨しない
- ⚠️ 関数の長さ50行以上
- ⚠️ ネスト3階層以上
- ⚠️ マジックナンバー（変数化推奨）

## ファイル変更時のチェックリスト

変更したら必ず：
- [ ] 構文エラーチェック（divバランス、CSS括弧、JS括弧）
- [ ] レスポンシブ確認（900px、600px）
- [ ] ブラウザDevToolsでConsoleエラー確認
- [ ] ナビ・フッター・モーフ・フローティングCTAが残っているか
- [ ] 他ページへの影響確認

## コミットメッセージ規則

### Conventional Commits 風
```
feat: 新機能追加
fix: バグ修正
refactor: リファクタリング
style: スタイル調整（機能変更なし）
docs: ドキュメント更新
chore: その他（ビルド・依存関係等）
```

### 例
```
feat: 料金プランにタブ切替を追加
fix: 進化モーフが卵で止まらないバグを修正
refactor: ナビゲーションCSSを全ページで統一
docs: CLAUDE.mdに新しいルールを追加
```

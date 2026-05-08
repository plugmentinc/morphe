# デザインシステム詳細（DESIGN_SYSTEM）

> プロジェクト全体のデザイン仕様・コンポーネントスタイルを定義します。

---

## カラーパレット

### コアカラー（CSS変数）

```css
:root {
  --black:        #0d0d0d;   /* メインの黒 */
  --white:        #fafafa;   /* メインの白 */
  --gray:         #6b6b6b;   /* グレー（補助テキスト） */
  --light-gray:   #f4f4f2;   /* ライトグレー（背景） */
  --border:       #e4e4e2;   /* ボーダー */
}
```

### ブランドアクセントカラー

#### モーフ虹色（半透明）
```css
--morph-pink:   rgba(255, 140, 180, 0.75);
--morph-blue:   rgba(160, 180, 255, 0.7);
--morph-purple: rgba(190, 150, 255, 0.72);
--morph-peach:  rgba(255, 200, 160, 0.65);
```

#### グラデーション用カラー

```
ピンク系：  #d85a80 / #ff9acc / #ff7090
パープル系：#8b6ec8 / #a08ac8 / #c9a0ff
ブルー系： #5a8ad0 / #a0b0ff / #6a8ad0
ゴールド： #ffb070
```

### 主要グラデーション組み合わせ

```css
/* タイトルアクセント（h1, h2の強調） */
background: linear-gradient(135deg, #d85a80 0%, #8b6ec8 50%, #5a8ad0 100%);

/* CTAボタン（明るいアクセント） */
background: linear-gradient(135deg, #ff9acc 0%, #a0b0ff 100%);

/* ダークセクション背景 */
background: linear-gradient(135deg, #0d0d0d 0%, #1a1a2a 100%);

/* スクロール進捗バー（虹） */
background: linear-gradient(90deg, #d85a80, #a08ac8, #a0b0ff);
```

---

## タイポグラフィ

### フォントファミリー

```css
/* メイン（日本語含む） */
font-family: 'Noto Sans JP', sans-serif;

/* 数値・英字専用 */
font-family: 'Inter', sans-serif;
```

### 取得元

```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700;900&family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
```

### サイズスケール

| 用途 | サイズ | 太さ | 行間 |
|---|---|---|---|
| Hero見出し | clamp(36px, 6vw, 64px) | 900 | 1.3 |
| セクション見出し（h2） | clamp(28px, 4vw, 40px) | 900 | 1.4 |
| サブセクション見出し（h3） | 18-22px | 900 | 1.4 |
| 本文 | 14-15px | 400 | 1.7-1.95 |
| 補足テキスト | 11-13px | 400-500 | 1.6 |
| 数値表示（Inter） | 32-56px | 900 | 1 |
| タグ・ラベル | 11px | 600-700 | - |

### 文字間隔（letter-spacing）

```css
/* 見出し */
letter-spacing: -0.01em / -0.02em;

/* タグ・ラベル（英字大文字） */
letter-spacing: 0.15em ~ 0.4em;

/* 本文 */
letter-spacing: 0;
```

---

## 影・ぼかし

### Drop Shadow（モーフ・要素）

```css
/* モーフキャラクター用 */
filter: drop-shadow(0 15px 25px rgba(180, 150, 220, 0.3));

/* 強めの影 */
filter: drop-shadow(0 20px 35px rgba(180, 150, 220, 0.4));

/* ロゴ用 */
filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15));
```

### Box Shadow

```css
/* カードのホバー */
box-shadow: 0 25px 50px rgba(180, 150, 220, 0.18);

/* ダークセクション内のカード */
box-shadow: 0 12px 32px rgba(216, 90, 128, 0.35);

/* 大型コンポーネント */
box-shadow: 0 20px 60px rgba(180, 150, 220, 0.15);
```

### Backdrop Filter（ガラス効果）

```css
/* ナビゲーション */
background: rgba(250, 250, 250, 0.85);
backdrop-filter: blur(14px);
-webkit-backdrop-filter: blur(14px);

/* ダーク内のカード */
background: rgba(255, 255, 255, 0.04);
backdrop-filter: blur(20px);
```

---

## 角丸（border-radius）

| 要素 | 値 |
|---|---|
| ボタン（pill） | 50px |
| カード | 16-24px |
| 大型コンテナ | 20-24px |
| 小要素・チップ | 12px |
| ピル状ラベル | 20-24px |
| 円形 | 50% |

---

## スペーシング

### セクションパディング

```css
/* デスクトップ */
.section { padding: 120px 40px; }

/* タブレット */
@media (max-width: 900px) {
  .section { padding: 80px 24px; }
}

/* スマホ */
@media (max-width: 600px) {
  .section { padding: 80px 24px 60px; }
}
```

### コンテナ最大幅

```css
.container { max-width: 1100-1200px; margin: 0 auto; }
```

### 要素間のgap

```css
gap: 16-24px;       /* 密接 */
gap: 32-48px;       /* 通常 */
gap: 56-80px;       /* セクション間 */
```

---

## アニメーション

### 共通イージング

```css
/* 標準 */
cubic-bezier(0.4, 0, 0.2, 1);

/* バウンス */
cubic-bezier(0.34, 1.56, 0.64, 1);
```

### 標準的なトランジション時間

| 用途 | 時間 |
|---|---|
| ホバー（色・透明度） | 0.2s |
| ボタンエフェクト | 0.3s |
| カードチルト | 0.4s |
| スクロールリビール | 0.7s |
| ステージ切替 | 0.5s |

### よく使うキーフレーム

```css
@keyframes charFloat {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-10px); }
}

@keyframes blobFloat {
  0%, 100% { transform: translate(-50%, -50%) scale(1); }
  50%      { transform: translate(-50%, -55%) scale(1.05); }
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-16px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes ringSpin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

@keyframes pulseDot {
  0%, 100% { transform: scale(1); opacity: 0.4; }
  50%      { transform: scale(1.6); opacity: 0; }
}
```

---

## 共通コンポーネント

### ナビゲーション（全ページ統一）

```css
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  height: 64px;
  background: rgba(250,250,250,0.85);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  padding: 0 40px;
  gap: 40px;
}

body { padding-top: 64px; }  /* fixed nav分の余白 */

.nav-links {
  flex: 1;  /* ナビ項目を伸ばす */
  gap: 32px;
}
```

**順序（厳守）：** About → Works → Service → Plan → FAQ
**CTA：** 「無料相談する ↗」

### ボタン

#### Primary
```css
.btn-primary {
  background: var(--black);
  color: var(--white);
  border-radius: 50px;
  padding: 14px 28px;
  font-size: 14px;
}
```

#### Outline
```css
.btn-outline {
  background: transparent;
  border: 1.5px solid var(--black);
  border-radius: 50px;
  padding: 12px 24px;
}
```

#### Special CTA
```css
.cta-btn {
  background: linear-gradient(135deg, #ff9acc, #a0b0ff);
  color: var(--black);
  font-weight: 700;
  padding: 18px 36px;
  border-radius: 50px;
}
```

### カード（標準）

```css
.card {
  background: white;
  border: 1px solid #ece9f2;
  border-radius: 20px;
  padding: 32-40px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20-30px 40-60px rgba(180, 150, 220, 0.15);
}
```

### ダークカード

```css
.dark-card {
  background: linear-gradient(135deg, #0d0d0d, #1a1a2a);
  color: white;
  border-radius: 20-24px;
  padding: 32-40px;
  position: relative;
  overflow: hidden;
}

.dark-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 20% 20%, rgba(255,140,180,0.1), transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(160,180,255,0.1), transparent 50%);
}
```

### タグ・ラベル

#### Section Tag（セクション冒頭）
```css
.section-tag {
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.25-0.4em;
  color: #a08ac8;
}
```

---

## レスポンシブ

| ブレイクポイント | 対象 | 主な変更 |
|---|---|---|
| デフォルト | 901px〜 | フルレイアウト |
| `(max-width: 900px)` | タブレット | 2列→1列、サイドラベル非表示 |
| `(max-width: 600px)` | スマホ | フォント縮小、CTA縦積み |
| `(max-width: 380px)` | iPhone SE等 | 最低限表示 |

---

## デザイン原則（必ず守る）

### 1. ミニマル・洗練
- 不要な装飾を排除
- ホワイトスペースを大切に
- 派手にしすぎない

### 2. 一貫性
- カラーパレット内の色のみ使用
- フォントファミリーを混在させない
- 角丸の値を統一

### 3. 階層性
- 重要度の高い要素を視覚的に強調
- ダーク背景は「特別な瞬間」だけ
- 同じレベルの要素は同じスタイル

### 4. アクセシビリティ
- コントラスト比を確保
- フォントサイズは最低11px
- ボタンは最低40×40pxのタップエリア

### 5. ブランド一貫性
- モーフキャラクターを必ず活用
- 黒+白+虹色のパレット厳守
- 「AI×デザイン」の世界観を体現

---

## やってはいけないデザイン

- ❌ ブランドカラー以外の色を勝手に追加
- ❌ 派手すぎる赤・黄色・緑
- ❌ 角丸を0pxにする（モダンさ損失）
- ❌ アニメーションを過剰に
- ❌ フォントの変更（Noto Sans JP / Inter以外）
- ❌ モーフキャラクターを削除

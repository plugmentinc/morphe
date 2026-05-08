# 各ページ仕様（PAGE_SPECS）

> 各ページの構造・セクション・主要機能を記録します。

---

## サイトマップ

```
morphe-phi.vercel.app/
├ /                            ← トップ（メインLP）
├ /about                       ← 会社情報
├ /works                       ← 制作実績
├ /contact                     ← 問い合わせフォーム
├ /privacy                     ← プライバシーポリシー
├ /tokushoho                   ← 特商法表記
├ /lp/web-design               ← Web制作LP（トップと同一）
├ /lp/lp-design                ← LP制作LP（準備中）
└ /lp/ai-consulting            ← AIコンサルLP（準備中）
```

---

## ページ別詳細

### 🏠 トップページ（`/index.html`）

**役割：** メインLP（売る場所）

**ファイルサイズ：** 約120KB / 4,500行

**セクション構成：**

| 順序 | ID/クラス | 内容 |
|---|---|---|
| 1 | `.hero` | ヒーロー（タイトル + CTA + アニメーション背景） |
| 2 | `#about` (`.trust-section`) | TRUST（数値統計4つ） |
| 3 | `.empathy-section` | 共感セクション（worried morph + 6つの悩み） |
| 4 | `#service` (`.feat-section`) | Features（AI×SPEED/DESIGN/COST 3カード） |
| 5 | `.svc-section` | Service（4カードで具体サービス） |
| 6 | `#works` (`.works-section`) | WORKS（実績4件） |
| 7 | `.diag-section` | AI診断（4ステップウィザード） |
| 8 | `.proc-section` | Process（4ステップフロー） |
| 9 | `#pricing` (`.price-section`) | **料金プラン（タブ切替・買い切り/サブスク）** |
| 10 | `#faq` (`.faq-section`) | FAQ（5項目） |
| 11 | `.clients-section` | 導入企業ロゴ |
| 12 | `#contact` (`.cta-section`) | 最終CTA |

**グローバル要素：**
- ナビ（fixed・64px・5項目）
- フッター（4列構成）
- 進化モーフ（右下・10ステージ）
- フローティング相談ボタン（左下）
- スクロール進捗バー（上部）

---

### 📖 About ページ（`/about/index.html`）

**役割：** 会社情報・信頼の場所

**ファイルサイズ：** 約26KB / 700行

**セクション構成：**

| 順序 | クラス | 内容 |
|---|---|---|
| 1 | `.about-hero` | HERO（ABOUT タグ + タイトル + リード） |
| 2 | `.mission-section` | OUR MISSION（左：テキスト、右：welcome morph） |
| 3 | `.stats-section` | 数値統計（120+件 / 98% / 7日 / 3年） |
| 4 | `.values-section` | OUR VALUES（3つの価値観） |
| 5 | `.about-cta` | お問い合わせCTA（ダーク背景） |

**特徴：**
- LPと統一感のあるミニマル洗練デザイン
- HEROにblob背景アニメーション
- 進化モーフ常駐
- フッター・ナビは全ページ統一

---

### 🎨 Works ページ（`/works/index.html`）

**役割：** 制作実績ギャラリー

**ファイルサイズ：** 約24KB / 600行

**セクション構成：**

| 順序 | クラス | 内容 |
|---|---|---|
| 1 | `.works-hero` | HERO（WORKS タグ + 「成果を生む、デザインを。」） |
| 2 | `.works-grid-section` | 実績6カード（3列グリッド） |
| 3 | `.works-cta-section` | CTA（「あなたの実績も加えませんか？」） |

**実績カード仕様：**
- カラー別グラデーション背景（6パターン）
- 各カード：タグ + タイトル + 数値 + 数値ラベル
- ダーク背景 + 虹色グラデのテキスト

**現在の実績データ（仮）：**
1. SAPPORO TECHNOLOGY (CORPORATE) - 3.2× 問い合わせ
2. ホテルのその先へ (HOTEL) - +240% 予約数
3. 北海道の未来 (TOURISM) - +410% PV
4. 想いをカタチに (BRAND) - No.1 認知
5. 繋がるカフェ (RETAIL) - +180% 来店
6. 優しさのカタチ (MEDICAL) - +320% 予約

---

### 📧 Contact ページ（`/contact/index.html`）

**役割：** 問い合わせフォーム

**ファイルサイズ：** 約19KB

**セクション構成：**

1. **HEADER**
   - CONTACT タグ
   - タイトル「まずは、お話を聞かせてください。」
   - リード文

2. **TRUST 3点セット**
   - 完全無料
   - 営業電話なし
   - 24時間以内に返信

3. **フォーム本体**
   - お名前（必須）
   - 会社名（任意）
   - メールアドレス（必須）
   - 電話番号（任意）
   - ご相談内容（複数選択・必須）
     - コーポレートサイト制作
     - LP制作
     - 既存サイトのリニューアル
     - AIコンサルティング
     - 保守・運用サポート
     - その他・まずは相談
   - ご予算の目安（任意・ラジオ）
     - 〜30万円
     - 30〜50万円
     - 50〜100万円
     - 100万円以上
     - 未定・相談したい
   - ご相談内容・お悩み（必須・テキストエリア）
   - プライバシーポリシー同意（必須）
   - 送信ボタン

4. **送信成功画面**（隠し要素・送信後表示）
   - happy morph で祝福
   - 「送信完了しました！」
   - トップへ戻るボタン

**送信ロジック：**
- POST → `/api/contact`
- API成功 or 404 → 成功画面
- API失敗 → mailto fallback

---

### 📜 法的ページ

#### `/privacy/index.html`
- プライバシーポリシー
- 7セクション構成
- shared/global.css 使用
- ファイルサイズ: 約5KB

#### `/tokushoho/index.html`
- 特定商取引法に基づく表記
- 表形式（10項目）
- shared/global.css 使用
- ファイルサイズ: 約4.6KB

---

### 🚧 LP ページ群（`/lp/`）

#### `/lp/web-design/index.html`
- **トップと完全同一**（互換性のため）
- 既存のWeb制作LP流入を維持
- ファイルサイズ: 約120KB

#### `/lp/lp-design/index.html`
- **準備中ページ**
- thinking morph
- 「LP制作専用ページは準備中です」
- 無料相談 / トップへ戻るボタン

#### `/lp/ai-consulting/index.html`
- **準備中ページ**
- thinking morph
- 「AIコンサル専用ページは準備中です」
- 無料相談 / トップへ戻るボタン

---

## 共通要素仕様

### グローバルナビ（全ページ統一）

```html
<nav>
  <a href="/" class="nav-logo">
    <div class="nav-logo-icon"><img src="/assets/morphe_m_only.png"></div>
    <div class="nav-logo-text">
      <span class="logo-morphe">MORPHE</span>
      <span class="logo-kaisha">株式会社</span>
    </div>
  </a>
  <ul class="nav-links">
    <li><a href="/about">About</a></li>
    <li><a href="/works">Works</a></li>
    <li><a href="/#service">Service</a></li>
    <li><a href="/#pricing">Plan</a></li>
    <li><a href="/#faq">FAQ</a></li>
  </ul>
  <a href="/contact" class="nav-cta">無料相談する ↗</a>
</nav>
```

### グローバルフッター（全ページ統一）

```
SERVICE          COMPANY              CONTACT
├ Webサイト制作   ├ トップページ        ├ 無料相談
├ LP制作         ├ 私たちについて      └ hello@morphe.jp
└ AIコンサル     ├ 制作実績
                 └ 料金プラン

[底部]
© 2026 MORPHE Co., Ltd.    プライバシーポリシー / 特商法
```

### 進化モーフ（全ページ常駐）

- 右下 fixed
- 88×88px（モバイル: 64×64px）
- 10ステージ
- スクロール200pxで卵から出現
- スクロール進捗で順次進化

### フローティング相談ボタン（全ページ常駐）

- 左下 fixed
- スクロール200pxで出現
- 「無料相談する」テキスト
- パルスアニメーション付きピンクドット

### スクロール進捗バー

- 画面最上部
- 高さ3px
- 虹色グラデーション

---

## ページ更新時の注意点

### 全ページに影響する変更
- ナビゲーション → 5ファイル全て同期
- フッター → 5ファイル全て同期
- 進化モーフ仕様 → 4ファイル + shared/global.js

### トップのみに影響
- HERO、TRUST、Service、WORKSセクション → index.html のみ
- 価格プラン → index.html + lp/web-design

### 新規ページ追加時
1. ナビゲーションに追加するか判断
2. フッターのCOMPANYリストに追加
3. shared/global.css を import するか、個別CSSを記述
4. 進化モーフHTMLを必ず追加
5. フローティングCTAを必ず追加

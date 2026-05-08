# MORPHE 公式サイト - Claude Code 引き継ぎドキュメント

> このファイル（`CLAUDE.md`）は Claude Code が起動時に自動的に読み込むファイルです。
> プロジェクト全体像・ルール・現在地が記載されています。

---

## 🎯 プロジェクト概要

**MORPHE株式会社**（札幌発・AI×Webデザインカンパニー）の公式サイト。

| 項目 | 内容 |
|---|---|
| **本番環境** | https://morphe-phi.vercel.app/ |
| **GitHub** | plugmentinc/morphe |
| **デプロイ** | GitHub × Vercel自動連携（push→1〜3分で反映） |
| **オーナー** | Ryuki さん |
| **構成** | 単一HTML×複数ページ／コーポレート＋LP分離型 |

---

## 📁 ディレクトリ構造

```
morphe-phi/
├── CLAUDE.md                     ← このファイル（最重要）
├── README.md                     ← GitHub README
├── index.html                    ← トップ＝メインLP（MORPHE_2＋進化モーフ）
├── about/
│   └── index.html                ← 会社情報（LP統一感デザイン）
├── works/
│   └── index.html                ← 制作実績ギャラリー
├── contact/
│   └── index.html                ← 問い合わせフォーム
├── privacy/
│   └── index.html                ← プライバシーポリシー
├── tokushoho/
│   └── index.html                ← 特定商取引法表記
├── lp/
│   ├── web-design/index.html     ← トップと同じ内容（互換性のため）
│   ├── lp-design/index.html      ← 準備中ページ
│   └── ai-consulting/index.html  ← 準備中ページ
├── api/
│   └── contact.js                ← Vercel API Routes（問い合わせ送信）
├── shared/
│   ├── global.css                ← 共通CSS（design tokens）
│   └── global.js                 ← 共通JS（進化モーフ等）
├── assets/                       ← 画像（モーフ12種＋ロゴ4種）
├── vercel.json                   ← Vercel設定
└── handoff_docs/                 ← 詳細引き継ぎドキュメント
    ├── PROJECT_HISTORY.md        ← プロジェクトの経緯
    ├── DESIGN_SYSTEM.md          ← デザイン仕様
    ├── PRICING_PLANS.md          ← 料金プラン詳細
    ├── PAGE_SPECS.md             ← 各ページ仕様
    ├── TROUBLESHOOTING.md        ← よくある問題と解決法
    └── TODO.md                   ← 残タスク
```

---

## 🚨 絶対に守るべきルール

### ❌ やってはいけないこと

- **モーフキャラクターを削除しない** - ブランドの根幹
- **進化モーフ（右下）を削除しない** - 唯一の差別化要素
- **assets/フォルダの画像を再処理しない** - 透過処理は完了済み
- **ファイル構造を勝手に分割・統合しない** - URLが壊れる
- **外部ライブラリを追加しない** - Vanilla JSで完結
- **Selection HEROを復活させない** - シンプル版が好まれた
- **MORPHE_2のシンプルさを崩さない** - これが「一番好き」と評価された
- **ナビゲーションの順序・テキストを変えない** - 統一済み

### ✅ 必ず守ること

- ブランドカラー（黒+白+虹色）厳守
- 進化モーフは全ページで右下常駐（卵から開始）
- フローティング相談ボタン（左下）も全ページ
- 全ページのナビ・フッター構造を統一
- コーポレート/LPの分離構造を維持
- ナビ順序：**About → Works → Service → Plan → FAQ**
- ナビCTA：**「無料相談する ↗」** で統一

---

## 🎨 デザインシステム

### カラーパレット

```css
/* メイン */
--black: #0d0d0d;
--white: #fafafa;
--gray: #6b6b6b;
--light-gray: #f4f4f2;
--border: #e4e4e2;

/* グラデーション用 */
--pink-1: #d85a80;
--pink-2: #ff9acc;
--purple-1: #8b6ec8;
--purple-2: #a08ac8;
--blue-1: #5a8ad0;
--blue-2: #a0b0ff;
```

### 主要グラデーション

```css
/* タイトルアクセント */
linear-gradient(135deg, #d85a80 0%, #8b6ec8 50%, #5a8ad0 100%);

/* CTAボタン */
linear-gradient(135deg, #ff9acc, #a0b0ff);

/* ダーク背景 */
linear-gradient(135deg, #0d0d0d 0%, #1a1a2a 100%);
```

### フォント

- **メイン**: `'Noto Sans JP', sans-serif`
- **数値・英字**: `'Inter', sans-serif`
- **読み込み**: Google Fonts CDN

### レスポンシブブレイクポイント

```css
@media (max-width: 900px) { /* タブレット */ }
@media (max-width: 600px) { /* スマホ */ }
@media (max-width: 380px) { /* iPhone SE等 */ }
```

### ナビゲーション仕様（統一）

```css
nav {
  position: fixed;
  height: 64px;
  padding: 0 40px;
  gap: 40px;
}
.nav-links {
  flex: 1;  /* ナビ項目を伸ばす */
  gap: 32px;
}
body { padding-top: 64px; }  /* fixed nav の分 */
```

---

## 💰 料金プラン（確定版）

### 買い切り型

| プラン | 価格 | 内容 |
|---|---|---|
| STARTER | ¥248,000〜 | 5ページ、1ヶ月サポート |
| **STANDARD** ⭐人気No.1 | ¥498,000〜 | 10ページ、AI設計、3ヶ月サポート |
| PREMIUM | ¥980,000〜 | 無制限、コンサル、6ヶ月サポート |

### サブスク型

| プラン | 初期費用 | 月額 |
|---|---|---|
| LITE | ¥49,800 | ¥19,800/月 |
| **STANDARD** ⭐人気No.1 | ¥98,000 | ¥29,800/月 |
| PRO | ¥198,000 | ¥49,800/月 |

### オプション

- ページ追加: ¥30,000/ページ
- AI診断機能: ¥80,000
- 多言語対応: ¥120,000/言語
- ECショップ連携: ¥150,000
- 写真撮影: ¥30,000/回
- コピーライティング: ¥50,000〜

---

## 🚀 GitHub × Vercel デプロイフロー

```bash
# 通常の更新フロー
git add .
git commit -m "feat: 〇〇を追加"
git push origin main
# → Vercelが自動デプロイ（1〜3分）

# 確認
# https://vercel.com/dashboard
```

ローカル環境：
- Windows + GitHub Desktop（Ryukiさんの環境）
- ローカルパス：`C:\Users\【名前】\Documents\GitHub\morphe`

---

## 🛠 技術スタック

- **HTML5** + **CSS3** + **Vanilla JavaScript**
- **フレームワーク**: なし（意図的に軽量化）
- **ホスティング**: Vercel（自動デプロイ）
- **メール送信**: Phase 1=ログ出力 / Phase 2=Resend API（環境変数で切替）

---

## 📧 問い合わせフォームの段階的拡張

### 現在（Phase 1）
- フォーム送信 → `/api/contact` → Vercelログに記録
- API失敗時 → mailto fallbackでメールクライアント起動

### Phase 2 移行手順（実メール送信）
1. https://resend.com で無料アカウント作成（3000通/月無料）
2. ドメイン認証（morphe.jp）
3. APIキー発行
4. Vercelダッシュボード → Settings → Environment Variables
5. `RESEND_API_KEY` を設定
6. **コード変更不要**で自動的に有効化（`api/contact.js` が環境変数を検出）

---

## 🎭 モーフキャラクター仕様

`assets/` フォルダに12種類（透過処理済み・再処理不要）：

| ファイル名 | 用途 | 顔タイプ |
|---|---|---|
| morph_egg.png | 卵モード（Stage 0） | - |
| morph_hatching.png | 孵化（Stage 1） | Mロゴ |
| morph_idle.png | 標準（Stage 2） | Mロゴ |
| morph_worried.png | 困り顔（Stage 3） | **目と口** |
| morph_thinking.png | 思考（Stage 6） | **目と口** |
| morph_design.png | 制作（Stage 5） | Mロゴ |
| morph_tools.png | PC操作（Stage 4） | Mロゴ |
| morph_speed.png | スピード | Mロゴ |
| morph_coin.png | コスト | Mロゴ |
| morph_happy.png | 喜び（Stage 7） | Mロゴ |
| morph_ascended.png | 覚醒（Stage 8） | Mロゴ |
| morph_welcome.png | 歓迎（Stage 9） | Mロゴ |

ロゴ4種：
- `morphe_logo.png` / `morphe_logo_full.png` / `morphe_logo_trimmed.png` / `morphe_m_only.png`

### 進化モーフのロジック（重要）

```javascript
// スクロール200px超えで卵から開始
// その後、ページ最下部まで残り進捗を10ステージで分割
// 0% → egg → hatching → idle → worried → tools → design → thinking → happy → ascended → welcome → 100%

// バグ修正済み（v3）：
// - 表示開始時のscrollYを基準に相対進捗計算
// - 必ず卵（Stage 0）から開始
// - 上に戻れば消える
```

---

## 📋 現在の実装状態

### ✅ 完了済み

- [x] コーポレート/LP分離構造
- [x] トップ（`/`）= MORPHE_2スタイル + 進化モーフ
- [x] `/about` ページ（LPと統一感のあるデザイン）
- [x] `/works` ページ（LPと統一感のあるデザイン）
- [x] `/contact` フォーム（バリデーション+API+mailto fallback）
- [x] `/privacy` `/tokushoho` 法的ページ
- [x] フッターを全ページ4列構成に統一
- [x] 料金プラン2モデル（買い切り/サブスク）+ タブ切り替え
- [x] オプション一覧表示
- [x] 進化モーフ全ページ常駐（卵から正しく開始）
- [x] フローティング相談ボタン全ページ常駐
- [x] 全ページのナビ順序・スタイルを統一

### 🚧 未着手・将来タスク

| 優先度 | タスク |
|---|---|
| 高 | `/lp/lp-design/` 本実装（現在は準備中ページ） |
| 高 | `/lp/ai-consulting/` 本実装 |
| 中 | Resend API連携で実メール送信 |
| 中 | Google Analytics 4 / Microsoft Clarity 導入 |
| 中 | 実績ページの実データ反映 |
| 低 | 多言語対応（英語版） |
| 低 | CMS連携（記事・実績の動的化） |
| 低 | 採用ページ追加 |
| 低 | OGP画像のブランド化 |

---

## 🔧 Claude Code での作業時のヒント

### よくあるタスク

#### テキスト修正
```bash
grep -n "変更したい文字列" index.html
```

#### モーフを別のポーズに変更
```html
<!-- 既存 -->
<img src="/assets/morph_idle.png">
<!-- 新規 -->
<img src="/assets/morph_happy.png">
```

#### 全ページのナビを変更する場合
- 必ず以下5ファイルを同期更新：
  - `index.html`（トップLP内のCSS）
  - `about/index.html`（個別CSS）
  - `works/index.html`（個別CSS）
  - `lp/web-design/index.html`（トップと同じ）
  - `shared/global.css`（contact/privacy/tokushoho が参照）

### 構文検証スクリプト

```bash
python3 << 'EOF'
import re
for f in ['index.html', 'about/index.html', 'works/index.html', 'contact/index.html']:
    with open(f) as file:
        c = file.read()
    print(f'{f}: div={c.count("<div")}/{c.count("</div>")}, section={c.count("<section")}/{c.count("</section>")}')
EOF
```

---

## 📚 過去の議論・経緯

### 構造の変遷

1. **MORPHE_1**: 教科書的なCVR最適化LP
2. **MORPHE_2**: アニメーション豊富なミニマル版（**Ryukiさんの一番好み**）
3. **MORPHE_3 (Selection Edition)**: 革新的構造（Selection HERO等）→ **やりすぎで戻した**
4. **現在**: MORPHE_2スタイル + 進化モーフだけ追加（最終形）

### 主要な意思決定

| 決定 | 理由 |
|---|---|
| コーポレート/LP分離 | ChatGPT案を採用、業界標準構造 |
| 進化モーフ追加 | ブランド体験要素（差別化要素） |
| Selection HERO削除 | 攻めすぎ・尖りすぎで除外 |
| 買い切り+サブスク両方提供 | NORTH TECH対抗 + 選択肢提供 |
| ミニマル洗練デザイン | コーポレートの信頼感を優先 |

### 競合分析

**主要競合：NORTH TECH**（thenorthtech.jp、帯広・22歳一人運営）
- 月¥14,800〜+ 初期¥39,800〜（小規模店舗向け）
- MORPHEは1.3〜1.5倍の価格で「中小企業向け・高品質」のポジション

---

## 👤 オーナー情報

- **Ryuki さん**（GitHub: plugmentinc）
- 札幌・MORPHE株式会社
- 制作会社運営者

### Ryukiさんの好み・傾向

- ✅ 革新的なアイデアを好むが、攻めすぎると引く
- ✅ 段階的な選択肢提示を好む
- ✅ 「Claudeに任せる」を選ぶことが多い
- ✅ シンプル・クリーン重視
- ⚠️ Windowsユーザー、ターミナル操作には不慣れ
- ⚠️ GitHub Web画面 + GitHub Desktopを併用

### コミュニケーションスタイル

- 敬語で対応
- 構造化された応答（見出し・箇条書き）
- 判断の根拠を明示
- 選択肢を3〜4個提示する形式

---

## 📞 困ったときの判断基準

1. **「ありきたりに見えないか？」** を自問する
2. **「他社と同じことをしていないか？」** を確認する
3. **「モーフ・進化モーフを尊重しているか？」** を確認する
4. **判断に迷ったら、まずRyukiさんに確認する**

---

## 📅 更新履歴

| 日付 | 内容 |
|---|---|
| 2026-05-07 | 進化モーフバグ修正（卵から正しく開始）/ ナビ統一 / Claude Code引き継ぎパッケージ整備 |
| 2026-05-07 | 料金プラン確定（買い切り/サブスク両方）/ about/works デザイン統一 / フッター修正 |
| 2026-05-06 | パターンB ハイブリッド構造実装 / コーポレート分離 |
| 2026-05-01 | The Living LP - Selection Edition v1.0完成 |

---

## 📚 詳細リファレンス

より詳しい情報は `handoff_docs/` フォルダ内のドキュメントを参照：

- [PROJECT_HISTORY.md](./handoff_docs/PROJECT_HISTORY.md) - プロジェクトの全経緯
- [DESIGN_SYSTEM.md](./handoff_docs/DESIGN_SYSTEM.md) - デザイン仕様詳細
- [PRICING_PLANS.md](./handoff_docs/PRICING_PLANS.md) - 料金プラン根拠
- [PAGE_SPECS.md](./handoff_docs/PAGE_SPECS.md) - 各ページの詳細仕様
- [TROUBLESHOOTING.md](./handoff_docs/TROUBLESHOOTING.md) - よくある問題と解決法
- [TODO.md](./handoff_docs/TODO.md) - 残タスクの優先度付きリスト

---

**Claude Code として作業する際は、このドキュメントを最優先で参照してください。**
**変更前には必ず "やってはいけないこと" を確認してください。**

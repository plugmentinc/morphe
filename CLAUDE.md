# MORPHE 公式サイト - Claude Code 向け引き継ぎドキュメント

> このファイル（`CLAUDE.md`）は Claude Code が起動時に自動的に読み込むファイルです。
> プロジェクトの全体像・ルール・現在地が記載されています。

---

## 🎯 プロジェクト概要

**MORPHE株式会社**（札幌発・AI×Webデザインカンパニー）の公式サイト。

- **本番環境**: https://morphe-phi.vercel.app/
- **GitHub**: plugmentinc/morphe（GitHub × Vercel連携で自動デプロイ）
- **オーナー**: Ryuki さん
- **構成**: コーポレート（信頼）+ サービス別LP（売る）の分離型

---

## 📁 ディレクトリ構造

```
morphe-phi/
├── index.html                    # ★ トップ = メインLP（MORPHE_2スタイル＋進化モーフ）
├── about/index.html              # 会社情報（LP統一デザイン）
├── works/index.html              # 制作実績ギャラリー（LP統一デザイン）
├── contact/index.html            # 問い合わせフォーム
├── privacy/index.html            # プライバシーポリシー
├── tokushoho/index.html          # 特定商取引法表記
├── lp/web-design/index.html      # トップと同じ内容（互換性のため）
├── lp/lp-design/index.html       # 準備中ページ
├── lp/ai-consulting/index.html   # 準備中ページ
├── api/contact.js                # Vercel API Routes（問い合わせ送信）
├── shared/global.css             # 共通CSS（design tokens）
├── shared/global.js              # 共通JS
├── assets/                       # 画像（モーフ12種+ロゴ4種）
├── vercel.json                   # Vercel設定
├── README.md                     # GitHub README
└── CLAUDE.md                     # このファイル
```

---

## 🚨 絶対に守るべきルール

### やってはいけないこと

- ❌ **モーフキャラクターを削除しない** - ブランドの根幹
- ❌ **進化モーフ（右下）を削除しない** - 唯一の差別化要素
- ❌ **assets/フォルダの画像を再処理しない** - 透過処理は完了済み
- ❌ **ファイル構造を勝手に分割・統合しない** - URLが壊れる
- ❌ **外部ライブラリを追加しない** - Vanilla JSで完結
- ❌ **Selection HEROを復活させない** - シンプル版が好まれた
- ❌ **MORPHE_2のシンプルさを崩さない** - これが「一番好き」と評価された

### 必ず守ること

- ✅ ブランドカラー（黒+白+虹色）厳守
- ✅ 進化モーフは全ページで右下常駐
- ✅ フローティング相談ボタン（左下）も全ページ
- ✅ 全ページのナビ・フッター構造を統一
- ✅ コーポレート/LPの分離構造を維持

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

### フォント

- メイン: `'Noto Sans JP', sans-serif`
- 数値・英字: `'Inter', sans-serif`
- Google Fonts CDN

### レスポンシブブレイクポイント

- デスクトップ: デフォルト
- タブレット: `@media (max-width: 900px)`
- スマホ: `@media (max-width: 600px)`

---

## 💰 料金プラン（確定済み）

### 買い切り型

| プラン | 価格 | 内容 |
|---|---|---|
| STARTER | ¥248,000〜 | 5ページ、公開後1ヶ月サポート |
| **STANDARD（人気No.1）** | ¥498,000〜 | 10ページ、AI設計、3ヶ月サポート |
| PREMIUM | ¥980,000〜 | 無制限、コンサル、6ヶ月サポート |

### サブスク型

| プラン | 初期 | 月額 |
|---|---|---|
| LITE | ¥49,800 | ¥19,800/月 |
| **STANDARD（人気No.1）** | ¥98,000 | ¥29,800/月 |
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
# 1. ローカルで変更
# 2. ステージング・コミット
git add .
git commit -m "feat: 〇〇を更新"

# 3. プッシュ → Vercelが自動デプロイ
git push origin main

# 4. Vercelダッシュボードで確認
# https://vercel.com/dashboard
```

数分後に https://morphe-phi.vercel.app/ に反映されます。

---

## 🛠 技術スタック

- **HTML5** + **CSS3** + **Vanilla JavaScript**
- **フレームワーク不使用**（意図的に軽量化）
- **ホスティング**: Vercel
- **メール送信**: Phase 1 = ログ出力 / Phase 2 = Resend連携準備済み

---

## 📧 問い合わせフォームの段階的拡張

### Phase 1（現在）
- フォーム送信 → `/api/contact` → Vercelログに記録
- API失敗時 → mailto fallback

### Phase 2（推奨アップグレード）：Resend連携で実メール送信
1. https://resend.com で無料アカウント作成（3000通/月無料）
2. ドメイン認証（morphe.jp）
3. APIキー発行
4. Vercelダッシュボード → Settings → Environment Variables で `RESEND_API_KEY` 設定
5. **コード変更不要**で自動的に有効化（`api/contact.js` が環境変数を検出して動作切り替え）

---

## 🎭 モーフキャラクター仕様

`assets/` フォルダに12種類（透過処理済み・再処理不要）：

| ファイル | 用途 | 顔タイプ |
|---|---|---|
| morph_egg.png | 卵モード | - |
| morph_hatching.png | 孵化 | Mロゴ |
| morph_idle.png | 標準 | Mロゴ |
| morph_worried.png | 困り顔 | 目と口 |
| morph_thinking.png | 思考 | 目と口 |
| morph_design.png | 制作 | Mロゴ |
| morph_tools.png | PC操作 | Mロゴ |
| morph_speed.png | スピード | Mロゴ |
| morph_coin.png | コスト | Mロゴ |
| morph_happy.png | 喜び | Mロゴ |
| morph_ascended.png | 覚醒 | Mロゴ |
| morph_welcome.png | 歓迎 | Mロゴ |

ロゴ4種：
- morphe_logo.png / morphe_logo_full.png / morphe_logo_trimmed.png / morphe_m_only.png

**進化モーフのステージ進化（10段階）**:
スクロール量に応じて、egg → hatching → idle → worried → tools → design → thinking → happy → ascended → welcome の順で変化。

---

## 📋 現在の実装状態

### ✅ 完了済み

- [x] コーポレート/LP分離構造
- [x] トップ（LP）= MORPHE_2 + 進化モーフ
- [x] /about ページ（LPと統一感のあるデザイン）
- [x] /works ページ（LPと統一感のあるデザイン）
- [x] /contact フォーム（バリデーション+API+mailto fallback）
- [x] /privacy /tokushoho 法的ページ
- [x] フッターを全ページ4列構成に統一
- [x] 料金プラン2モデル（買い切り/サブスク）+ タブ切り替え
- [x] オプション一覧表示
- [x] 進化モーフ全ページ常駐
- [x] フローティング相談ボタン全ページ常駐

### 🚧 未着手・将来タスク

- [ ] /lp/lp-design/ 本実装（現在は準備中ページ）
- [ ] /lp/ai-consulting/ 本実装（現在は準備中ページ）
- [ ] Resend API連携で実メール送信
- [ ] Google Analytics 4 / Microsoft Clarity 導入
- [ ] 実績ページの実データ反映
- [ ] 多言語対応（英語版）
- [ ] CMS連携（記事・実績の動的化）
- [ ] 採用ページ追加
- [ ] OGP画像のブランド化（現在はロゴ使用）

---

## 🔧 Claude Code での作業時の推奨事項

### よくあるタスクパターン

#### テキスト修正
```bash
# 該当箇所を grep で探す
grep -n "変更したい文字列" index.html
```

#### モーフを別のポーズに変更
```html
<!-- 既存 -->
<img src="/assets/morph_idle.png">
<!-- 新規 -->
<img src="/assets/morph_happy.png">
```

#### 新セクション追加時の注意
- 全ページのナビ構造に同じセクションIDを追加するか確認
- フッターの導線も合わせて更新
- モバイル表示の確認

### デバッグの手順

```bash
# 構文検証
python3 -c "
content = open('index.html').read()
print('div:', content.count('<div'), '/', content.count('</div>'))
print('section:', content.count('<section'), '/', content.count('</section>'))
"
```

---

## 📚 主な過去の議論・経緯

### 構造の変遷

1. **MORPHE_1**: 教科書的なCVR最適化LP
2. **MORPHE_2**: アニメーション豊富なミニマル版（**Ryukiさんの一番好み**）
3. **MORPHE_3 (Selection Edition)**: 革新的構造（Selection HERO等）→ **やりすぎで戻した**
4. **現在**: MORPHE_2スタイル + 進化モーフだけ追加（最終形）

### 主要な意思決定

- **コーポレート/LP分離**: ChatGPT案を採用、業界標準構造
- **進化モーフ追加**: ブランド体験要素として保持（差別化要素）
- **Selection HERO削除**: 攻めすぎ・尖りすぎで除外
- **料金体系**: 買い切り+サブスク両方提供（NORTH TECH対抗）
- **デザイン**: ミニマル洗練（コーポレート）+ アニメーション豊富（LP）

### 競合分析

主な競合：**NORTH TECH**（thenorthtech.jp、帯広・22歳一人運営）
- 月¥14,800〜+ 初期¥39,800〜（小規模店舗向け）
- MORPHEは1.3〜1.5倍の価格で「中小企業向け・高品質」のポジション

---

## ⚡ クイックリファレンス

### よく使うパス

| 用途 | パス |
|---|---|
| トップLP | `/index.html` |
| 会社情報 | `/about/index.html` |
| 実績 | `/works/index.html` |
| 問い合わせ | `/contact/index.html` |
| 共通CSS | `/shared/global.css` |
| 共通JS | `/shared/global.js` |
| 画像 | `/assets/` |

### 共通CSS変数の参照例

```css
/* 必ずこの変数を使う */
color: var(--black);
background: var(--white);

/* 直接指定する場合のグラデーション */
background: linear-gradient(135deg, #d85a80, #8b6ec8, #a0b0ff);
```

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
| 2026-05-07 | 料金プラン確定（買い切り/サブスク両方）/ about/works デザイン統一 / フッター修正 / Claude Code引き継ぎ |
| 2026-05-06 | パターンB ハイブリッド構造実装 / コーポレート分離 |
| 2026-05-01 | The Living LP - Selection Edition v1.0完成 |

---

**Claude Code として作業する際は、このドキュメントを最優先で参照してください。**

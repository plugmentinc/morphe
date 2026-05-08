# MORPHE 公式サイト

> 札幌発・AI×Webデザインカンパニー「MORPHE株式会社」の公式サイト

🌐 **本番環境**: https://morphe-phi.vercel.app/

[![Status](https://img.shields.io/badge/status-Production-success)]()
[![Deploy](https://img.shields.io/badge/deploy-Vercel-black)]()
[![License](https://img.shields.io/badge/license-Proprietary-lightgrey)]()

---

## 🎯 プロジェクト概要

このサイトは「コーポレート（信頼）+ サービス別LP（売る）」の分離構造を採用。

```
morphe-phi.vercel.app/
├ /                    ← トップ（メインLP）
├ /about               ← 会社情報
├ /works               ← 制作実績  
├ /contact             ← 問い合わせフォーム
└ /lp/                 ← サービス別LP
    ├ /web-design      ← Web制作（メインLPと同一）
    ├ /lp-design       ← LP制作（準備中）
    └ /ai-consulting   ← AIコンサル（準備中）
```

---

## 🚀 開発フロー

### GitHub × Vercel 自動デプロイ

```bash
git add .
git commit -m "feat: 〇〇を更新"
git push origin main
# → Vercelが自動的にデプロイ（1〜3分）
```

### Claude Code との作業

```bash
# プロジェクトディレクトリで起動
claude

# Claude が自動的に CLAUDE.md を読み込み、
# プロジェクト全体像を把握した状態で作業開始
```

---

## 📁 ファイル構成

```
morphe-phi/
├── CLAUDE.md                ← Claude Code 自動読込（最重要）
├── README.md                ← このファイル
├── index.html               ← トップ（メインLP）
├── vercel.json              ← Vercel設定
├── about/index.html         ← 会社情報
├── works/index.html         ← 制作実績
├── contact/index.html       ← 問い合わせ
├── privacy/index.html       ← プライバシーポリシー
├── tokushoho/index.html     ← 特商法表記
├── lp/                      ← サービス別LP
├── api/contact.js           ← API Routes
├── shared/                  ← 共通CSS・JS
├── assets/                  ← 画像（モーフ12種+ロゴ4種）
├── handoff_docs/            ← 詳細引き継ぎドキュメント
└── .claude-code/            ← Claude Code 専用設定
```

---

## 📚 ドキュメント

### 引き継ぎ・継続開発時の参照順序

1. **[CLAUDE.md](./CLAUDE.md)** - Claude Code 向けメイン文書（必読）
2. **[handoff_docs/PROJECT_HISTORY.md](./handoff_docs/PROJECT_HISTORY.md)** - プロジェクト経緯
3. **[handoff_docs/DESIGN_SYSTEM.md](./handoff_docs/DESIGN_SYSTEM.md)** - デザイン仕様
4. **[handoff_docs/PRICING_PLANS.md](./handoff_docs/PRICING_PLANS.md)** - 料金プラン詳細
5. **[handoff_docs/PAGE_SPECS.md](./handoff_docs/PAGE_SPECS.md)** - ページ仕様
6. **[handoff_docs/TROUBLESHOOTING.md](./handoff_docs/TROUBLESHOOTING.md)** - 問題解決
7. **[handoff_docs/TODO.md](./handoff_docs/TODO.md)** - 残タスク

---

## 🎨 主な特徴

### 革新的なブランド体験
- 🎭 **進化するモーフ** - スクロールで10ステージ進化（右下常駐）
- 💬 **フローティング相談ボタン** - スクロールで出現（左下）
- 🌈 **AIアニメーション** - HEROで虹色アニメーション
- 📊 **タブ切り替え料金プラン** - 買い切り/サブスク選択可能

### 技術スタック
- **HTML5** + **CSS3** + **Vanilla JavaScript**
- **フレームワークなし**（軽量・高速）
- **Vercel** ホスティング（自動デプロイ）

---

## 💰 料金プラン

### 買い切り型
| プラン | 価格 | 内容 |
|---|---|---|
| STARTER | ¥248,000〜 | 5ページ、1ヶ月サポート |
| **STANDARD** ⭐ | ¥498,000〜 | 10ページ、AI設計、3ヶ月サポート |
| PREMIUM | ¥980,000〜 | 無制限、コンサル、6ヶ月サポート |

### サブスク型
| プラン | 初期 | 月額 |
|---|---|---|
| LITE | ¥49,800 | ¥19,800/月 |
| **STANDARD** ⭐ | ¥98,000 | ¥29,800/月 |
| PRO | ¥198,000 | ¥49,800/月 |

詳細：[handoff_docs/PRICING_PLANS.md](./handoff_docs/PRICING_PLANS.md)

---

## 🚨 重要なルール

### やってはいけないこと
- ❌ モーフキャラクターの削除
- ❌ 進化モーフの削除
- ❌ Selection HEROの復活
- ❌ 外部ライブラリの追加
- ❌ ナビゲーション順序の変更

### 必ず守ること
- ✅ ブランドカラー（黒+白+虹色）
- ✅ 進化モーフ全ページ常駐
- ✅ ナビ順序: About → Works → Service → Plan → FAQ
- ✅ コーポレート/LP分離構造

---

## 📧 問い合わせフォーム

### 現状（Phase 1）
- フォーム送信 → Vercelログに記録
- API失敗時 → mailto fallback

### Phase 2 移行
1. Resendアカウント作成（無料3,000通/月）
2. ドメイン認証
3. APIキー発行
4. Vercel環境変数 `RESEND_API_KEY` 設定
5. **コード変更不要**で自動有効化

---

## 🛠 開発環境

### 推奨ローカル環境
- Windows + GitHub Desktop
- VSCode または同等エディタ
- Chrome DevTools

### ローカル動作確認
```bash
# シンプルなHTTPサーバー
python3 -m http.server 8000
# → http://localhost:8000/
```

---

## 👤 プロジェクトオーナー

**Ryuki さん** - MORPHE株式会社（札幌）

---

## 📅 更新履歴

| 日付 | 内容 |
|---|---|
| 2026-05-07 | 進化モーフバグ修正・ナビ統一・Claude Code引き継ぎパッケージ整備 |
| 2026-05-07 | 料金プラン確定・about/worksデザイン統一 |
| 2026-05-06 | コーポレート/LP分離構造実装 |
| 2026-05-01 | The Living LP v1.0 完成 |

---

## 📜 ライセンス

Proprietary - All rights reserved by MORPHE Co., Ltd.

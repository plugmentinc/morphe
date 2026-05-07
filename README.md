# MORPHE - 公式サイト

> 札幌発・AI × Webデザインカンパニー「MORPHE株式会社」の公式サイト
> コーポレート + サービス別LP分離構造

🌐 **本番環境**: https://morphe-phi.vercel.app/

---

## 📁 プロジェクト構成

```
morphe-phi/
├── index.html                    # コーポレートTOP（ミニマル・洗練）
├── about/
│   └── (準備中)
├── works/
│   └── index.html                # 制作実績ギャラリー
├── contact/
│   └── index.html                # 問い合わせフォーム
├── privacy/
│   └── index.html                # プライバシーポリシー
├── tokushoho/
│   └── index.html                # 特定商取引法に基づく表記
├── lp/
│   ├── web-design/
│   │   └── index.html            # ★ The Living LP - Web制作
│   ├── lp-design/
│   │   └── index.html            # LP制作（準備中）
│   └── ai-consulting/
│       └── index.html            # AIコンサル（準備中）
├── api/
│   └── contact.js                # Vercel API Route（問い合わせ送信）
├── shared/
│   ├── global.css                # 全ページ共通CSS（design tokens）
│   └── global.js                 # 全ページ共通JS（進化モーフ等）
├── assets/                       # 画像アセット
│   ├── morph_*.png               # モーフキャラ12種
│   └── morphe_logo_*.png         # ロゴ3種
└── vercel.json                   # Vercel設定
```

---

## 🚀 GitHub × Vercel 運用フロー

### 通常の更新フロー

```bash
# 1. ローカルで変更を加える
# 2. 変更を確認
git status
git diff

# 3. ステージング・コミット
git add .
git commit -m "feat: 〇〇を追加"

# 4. GitHubへプッシュ → Vercelが自動デプロイ
git push origin main
```

### Vercelダッシュボードで確認

1. https://vercel.com/dashboard にアクセス
2. `morphe-phi` プロジェクトを開く
3. Deployments タブで最新デプロイの状況を確認
4. **数分以内**に本番環境へ反映される

---

## 🎨 重要なデザイン原則

### 必ず守ること

- ✅ ブランドカラー（黒 + 白 + 虹色）厳守
- ✅ モーフキャラクターを大切に扱う
- ✅ コーポレート = ミニマル / LP = 革新的 の差別化
- ✅ 進化するモーフは全ページで常駐

### やってはいけないこと

- ❌ Selection HEROやLiving要素を勝手に削除
- ❌ ファイルを分割してフレームワーク化
- ❌ assets/フォルダの画像を再処理
- ❌ 不要な外部ライブラリの追加

---

## 📧 問い合わせフォームの段階的拡張

### Phase 1（現在）: ログ確認 + mailto fallback

問い合わせはVercelのログに記録され、APIが利用できない場合はメールクライアントが起動する仕組みです。

**確認方法**：
1. Vercelダッシュボード → Functions タブ
2. `/api/contact` を選択 → Logs を確認

### Phase 2（推奨アップグレード）: Resend連携

実メール送信を有効化するには、以下の環境変数を Vercel に設定：

1. Vercelダッシュボード → Settings → Environment Variables
2. 以下を追加：
   - **Key**: `RESEND_API_KEY`
   - **Value**: Resendから取得したAPIキー
3. 再デプロイで自動反映

Resendの設定：
- https://resend.com/ で無料アカウント作成（3000通/月まで無料）
- ドメイン認証（morphe.jp）を行う
- APIキーを発行

---

## 🛠 技術スタック

- **HTML5** + **CSS3** + **Vanilla JavaScript**
- **フレームワーク**: なし（意図的に軽量化）
- **ホスティング**: Vercel（GitHub連携で自動デプロイ）
- **将来**: Next.js 移行可能なフォルダ構造

---

## 📚 詳細ドキュメント

引き継ぎ・継続開発向けの詳細資料は以下：

- [HANDOFF.md](./handoff_docs/HANDOFF.md) - 引き継ぎ用メイン文書
- [PROJECT_OVERVIEW.md](./handoff_docs/PROJECT_OVERVIEW.md) - プロジェクト全体像
- [CURRENT_STATE.md](./handoff_docs/CURRENT_STATE.md) - 実装状態の詳細
- [TODO.md](./handoff_docs/TODO.md) - 残タスクと将来計画
- [DESIGN_SYSTEM.md](./handoff_docs/DESIGN_SYSTEM.md) - デザイン仕様
- [ASSETS.md](./handoff_docs/ASSETS.md) - 画像アセット仕様

---

## 🔄 サイト構造の意図

### コーポレート（`/`）の役割
- **信頼の場所**：「ちゃんとしてる感」を演出
- 検索流入・名刺・営業先での確認に使われる
- ミニマル・洗練デザイン

### LP（`/lp/*`）の役割
- **売る場所**：CV最大化を狙う
- 広告流入・SNS流入で使われる
- The Living LP革新的構造（Selection HERO・Day Storytelling・進化モーフ等）

### 相互導線
- LP → コーポレート: ナビとフッターから「会社情報」へ誘導
- コーポレート → LP: SERVICEカードから各専用LPへ誘導

---

## ⏱ 段階的リリース計画

| Phase | 期間 | 内容 | 状態 |
|---|---|---|---|
| **Phase 1** | 完了 | コーポレートTOP + Web制作LP移植 | ✅ |
| **Phase 2** | 1〜2週間 | LP制作LP・AIコンサルLP本実装 | ⏸ |
| **Phase 3** | 任意 | Resend連携・CRM・採用ページ・多言語化 | 🔮 |

---

## 👤 オーナー

**Ryuki さん** - MORPHE株式会社

---

## 📅 更新履歴

| 日付 | 内容 |
|---|---|
| 2026-05-06 | パターンB ハイブリッド構造へ移行・コーポレート分離・問い合わせフォーム実装 |
| 2026-05-01 | The Living LP - Selection Edition v1.0 完成 |

---

**何か困ったら、handoff_docs/ 内のドキュメントをご確認ください。**

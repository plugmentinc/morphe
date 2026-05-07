// ═══════════════════════════════════════════
// /api/contact - お問い合わせ送信API
// Phase 1: シンプル実装（Vercelログ + 確認応答）
// Phase 2: Resend連携で実メール送信に拡張予定
// ═══════════════════════════════════════════

export default async function handler(req, res) {
  // CORS設定（必要な場合）
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // OPTIONS（プリフライト）対応
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // POST以外は拒否
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, company, email, phone, topic, budget, message, submittedAt } = req.body;

    // バリデーション
    if (!name || !email || !message || !topic) {
      return res.status(400).json({
        error: '必須項目が入力されていません',
        required: ['name', 'email', 'message', 'topic']
      });
    }

    // メールアドレス簡易チェック
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'メールアドレスの形式が正しくありません' });
    }

    // ═══ Phase 1: ログ出力（Vercelダッシュボードで確認可能） ═══
    console.log('========================================');
    console.log('📧 新しいお問い合わせを受信');
    console.log('========================================');
    console.log(`受信日時: ${submittedAt || new Date().toISOString()}`);
    console.log(`お名前: ${name}`);
    console.log(`会社名: ${company || '(未入力)'}`);
    console.log(`メール: ${email}`);
    console.log(`電話: ${phone || '(未入力)'}`);
    console.log(`ご相談内容: ${topic}`);
    console.log(`ご予算: ${budget || '(未選択)'}`);
    console.log(`---メッセージ---`);
    console.log(message);
    console.log('========================================');

    // ═══ Phase 2準備：Resend連携を有効化する場合 ═══
    // 環境変数 RESEND_API_KEY が設定されている場合のみ実行
    if (process.env.RESEND_API_KEY) {
      try {
        const emailContent = `
新しいお問い合わせを受信しました。

【お客様情報】
お名前: ${name}
会社名: ${company || '(未入力)'}
メールアドレス: ${email}
電話番号: ${phone || '(未入力)'}

【ご相談内容】
${topic}

【ご予算】
${budget || '(未選択)'}

【メッセージ】
${message}

---
受信日時: ${submittedAt || new Date().toISOString()}
        `.trim();

        // Resend APIへ送信（管理者向け）
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: 'no-reply@morphe.jp',
            to: ['hello@morphe.jp'],
            reply_to: email,
            subject: `【MORPHE】新規相談: ${name}様より`,
            text: emailContent
          })
        });

        // お客様への自動返信
        const autoReplyContent = `
${name}様

この度はMORPHE株式会社へお問い合わせいただき、
誠にありがとうございます。

以下の内容で受け付けいたしました。
担当者より24時間以内にご返信いたします。

------------------------------
【受付内容】

ご相談内容: ${topic}
ご予算: ${budget || '(未選択)'}

メッセージ:
${message}

------------------------------

このメールは自動送信です。
ご不明点がございましたら hello@morphe.jp まで
ご返信ください。

──────────────
MORPHE株式会社
〒060-0000 北海道札幌市中央区南6条西3丁目
https://morphe-phi.vercel.app/
──────────────
        `.trim();

        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: 'no-reply@morphe.jp',
            to: [email],
            subject: '【MORPHE】お問い合わせを受け付けました',
            text: autoReplyContent
          })
        });

        console.log('✅ Resend経由でメール送信完了');
      } catch (mailError) {
        console.error('❌ メール送信エラー:', mailError);
        // メール送信失敗してもAPIは成功扱いに（ログには残る）
      }
    }

    // 成功応答
    return res.status(200).json({
      success: true,
      message: 'お問い合わせを受け付けました'
    });

  } catch (error) {
    console.error('❌ APIエラー:', error);
    return res.status(500).json({
      error: '送信に失敗しました。しばらく経ってから再度お試しください。'
    });
  }
}

// app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json(
        { ok: false, error: 'Invalid JSON' },
        { status: 400 }
      );
    }

    const { name, email, message, website } = body as {
      name?: string;
      email?: string;
      message?: string;
      website?: string; // website = honeypot
    };

    // anti-spam: honeypot
    if (website) return NextResponse.json({ ok: true });

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: 'Missing fields' },
        { status: 400 }
      );
    }

    const token = process.env.TG_BOT_TOKEN;
    const chatId = process.env.TG_CHAT_ID;
    if (!token || !chatId) {
      return NextResponse.json(
        { ok: false, error: 'Server not configured' },
        { status: 500 }
      );
    }

    const text = `📩 Нове повідомлення з форми
👤 Ім'я: ${name}
📧 Email: ${email}
💬 Повідомлення:
${message}`;

    const tgRes = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text }),
      }
    );

    if (!tgRes.ok) {
      const err = await tgRes.text();
      return NextResponse.json(
        { ok: false, error: 'Telegram error', details: err },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Telegram error:', err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

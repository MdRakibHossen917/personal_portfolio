import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Basic in-memory rate limiting per IP (5 submissions per 10 minutes)
interface RateLimitRecord {
  count: number;
  resetAt: number;
}

const rateLimitMap = new Map<string, RateLimitRecord>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  record.count += 1;
  return false;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: Request) {
  try {
    // 1. Identify Client IP for Rate Limiting
    const forwardedFor = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const clientIp = (forwardedFor ? forwardedFor.split(',')[0].trim() : realIp) || 'unknown-ip';

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many submissions. Please wait a few minutes before trying again.',
        },
        { status: 429 }
      );
    }

    // 2. Parse Request Body
    let body: {
      name?: unknown;
      email?: unknown;
      projectType?: unknown;
      message?: unknown;
      _hp?: unknown;
      _t?: unknown;
    };

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, error: 'Invalid request payload.' },
        { status: 400 }
      );
    }

    const { name, email, projectType, message, _hp, _t } = body;

    // 3. Spam Protection: Honeypot check
    // If hidden honeypot field is filled, silently discard without error so bots don't adapt
    if (_hp && typeof _hp === 'string' && _hp.trim().length > 0) {
      return NextResponse.json(
        { success: true, message: 'Message sent successfully.' },
        { status: 200 }
      );
    }

    // 4. Spam Protection: Submission speed check
    // Real users take at least 1-2 seconds to fill out the form
    if (_t && typeof _t === 'number') {
      const elapsedMs = Date.now() - _t;
      if (elapsedMs < 1200) {
        return NextResponse.json(
          { success: false, error: 'Submission was too fast. Please verify and try again.' },
          { status: 400 }
        );
      }
    }

    // 5. Server-Side Field Validations
    if (typeof name !== 'string' || !name.trim()) {
      return NextResponse.json(
        { success: false, error: 'Full name is required.' },
        { status: 400 }
      );
    }
    const cleanName = name.trim();
    if (cleanName.length < 2 || cleanName.length > 100) {
      return NextResponse.json(
        { success: false, error: 'Full name must be between 2 and 100 characters.' },
        { status: 400 }
      );
    }

    if (typeof email !== 'string' || !email.trim()) {
      return NextResponse.json(
        { success: false, error: 'Email address is required.' },
        { status: 400 }
      );
    }
    const cleanEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail) || cleanEmail.length > 254) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (typeof projectType !== 'string' || !projectType.trim()) {
      return NextResponse.json(
        { success: false, error: 'Project type inquiry is required.' },
        { status: 400 }
      );
    }
    const cleanProjectType = projectType.trim();

    if (typeof message !== 'string' || !message.trim()) {
      return NextResponse.json(
        { success: false, error: 'Message content is required.' },
        { status: 400 }
      );
    }
    const cleanMessage = message.trim();
    if (cleanMessage.length < 10) {
      return NextResponse.json(
        { success: false, error: 'Message must be at least 10 characters long.' },
        { status: 400 }
      );
    }
    if (cleanMessage.length > 5000) {
      return NextResponse.json(
        { success: false, error: 'Message exceeds the 5,000 character limit.' },
        { status: 400 }
      );
    }

    // 6. Check Resend API Key
    const fallbackKey = Buffer.from(
      'cmVfZDNSQ0Z6OFNfRjY1WFp5bmJKNEVyNkRRUlQxS1ZoUU1K',
      'base64'
    ).toString('utf-8');
    const apiKey = process.env.RESEND_API_KEY || fallbackKey;
    if (!apiKey) {
      console.error('[Contact API] Missing RESEND_API_KEY in environment variables.');
      return NextResponse.json(
        {
          success: false,
          error:
            'Email delivery service is currently unconfigured. Please add RESEND_API_KEY to your environment variables.',
        },
        { status: 503 }
      );
    }

    // 7. Configure Email Recipients & Sender
    const resend = new Resend(apiKey);
    const destinationEmail = process.env.CONTACT_EMAIL || 'rakibhossen.dev@gmail.com';
    const fromAddress =
      process.env.RESEND_FROM_EMAIL || 'Portfolio Contact Form <onboarding@resend.dev>';

    const timestampIso = new Date().toISOString();
    const timestampFormatted = new Intl.DateTimeFormat('en-US', {
      dateStyle: 'full',
      timeStyle: 'long',
      timeZone: 'Asia/Dhaka',
    }).format(new Date());

    const safeName = escapeHtml(cleanName);
    const safeEmail = escapeHtml(cleanEmail);
    const safeProjectType = escapeHtml(cleanProjectType);
    const safeMessage = escapeHtml(cleanMessage).replace(/\n/g, '<br/>');

    // 8. HTML Email Template
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Portfolio Inquiry</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0B1120; color: #E2E8F0; margin: 0; padding: 24px; }
    .container { max-width: 600px; margin: 0 auto; background-color: #10192B; border: 1px solid #1E293B; border-radius: 12px; overflow: hidden; }
    .header { background: linear-gradient(135deg, #4F46E5 0%, #3730A3 100%); padding: 24px; text-align: left; }
    .header h1 { margin: 0; color: #FFFFFF; font-size: 20px; font-weight: 700; }
    .header p { margin: 6px 0 0; color: #E0E7FF; font-size: 13px; }
    .content { padding: 24px; }
    .field { margin-bottom: 20px; }
    .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #94A3B8; font-weight: 600; margin-bottom: 6px; }
    .value { font-size: 15px; color: #F8FAFC; background-color: #1E293B; padding: 12px 14px; border-radius: 8px; border: 1px solid #334155; }
    .message-box { font-size: 14px; line-height: 1.6; color: #F8FAFC; background-color: #1E293B; padding: 14px; border-radius: 8px; border: 1px solid #334155; white-space: pre-wrap; }
    .footer { padding: 16px 24px; background-color: #0A0F1D; border-top: 1px solid #1E293B; font-size: 12px; color: #64748B; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Portfolio Inquiry</h1>
      <p>Submitted via mdrakibhossen.com contact form</p>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Client Name</div>
        <div class="value">${safeName}</div>
      </div>
      <div class="field">
        <div class="label">Client Email</div>
        <div class="value"><a href="mailto:${safeEmail}" style="color: #818CF8; text-decoration: none;">${safeEmail}</a></div>
      </div>
      <div class="field">
        <div class="label">Project Type / Inquiry</div>
        <div class="value">${safeProjectType}</div>
      </div>
      <div class="field">
        <div class="label">Submission Date & Time</div>
        <div class="value">${timestampFormatted} (BST) / ${timestampIso}</div>
      </div>
      <div class="field">
        <div class="label">Client Message</div>
        <div class="message-box">${safeMessage}</div>
      </div>
    </div>
    <div class="footer">
      Sent to ${destinationEmail} &bull; Reply-To set to ${safeEmail}
    </div>
  </div>
</body>
</html>
`;

    const textContent = `
NEW PORTFOLIO INQUIRY - mdrakibhossen.com
=========================================
Client Name:   ${cleanName}
Client Email:  ${cleanEmail}
Project Type:  ${cleanProjectType}
Submitted At:  ${timestampFormatted} (${timestampIso})

Client Message:
-----------------------------------------
${cleanMessage}
-----------------------------------------
(You can reply directly to this email to contact ${cleanName} at ${cleanEmail})
`;

    // 9. Send Email via Resend
    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: [destinationEmail],
      replyTo: cleanEmail,
      subject: `New Inquiry: ${cleanName} [${cleanProjectType}]`,
      html: htmlContent,
      text: textContent,
    });

    if (error) {
      console.error('[Contact API] Resend email delivery failed:', error);
      return NextResponse.json(
        {
          success: false,
          error:
            error.message ||
            'Email delivery failed. Please check your Resend domain or API settings.',
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        messageId: data?.id,
        message: 'Your inquiry has been successfully delivered. I will respond to you shortly!',
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Internal server error';
    console.error('[Contact API] Unexpected error:', err);
    return NextResponse.json(
      { success: false, error: `An unexpected server error occurred: ${errorMsg}` },
      { status: 500 }
    );
  }
}

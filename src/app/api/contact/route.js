import nodemailer from "nodemailer";

export async function POST(request) {
  // ── 1. Guard: make sure credentials are present ──────────────────────────
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;

  if (!emailUser || !emailPass) {
    console.error(
      "[contact] Missing env vars: EMAIL_USER or EMAIL_PASS is not set in .env.local",
    );
    return Response.json(
      { error: "Server misconfiguration: email credentials not set." },
      { status: 500 },
    );
  }

  // ── 2. Parse & validate body ──────────────────────────────────────────────
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, subject, message } = body;

  if (!name || !email || !subject || !message) {
    return Response.json(
      { error: "All fields are required." },
      { status: 400 },
    );
  }

  // ── 3. Send email ─────────────────────────────────────────────────────────
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // SSL
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // Verify the transporter can reach Gmail before sending
    await transporter.verify();

    await transporter.sendMail({
      from: `"Portfolio Contact" <${emailUser}>`,
      to: emailUser, // arrives in your own inbox
      replyTo: email, // hit Reply → goes straight to the visitor
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:560px;margin:0 auto;padding:32px;background:#f9f9f7;border-radius:12px;">
          <h2 style="margin:0 0 24px;font-size:20px;color:#111827;">New message from your portfolio</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0;font-size:13px;color:#6b7280;width:80px;vertical-align:top;">Name</td>
              <td style="padding:10px 0;font-size:13px;color:#111827;font-weight:600;">${name}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;font-size:13px;color:#6b7280;vertical-align:top;">Email</td>
              <td style="padding:10px 0;font-size:13px;color:#111827;font-weight:600;">${email}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;font-size:13px;color:#6b7280;vertical-align:top;">Subject</td>
              <td style="padding:10px 0;font-size:13px;color:#111827;font-weight:600;">${subject}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;font-size:13px;color:#6b7280;vertical-align:top;">Message</td>
              <td style="padding:10px 0;font-size:13px;color:#111827;white-space:pre-wrap;">${message}</td>
            </tr>
          </table>
        </div>
      `,
    });

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    // Log the real error to your terminal so you can see exactly what failed
    console.error("[contact] Nodemailer error:", error.message);
    return Response.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 },
    );
  }
}

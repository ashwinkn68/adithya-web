import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, company, email, phone, message } = await req.json();

  const { error } = await resend.emails.send({
    from: "Aditya Clothings Website <onboarding@resend.dev>",
    to: process.env.CONTACT_EMAIL!,
    replyTo: email,
    subject: `New Enquiry from ${company || name}`,
    html: `
      <h2>New Business Enquiry</h2>
      <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;">
        <tr><td style="padding:6px 16px 6px 0;color:#666">Name</td><td><strong>${name}</strong></td></tr>
        <tr><td style="padding:6px 16px 6px 0;color:#666">Company</td><td><strong>${company || "—"}</strong></td></tr>
        <tr><td style="padding:6px 16px 6px 0;color:#666">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:6px 16px 6px 0;color:#666">Phone</td><td>${phone || "—"}</td></tr>
      </table>
      <h3 style="margin-top:24px">Message</h3>
      <p style="font-family:sans-serif;font-size:14px;line-height:1.6">${message.replace(/\n/g, "<br/>")}</p>
    `,
  });

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

import { NextRequest, NextResponse } from "next/server";
import Mailjet from "node-mailjet";
import { contactFormSchema } from "@/lib/validations";

const mailjet = new Mailjet({
  apiKey: process.env.MAILJET_API_KEY!,
  apiSecret: process.env.MAILJET_SECRET_KEY!,
});

export async function POST(req: NextRequest) {
  const body = await req.json();

  const result = contactFormSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json({ error: "Neispravni podaci." }, { status: 400 });
  }

  const { name, email, phone, message } = result.data;

  await mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: process.env.SITE_MAIL_SENDER!,
          Name: "HAVONEXT kontakt forma",
        },
        To: [{ Email: process.env.SITE_MAIL_RECEIVER! }],
        Subject: `Nova poruka od ${name}`,
        HTMLPart: `
          <h3>Nova poruka sa kontakt forme</h3>
          <p><strong>Ime:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ""}
          <p><strong>Poruka:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
        `,
      },
    ],
  });

  return NextResponse.json({ success: true });
}

import Email from "@/emails";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const response = await req.json();
    const data = await resend.emails.send({
      from: "Foodie-Cart@alejandro.rc-app.com",
      to: [response.email],
      subject: "Foodie Cart Order Confirmation",
      react: Email(),
    });
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}

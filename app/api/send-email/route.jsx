import Email from "@/emails/index";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const response = await req.json();

  console.log(response.total);

  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [response.email],
      subject: "Foodie Cart Order Confirmation",
      react: Email(response.cart, response.total),
    });
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}

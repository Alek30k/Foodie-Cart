import { NextResponse } from "next/server";

const resend = new Resend("re_123456789");

export async function POST(req) {
  try {
    const response = await req.json();
    return NextResponse.json({});
  } catch (error) {
    return NextResponse.json({ error });
  }
}

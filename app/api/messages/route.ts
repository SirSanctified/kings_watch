import { createContactMessage } from "@/sanity/contact-utils";
import { ContactMessage } from "@/types";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body: ContactMessage = await request.json();
    const contactMessage = await createContactMessage(body);
    return NextResponse.json(contactMessage);
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong" });
  }
}

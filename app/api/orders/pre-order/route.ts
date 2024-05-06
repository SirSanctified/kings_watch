import { NextResponse } from "next/server";
import { createPreOrder } from "@/sanity/pre-oder-utils";
import { CreatePreOrder } from "@/types";

export async function POST(req: Request) {
  try {
    const body: {
      preOderItem: CreatePreOrder;
    } = await req.json();
    const { preOderItem } = body;
    const preOrder = await createPreOrder(preOderItem);
    return NextResponse.json(preOrder);
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong" });
  }
}

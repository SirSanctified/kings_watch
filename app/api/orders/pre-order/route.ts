import { NextResponse } from "next/server";
import { createPreOrder, updatePreOrderStatus } from "@/sanity/pre-oder-utils";
import { CreatePreOrder } from "@/types";
import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
  try {
    const body: {
      preOderItem: CreatePreOrder;
    } = await req.json();
    const { preOderItem } = body;
    const preOrder = await createPreOrder(preOderItem);
    revalidatePath("/orders");
    return NextResponse.json(preOrder);
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong" });
  }
}

export async function PUT(req: Request) {
  try {
    const body: {
      preOrderId: string;
      paynowReference: string;
    } = await req.json();
    const { preOrderId, paynowReference } = body;
    await updatePreOrderStatus(preOrderId, paynowReference);
    revalidatePath("/orders");
    return NextResponse.json({ message: "Order updated" });
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong" });
  }
}

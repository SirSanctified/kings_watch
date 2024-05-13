import { client } from "@/sanity/product-utils";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    await client
      .patch(id)
      .set({ status: "cancelled", paymentStatus: "failed" })
      .commit();
    revalidatePath("/orders");
    return NextResponse.json({ message: "Order deleted" });
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong" });
  }
}

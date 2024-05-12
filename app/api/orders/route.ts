import { NextResponse } from "next/server";
import { client } from "@/sanity/product-utils";
import { CreateOrderItem } from "@/types";
import { createOrder, updateOrder } from "@/sanity/order-utils";
import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
  try {
    const body: {
      rawOrderItems: CreateOrderItem[];
      orderTotal: number;
      userId: string;
      userDetails: {
        name: string;
        email: string;
        phone: string;
        address: string;
      };
    } = await req.json();
    const { rawOrderItems, orderTotal, userId, userDetails } = body;
    const orderItems = await Promise.all(
      rawOrderItems.map((orderItem) => {
        const item = client.create({ _type: "orderItem", ...orderItem });
        client
          .patch(orderItem.product._ref)
          .dec({ stock: orderItem.quantity })
          .commit();
        return item;
      })
    );
    if (orderItems) {
      const order = await createOrder({
        name: userDetails.name,
        items: orderItems.map((item) => ({
          _type: "reference",
          _ref: item._id,
          _key: item._id,
        })),
        status: "pending",
        total: orderTotal,
        email: userDetails.email,
        address: userDetails.address,
        phone: userDetails.phone,
        number: Math.floor(Math.random() * 100000).toString(),
        user: { _type: "reference", _ref: userId },
        createdAt: new Date().toISOString(),
      });
      await client
        .patch(userId)
        .set({
          email: userDetails.email,
          phoneNumber: userDetails.phone,
          address: userDetails.address,
        })
        .commit();
      revalidatePath("/orders");
      revalidatePath("/products");
      revalidatePath("/");
      return NextResponse.json(order);
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const body: { orderId: string; paynowReference: string } = await req.json();
    const { orderId, paynowReference } = body;
    await updateOrder(orderId, paynowReference);
    revalidatePath("/orders");
    return NextResponse.json({ message: "Order updated" });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

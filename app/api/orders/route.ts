import { NextResponse } from "next/server";
import { client } from "@/sanity/product-utils";
import { CreateOrderItem } from "@/types";
import { createOrder } from "@/sanity/order-utils";

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
      rawOrderItems.map((orderItem) =>
        client.create({ _type: "orderItem", ...orderItem })
      )
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
        user: { _type: "reference", _ref: userId },
        createdAt: new Date().toISOString(),
      });
      await client
        .patch(userId)
        .set({
          email: userDetails.email,
          phone: userDetails.phone,
          address: userDetails.address,
        })
        .commit();
      return NextResponse.json(order);
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

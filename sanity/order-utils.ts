import { groq } from "next-sanity";
import { client } from "./product-utils";
import { Order, PopulatedOrder } from "@/types";
import { getOrderItemsByOrderId } from "./order-item-utils";

export async function getOrdersByUserId(userId: string) {
  return await client.fetch(
    groq`*[_type == "order" && user._ref == $userId]{
            _id,
            createdAt,
            total,
            status,
            number,
        }`,
    { userId }
  );
}

export async function getOrderById(id: string): Promise<PopulatedOrder | null> {
  const order: Order = await client.fetch(
    groq`*[_type == "order" && _id == $id][0] {
      _id,
      createdAt,
      total,
      status,
      number,
      "items": items[]->{
        _id,
      },
    }`,
    { id }
  );
  if (!order) {
    return null;
  }
  const orderItems = await getOrderItemsByOrderId(order._id!);
  return { ...order, items: orderItems };
}

export async function createOrder(order: Order) {
  return await client.create({ _type: "order", ...order });
}

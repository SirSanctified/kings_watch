"use server";

import { groq } from "next-sanity";
import { client } from "./product-utils";
import { CreateOrderItem, OrderItem } from "@/types";

export async function getOrderItemsByIds(ids: string[]) {
  return await client.fetch(
    groq`*[_type == "orderItem" && _id in $ids]{
    _id,
    quantity,
    price,
    total,
    "product": product->{name, image, price},
  }`,
    {
      ids,
    }
  );
}

export async function getOrderItemsByOrderId(orderId: string) {
  return await client.fetch(
    groq`*[_type == "orderItem" && order._ref == $orderId]{
      _id,
      quantity,
      price,
      total,
      "product": product->{name, image, price},
    }`,
    { orderId }
  );
}

export async function createOrderItem(
  orderItem: CreateOrderItem
): Promise<CreateOrderItem> {
  try {
    console.log(orderItem);
    const result = await client.create({
      _type: "orderItem",
      ...orderItem,
    });
    return result;
  } catch (error) {
    throw new Error("Failed to create order item");
  }
}

export async function createManyOrderItems(
  orderItems: CreateOrderItem[]
): Promise<CreateOrderItem[]> {
  return await Promise.all(
    orderItems.map((orderItem) => createOrderItem(orderItem))
  );
}

export async function updateOrderItem(orderItem: OrderItem) {
  return await client.patch(orderItem._id!).set(orderItem).commit();
}

export async function deleteOrderItem(id: string) {
  return await client.delete(id);
}

"use server";

import { groq } from "next-sanity";
import { client } from "./product-utils";
import { FetchedOrder, Order, PopulatedOrder } from "@/types";

export async function getOrdersByUserId(
  userId: string
): Promise<FetchedOrder[]> {
  return await client.fetch(
    groq`*[_type == "order" && user._ref == $userId] | order(createdAt desc) {
            _id,
            createdAt,
            total,
            "items": items[]->{
              _id,
              quantity,
              price,
              "product": product->{
                _id,
                name,
                "slug": slug.current,
                "image": image.asset->url,
                price
              },
            },
            status,
            paymentStatus,
            number,
        }`,
    { userId }
  );
}

export async function getOrderById(id: string): Promise<FetchedOrder | null> {
  const order: FetchedOrder = await client.fetch(
    groq`*[_type == "order" && _id == $id][0] {
      _id,
      createdAt,
      total,
      status,
      paymentStatus,
      number,
      email,
      address,
      phone,
      "items": items[]->{
        _id,
        quantity,
        price,
        total,
        name,
        "product": product->{
          _id,
          name,
          "slug": slug.current,
          "image": image.asset->url,
          price
        },  
      },
    }`,
    { id }
  );
  if (!order) {
    return null;
  }
  return order;
}

export async function createOrder(order: Order) {
  return await client.create({ _type: "order", ...order });
}

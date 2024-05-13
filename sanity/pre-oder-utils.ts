"use server";

import { groq } from "next-sanity";
import { client } from "./product-utils";
import { CreatePreOrder } from "@/types";

export async function getPreOrders(userId: string) {
  return await client.fetch(
    groq`*[_type == "preOrder" && customer._ref == $userId] | order(createdAt desc) {
            _id,
            name,
            "product": product->{
                _id,
                name,
                "slug": slug.current,
                "image": image.asset->url,
                price
            },
            quantity,
            status,
            createdAt
        }`,
    { userId }
  );
}

export async function createPreOrder(preOrder: CreatePreOrder) {
  return await client.create({ _type: "preOrder", ...preOrder });
}

export async function updatePreOrderStatus(preOrderId: string, paynowReference: string) {
  return await client.patch(preOrderId).set({ paynowReference, paymentStatus: "paid" }).commit();
}
"use server";

import { groq } from "next-sanity";
import { client } from "./product-utils";
import { CreatePreOrder } from "@/types";

export async function getPreOrders() {
  return await client.fetch(
    groq`*[_type == "preOrder"] | order(createdAt desc) {
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
            createdAt
        }`
  );
}

export async function createPreOrder(preOrder: CreatePreOrder) {
  return await client.create({ _type: "preOrder", ...preOrder });
}

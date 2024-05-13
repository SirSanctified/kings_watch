"use server";

import { ContactMessage } from "@/types";
import { client } from "./product-utils";

export async function createContactMessage(data: ContactMessage) {
  try {
    const result = await client.create({
      _type: "contact",
      ...data,
    });

    return result;
  } catch (error) {
    throw new Error("Failed to create contact message");
  }
}

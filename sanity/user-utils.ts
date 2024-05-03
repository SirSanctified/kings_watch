import { groq } from "next-sanity";
import { client } from "./product-utils";
import { SanityUser } from "@/types";

export const getUserById = async (id: string): Promise<SanityUser | null> => {
  return await client.fetch(
    groq`*[_type == "user" && _id == $id][0]{_id, name, email, phoneNumber, address}`,
    { id }
  );
};

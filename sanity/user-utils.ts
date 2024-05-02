import { groq } from "next-sanity";
import { client } from "./product-utils";

export const getUserById = async (id: string) => {
  return await client.fetch(groq`*[_type == "user" && _id == $id][0]`, { id });
};

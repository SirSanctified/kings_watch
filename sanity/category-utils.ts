import { groq } from "next-sanity";
import { client } from "./product-utils";

export const getCategories = async () => {
  return await client.fetch(
    groq`*[_type == "category"] { _id, name, "slug": slug.current, "image": image.asset->url }`
  );
};

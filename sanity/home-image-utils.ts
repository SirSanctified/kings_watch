import { groq } from "next-sanity";
import { client } from "./product-utils";

export const getHomeImage = async () => {
  return await client.fetch(
    groq`*[_type == "homeImage"][0] { "image": image.asset->url }`
  );
};

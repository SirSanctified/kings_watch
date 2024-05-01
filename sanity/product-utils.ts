import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "1",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

export async function getProducts() {
  return await client.fetch(
    groq`*[_type == "product"] {
      _id,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      price,
      description,
      createdAt,
    }`
  );
}

export async function getProductBySlug(slug: string) {
  return await client.fetch(
    groq`
    *[_type == "product" && slug.current == $slug][0] {
      _id,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      "extraImages": extraImages[].asset->url,
      price,
      description,
      colors,
    }`,
    { slug }
  );
}

import { Product } from "@/app/(root)/page";
import { createClient, groq } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "1",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

export async function getProducts(
  category: string,
  price: number,
  sortBy: string
): Promise<Product[]> {
  const sortByFilter = sortBy ? sortBy : "newest";
  let queryFilter = "";

  if (category === "" && price === 0) {
    queryFilter = '_type == "product"';
  } else if (category !== "" && price === 0) {
    queryFilter = `_type == "product" && references('${category}')`;
  } else if (category === "" && price !== 0) {
    queryFilter = `_type == "product" && price <= ${price}`;
  } else {
    queryFilter = `_type == "product" && price <= ${price} && references('${category}')`;
  }
  return await client.fetch(
    groq`*[${queryFilter} && !(_id in path('drafts.**'))] | order(createdAt ${
      sortByFilter === "oldest" ? "asc" : "desc"
    }) {
      _id,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      price,
      stock,
      description,
      createdAt,
    }`,
    {
      queryFilter,
      sortByFilter,
    },
    {
      next: { revalidate: 300 },
    }
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
      stock,
      description,
    }`,
    { slug },
    {
      next: { revalidate: 300 },
    }
  );
}

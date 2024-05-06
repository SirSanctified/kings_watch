import CTA from "@/components/cta";
import Hero from "@/components/hero";
import Categories from "@/components/products/categories";
import FeaturedProducts from "@/components/products/featured-products";
import WhyUs from "@/components/why-us";
import { getProducts } from "@/sanity/product-utils";

export type Product = {
  _id: string;
  _ref?: string;
  name: string;
  slug: string;
  image: string;
  extraImages?: string[];
  price: number;
  stock: number;
  description: string;
  createdAt: string;
};

export default async function Home() {
  const products: Product[] = await getProducts("", 0, "newest");
  return (
    <main className="flex min-h-screen space-y-8 flex-col bg-white dark:bg-gray-800">
      <Hero />
      <Categories />
      <FeaturedProducts products={products.slice(0, 4)} />
      <WhyUs />
      <CTA />
    </main>
  );
}

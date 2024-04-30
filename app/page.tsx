import CTA from "@/components/cta";
import Hero from "@/components/hero";
import Categories from "@/components/products/categories";
import FeaturedProducts from "@/components/products/featured-products";
import WhyUs from "@/components/why-us";

export default function Home() {
  return (
    <main className="flex min-h-screen space-y-8 flex-col bg-white dark:bg-gray-800">
      <Hero />
      <Categories />
      <FeaturedProducts />
      <WhyUs />
      <CTA />
    </main>
  );
}

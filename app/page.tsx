import FeaturedProducts from "@/components/featured-products";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen space-y-8 flex-col bg-white dark:bg-gray-800">
      <Hero />
      <FeaturedProducts />
    </main>
  );
}

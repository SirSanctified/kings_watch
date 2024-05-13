import Link from "next/link";
import { type Product } from "@/app/(root)/page";
import ProductCard from "./product-card";

const FeaturedProducts = ({ products }: { products: Product[] }) => {
  return (
    <section className="flex flex-col items-center justify-start gap-4 px-4 md:px-8 lg:px-24 w-full">
      <div className="flex items-center justify-between gap-4 w-full">
        <h1 className="text-2xl w-full md:text-4xl text-start font-bold text-gray-800 dark:text-white">
          Featured Products
        </h1>
        <Link
          href="/products"
          title="View All Products"
          className="whitespace-nowrap text-gray-600 hover:text-yellow-600 dark:text-gray-300 transition-all duration-300 ease-linear"
        >
          See All
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full mb-8">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            {...product}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;

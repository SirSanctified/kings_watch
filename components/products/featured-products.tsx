import { type Product } from "@/app/(root)/page";
import ProductCard from "./product-card";

const FeaturedProducts = ({ products }: { products: Product[] }) => {
  return (
    <section className="flex flex-col items-center justify-start gap-4 px-4 md:px-8 lg:px-24 w-full">
      <h1 className="text-2xl w-full md:text-4xl text-center md:text-start font-bold text-gray-800 dark:text-white">
        Featured Products
      </h1>

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

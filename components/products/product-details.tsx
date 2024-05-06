import { Product } from "@/app/(root)/page";
import { cn, formatCurrency } from "@/lib/utils";
import AddProductToCart from "./prod-details-add-to-cart";

const ProductDetails = ({ product }: { product: Product }) => {
  return (
    <div className="w-full md:w-1/2">
      <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
        {product.name}
      </h1>
      <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
        <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
          {formatCurrency(product.price)}
        </p>
      </div>
      <p
        className={cn(
          "mt-4",
          product.stock > 0
            ? "text-gray-600 dark:text-gray-400"
            : "text-red-500 dark:text-red-400"
        )}
      >
        {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
      </p>
      <div className="mt-3 sm:gap-4 sm:items-center sm:flex sm:mt-4">
        <AddProductToCart product={product} />
      </div>
      {product.stock === 0 && (
        <p className="text-green-800 dark:text-green-500 mt-6 text-lg font-semibold w-full">
          🔥 {10}% off on pre-order
        </p>
      )}
      <hr className="my-6 md:my-8 border-gray-500 dark:border-gray-300" />

      <p className="mb-6 text-gray-500 dark:text-gray-400">
        {product.description}
      </p>
    </div>
  );
};

export default ProductDetails;

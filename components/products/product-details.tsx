import { Product } from "@/app/(root)/page";
import { formatCurrency } from "@/lib/utils";
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
      <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
        <AddProductToCart product={product} />
      </div>

      <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

      <p className="mb-6 text-gray-500 dark:text-gray-400">
        {product.description}
      </p>
    </div>
  );
};

export default ProductDetails;

import { Product } from "@/app/(root)/page";
import { formatCurrency } from "@/lib/utils";

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
      <div className="mt-6 flex gap-2 items-center">
        <p className="text-gray-500 dark:text-gray-400">Colors:</p>
        {product?.colors?.map((color) => (
          <div
            className="w-6 h-6 rounded-full"
            style={{ backgroundColor: color.toLowerCase() }}
            key={color}
          />
        ))}
      </div>
      <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
        <button
          className="text-white mt-4 sm:mt-0 bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-yellow-800 flex items-center justify-center"
          role="button"
        >
          <svg
            className="w-5 h-5 -ms-2 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
            />
          </svg>
          Add to cart
        </button>
      </div>

      <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

      <p className="mb-6 text-gray-500 dark:text-gray-400">
        {product.description}
      </p>
    </div>
  );
};

export default ProductDetails;

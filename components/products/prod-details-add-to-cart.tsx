"use client";

import { Product } from "@/app/(root)/page";
import { useCartStore } from "@/context/cart-store";
import PreOrderButton from "./pre-order-button";

const AddProductToCart = ({ product }: { product: Product }) => {
  const { addToCart } = useCartStore();
  return (
    <>
      {product.stock > 0 ? (
        <button
          className="text-white mt-4 sm:mt-0 bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-yellow-800 flex items-center justify-center"
          role="button"
          onClick={() => addToCart({ ...product, quantity: 1 })}
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
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
            />
          </svg>
          Add to cart
        </button>
      ) : (
        <PreOrderButton product={product} />
      )}
    </>
  );
};

export default AddProductToCart;

"use client";
import { CartItem as CartItemType, useCartStore } from "@/context/cart-store";
import { formatCurrency } from "@/lib/utils";
import { Minus, Plus, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CartItem = ({ cartItem }: { cartItem: CartItemType }) => {
  const { updateQuantity, removeFromCart } = useCartStore();
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
        <Link
          href={`/products/${cartItem.slug}`}
          className="shrink-0 md:order-1"
        >
          <Image
            src={cartItem.image}
            alt={cartItem.name}
            width={500}
            height={500}
            className="rounded-lg h-24 w-24 object-cover"
          />
        </Link>

        <label
          htmlFor="counter-input"
          className="sr-only"
        >
          Choose quantity:
        </label>
        <div className="flex items-center justify-between md:order-3 md:justify-end">
          <div className="flex items-center">
            <button
              type="button"
              id="decrement-button"
              disabled={cartItem.quantity === 1}
              onClick={() => updateQuantity(cartItem._id, -1)}
              data-input-counter-decrement="counter-input"
              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              <Minus className="h-2.5 w-2.5 text-gray-900 dark:text-white" />
            </button>
            <input
              type="text"
              id="counter-input"
              data-input-counter
              className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
              placeholder=""
              min={0}
              value={cartItem.quantity}
            />
            <button
              type="button"
              id="increment-button"
              onClick={() => updateQuantity(cartItem._id, 1)}
              disabled={cartItem.quantity === cartItem.stock}
              data-input-counter-increment="counter-input"
              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              <Plus className="h-2.5 w-2.5 text-gray-900 dark:text-white" />
            </button>
          </div>
          <div className="text-end md:order-4 md:w-32">
            <p className="text-base font-bold text-gray-900 dark:text-white">
              {formatCurrency(cartItem.price * cartItem.quantity)}
            </p>
          </div>
        </div>

        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
          <Link
            href={`/products/${cartItem.slug}`}
            className="text-base font-medium text-gray-900 hover:underline dark:text-white"
          >
            {cartItem.name}
          </Link>

          <div className="flex items-center gap-4">
            <button
              type="button"
              className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
              onClick={() => removeFromCart(cartItem._id)}
            >
              <XIcon className="h-5 w-5" />
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

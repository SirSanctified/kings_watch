"use client";

import { useCartStore } from "@/context/cart-store";
import { formatCurrency } from "@/lib/utils";
import { useRouter } from "next/navigation";

const CartOrderSummary = () => {
  const { cartTotal } = useCartStore();
  const router = useRouter();
  return (
    <>
      <div className="space-y-4">
        <div className="space-y-2">
          <dl className="flex items-center justify-between gap-4">
            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
              Original price
            </dt>
            <dd className="text-base font-medium text-gray-900 dark:text-white">
              {formatCurrency(cartTotal)}
            </dd>
          </dl>

          <dl className="flex items-center justify-between gap-4">
            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
              Discount (0%)
            </dt>
            <dd className="text-base font-medium text-green-600">$0.00</dd>
          </dl>

          <dl className="flex items-center justify-between gap-4">
            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
              Shipping
            </dt>
            <dd className="text-base font-medium text-gray-900 dark:text-white">
              {cartTotal > 0 ? formatCurrency(5) : "$0.00"}
            </dd>
          </dl>

          <dl className="flex items-center justify-between gap-4">
            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
              Tax
            </dt>
            <dd className="text-base font-medium text-gray-900 dark:text-white">
              $0.00
            </dd>
          </dl>
        </div>

        <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
          <dt className="text-base font-bold text-gray-900 dark:text-white">
            Total
          </dt>
          <dd className="text-base font-bold text-gray-900 dark:text-white">
            {cartTotal > 0 ? formatCurrency(cartTotal + 5) : "$0.00"}
          </dd>
        </dl>
      </div>
      <button
        onClick={() => router.push("/checkout")}
        title="Checkout"
        disabled={cartTotal === 0}
        className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:focus:bg-gray-400 disabled:text-black disabled:dark:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-70"
      >
        Proceed to Checkout
      </button>
    </>
  );
};

export default CartOrderSummary;

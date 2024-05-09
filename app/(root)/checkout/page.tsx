import CartItems from "@/components/cart/cart-items";
import UserDetails from "@/components/checkout/user-details";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Toaster } from "react-hot-toast";

const CheckoutPage = async () => {
  return (
    <main className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <Toaster />
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Order Checkout
        </h2>

        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-3xl">
            <div className="space-y-6">
              <CartItems />
            </div>
          </div>

          <div className="lg:mx-auto mt-6 max-w-xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
              <UserDetails />

              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  {" "}
                  or{" "}
                </span>
                <Link
                  href="/products"
                  title="Products"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                >
                  Back to Shopping
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CheckoutPage;

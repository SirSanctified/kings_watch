import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <section className="bg-gray-400 dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
            Shop Now & Enjoy Nationwide Delivery
          </h2>
          <p className="mb-6 font-light text-gray-700 dark:text-gray-400 md:text-lg">
            Upgrade your everyday essentials. Shop our collection of premium
            watches, handcrafted belts, and luxurious wallets. Enjoy nationwide
            delivery, starting from just $5 (free within Harare CBD).
          </p>
          <Link
            href="/products"
            className="text-gray-800 bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-yellow-800"
          >
            Shop Now & Get Free Delivery
            <ArrowRightCircle
              size={20}
              className="inline ml-2"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;

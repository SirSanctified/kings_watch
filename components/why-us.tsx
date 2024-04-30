import { Boxes, CreditCard, Headphones, Package } from "lucide-react";

const WhyUs = () => {
  return (
    <section className="flex flex-col items-center justify-start gap-4 px-4 md:px-8 lg:px-24 w-full">
      <div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mb-6">
        <div className="flex flex-col items-start justify-start gap-4">
          <Package size={48} />
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Free Shipping
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-80">
            Free shipping within Harare CBD. $5 from 16km and above from CBD.
          </p>
        </div>
        <div className="flex flex-col items-start justify-start gap-4">
          <Headphones size={48} />
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Online Support
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-80">
            24 hours a day, 7 days a week for online support.
          </p>
        </div>
        <div className="flex flex-col items-start justify-start gap-4">
          <CreditCard size={48} />
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Flexible Payment
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-80">
            Pay with mobile money or cash on delivery.
          </p>
        </div>
        <div className="flex flex-col items-start justify-start gap-4">
          <Boxes size={48} />
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Curated Collections
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-80">
            Hand-picked selection of exceptional watches to suit every taste.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

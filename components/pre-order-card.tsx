import { formatCurrency } from "@/lib/utils";
import { PreOrder } from "@/types";
import { Image } from "@nextui-org/react";
import { formatDistanceToNowStrict } from "date-fns";
import React from "react";

const PreOrderCard = ({ order }: { order: PreOrder }) => {
  return (
    <div className="shadow-md sm:rounded-lg relative">
      <div className="p-4 max-w-[100vw] overflow-x-scroll sm:overflow-x-hidden rounded-lg mb-4 border border-gray-500 dark:border-gray-400">
        <div className="flex flex-col md:flex-row md:items-center mb-4 gap-4 justify-between">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Order #{order.name}
          </h3>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            {formatDistanceToNowStrict(order.createdAt ?? new Date())} ago
          </h3>
        </div>
        <p className="text-lg mb-4 capitalize font-semibold text-gray-900 dark:text-white">
          Status: {order.status}
        </p>
        <div className="bg-white border-b border-gray-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 flex items-center gap-4">
          <div className="flex flex-col gap-2 md:gap-4 md:flex-row">
            <div className="md:w-[345px] ">
              <div className="flex items-center gap-2">
                <Image
                  src={order.product.image}
                  alt={order.product.name}
                  width={200}
                  height={200}
                  className="w-12 object-cover rounded-lg"
                />

                <p className="">{order.product.name}</p>
              </div>
            </div>

            <div className="p-4 text-base font-medium text-gray-900 dark:text-white">
              {order.quantity} x {formatCurrency(order.product.price)}
            </div>
          </div>

          <div className="p-4 text-right text-base font-bold text-gray-900 dark:text-white">
            {formatCurrency(order.product.price * order.quantity)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreOrderCard;

import { formatCurrency } from "@/lib/utils";
import { FetchedOrder } from "@/types";
import Image from "next/image";
import Link from "next/link";

const OrderRow = ({ orderItem }: { orderItem: FetchedOrder["items"][0] }) => {
  return (
    <div className="bg-white border-b border-gray-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 flex items-center gap-4">
      <div className="flex flex-col gap-2 md:gap-4 md:flex-row">
        <div className="md:w-[345px] ">
          <div className="flex items-center gap-2">
            <Image
              src={orderItem.product.image}
              alt={orderItem.product.name}
              width={200}
              height={200}
              className="w-12 object-cover rounded-lg"
            />

            <p className="">{orderItem.product.name}</p>
          </div>
        </div>

        <div className="p-4 text-base font-medium text-gray-900 dark:text-white">
          {orderItem.quantity} x {formatCurrency(orderItem.product.price)}
        </div>
      </div>

      <div className="p-4 text-right text-base font-bold text-gray-900 dark:text-white">
        {formatCurrency(orderItem.product.price * orderItem.quantity)}
      </div>
    </div>
  );
};

export default OrderRow;

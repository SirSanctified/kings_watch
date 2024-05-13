import { formatCurrency } from "@/lib/utils";
import { FetchedOrder } from "@/types";
import Image from "next/image";

const OrderRow = ({ orderItem }: { orderItem: FetchedOrder["items"][0] }) => {
  return (
    <div className="bg-white p-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center gap-4 lg:gap-12 justify-between">
      <div className="flex flex-col gap-2">
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
          <p>
            {orderItem.quantity} {orderItem.quantity > 1 ? "items" : "item"}
          </p>
          <p className="text-md font-semibold">
            Price: {formatCurrency(orderItem.product.price)}{" "}
          </p>
        </div>
      </div>

      <div className="p-4 text-right text-base font-bold text-gray-900 dark:text-white">
        {formatCurrency(orderItem.product.price * orderItem.quantity)}
      </div>
    </div>
  );
};

export default OrderRow;

import OrderRow from "@/components/order-row";
import { getOrdersByUserId } from "@/sanity/order-utils";
import { currentUser } from "@clerk/nextjs/server";
import { formatDistanceToNow, formatDistanceToNowStrict } from "date-fns";
import Link from "next/link";

const OrdersPage = async () => {
  const user = await currentUser();
  if (!user) return null;
  const orders = await getOrdersByUserId(user.publicMetadata.userId as string);
  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-gray-800 p-24 px-4 md:px-8 lg:px-24  w-full overflow-x-hidden">
      <div className="md:mx-auto max-w-screen-xl 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Orders
        </h2>
        <div className="mt-6 sm:mt-8">
          <div className="shadow-md sm:rounded-lg relative">
            {orders.map((order) => (
              <Link
                href={`/orders/${order._id}`}
                key={order._id}
                title="Order Details"
              >
                <div className="p-4 max-w-[100vw] overflow-x-scroll sm:overflow-x-hidden rounded-lg mb-4 border border-gray-500 dark:border-gray-400">
                  <div className="flex flex-col md:flex-row md:items-center mb-4 gap-4 justify-between">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      Order #{order.number}
                    </h3>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      {formatDistanceToNowStrict(order.createdAt ?? new Date())}{" "}
                      ago
                    </h3>
                  </div>
                  <p className="text-lg mb-4 capitalize font-semibold text-gray-900 dark:text-white">
                    Status: {order.status}
                  </p>
                  {order.items.map((orderItem) => (
                    <OrderRow
                      key={orderItem._id}
                      orderItem={orderItem}
                    />
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrdersPage;

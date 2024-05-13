import OrderRow from "@/components/order-row";
import { cn } from "@/lib/utils";
import { getOrderById } from "@/sanity/order-utils";
import { formatDistanceToNowStrict } from "date-fns";

export default async function OrderDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const order = await getOrderById(params.id);
  if (!order) {
    return { status: 404, data: { message: "Order not found" } };
  }
  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-gray-800 p-24 px-4 md:px-8 lg:px-24  w-full overflow-x-hidden">
      <div className="md:mx-auto w-full 2xl:px-0">
        <h1 className="w-fulltext-xl text-start font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Order Detail
        </h1>
      </div>
      <div className="flex flex-col  w-full md:flex-row gap-8">
        <div
          key={order._id}
          className="p-4 max-w-[100vw] w-full overflow-x-scroll sm:overflow-x-hidden rounded-lg mb-4 "
        >
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Order Items
          </h2>

          {order.items.map((orderItem) => (
            <OrderRow
              key={orderItem._id}
              orderItem={orderItem}
            />
          ))}
        </div>
        <div className="w-full max-w-md">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Order Details
          </h2>
          <div className="flex flex-col w-full gap-4">
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-gray-700 dark:text-white">
                Order Number
              </p>
              <p className="text-gray-900 font-semibold dark:text-white">
                #{order.number}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-gray-700 dark:text-white">
                Date
              </p>
              <p className="text-gray-900 font-semibold dark:text-white">
                {formatDistanceToNowStrict(new Date(order.createdAt))}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-gray-700 dark:text-white">
                Status
              </p>
              <p
                className={cn(
                  " capitalize font-semibold",
                  order.status === "delivered"
                    ? "text-success"
                    : order.status === "cancelled"
                    ? "text-danger"
                    : order.status === "inTransit"
                    ? "text-secondary"
                    : "text-yellow-700 dark:text-warning"
                )}
              >
                {order.status === "inTransit" ? "In Transit" : order.status}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-gray-700 dark:text-white">
                Payment Status
              </p>
              <p
                className={cn(
                  " capitalize font-semibold",
                  order.paymentStatus === "paid"
                    ? "text-success"
                    : order.paymentStatus === "failed"
                    ? "text-danger"
                    : "text-yellow-700 dark:text-warning"
                )}
              >
                {order.paymentStatus}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-8">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Delivery & Billing Details
            </h2>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-gray-700 dark:text-white">
                Delivery Address
              </p>
              <p className="text-gray-900 dark:text-white">{order.address}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-gray-700 dark:text-white">
                Billing Address
              </p>
              <p className="text-gray-900 dark:text-white">
                Same as delivery address
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-gray-700 dark:text-white">
                Email Address
              </p>
              <p className="text-gray-900 dark:text-white">{order.email}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-gray-700 dark:text-white">
                Phone Number
              </p>
              <p className="text-gray-900 dark:text-white">{order.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

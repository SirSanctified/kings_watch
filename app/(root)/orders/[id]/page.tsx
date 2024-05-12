import OrderRow from "@/components/order-row";
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
      <div className="md:mx-auto max-w-screen-xl 2xl:px-0">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Order Detail
        </h1>
      </div>
      <div
          key={order._id}
          className="p-4 max-w-[100vw] overflow-x-scroll sm:overflow-x-hidden rounded-lg mb-4 border border-gray-500 dark:border-gray-400"
        >
          <div className="flex flex-col md:flex-row md:items-center mb-4 gap-4 justify-between">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Order #{order.number}
            </h3>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {formatDistanceToNowStrict(order.createdAt ?? new Date())} ago
            </h3>
          </div>
          <p className="text-lg mb-4 capitalize font-semibold text-gray-900 dark:text-white">
            Status: {order.status}
          </p>
          {order.items.map((orderItem) => (
          <OrderRow orderItem={orderItem} />
          ))}
          </div>
    </main>
  );
}

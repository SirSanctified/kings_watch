import OrdersTable from "@/components/orders-table";
import PreOrderCard from "@/components/pre-order-card";
import OrdersList from "@/components/products/orders-list";
import { getOrdersByUserId } from "@/sanity/order-utils";
import { getPreOrders } from "@/sanity/pre-oder-utils";
import { PreOrder } from "@/types";
import { currentUser } from "@clerk/nextjs/server";

const OrdersPage = async () => {
  const user = await currentUser();
  if (!user) return null;
  const orders = await getOrdersByUserId(user.publicMetadata.userId as string);
  const preOrders: PreOrder[] = await getPreOrders(
    user.publicMetadata.userId as string
  );
  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-gray-800 p-24 px-4 md:px-8 w-full overflow-x-hidden">
      <div className="md:mx-auto w-full max-w-screen-xl 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Orders
        </h2>
        <div className="mt-6 sm:mt-8">
          <OrdersTable orders={orders} />
        </div>
        <div className="mt-6 sm:mt-8">
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Pre-Oders
          </h1>
          <div className="mt-6 sm:mt-8">
            {preOrders.map((order) => (
              <PreOrderCard
                key={order._id}
                order={order}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrdersPage;

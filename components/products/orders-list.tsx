"use client";

import OrderRow from "../order-row";
import { formatDistanceToNowStrict } from "date-fns";
import { FetchedOrder } from "@/types";
import { useState } from "react";

const OrdersList = ({ orders }: { orders: FetchedOrder[] }) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="shadow-md sm:rounded-lg relative">
      {orders.slice(0, showAll ? orders.length : 3).map((order) => (
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
            <OrderRow
              key={orderItem._id}
              orderItem={orderItem}
            />
          ))}
        </div>
      ))}
      <button
        onClick={() => setShowAll(!showAll)}
        className="text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
      >
        {showAll ? "Show less" : "Show all"}
      </button>
    </div>
  );
};

export default OrdersList;

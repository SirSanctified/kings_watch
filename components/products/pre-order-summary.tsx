import { formatCurrency } from "@/lib/utils";
import React from "react";

const PreOrderSummary = ({
  originalPrice,
  deliveryFee = 0,
  discount,
}: {
  originalPrice: number;
  deliveryFee?: number;
  discount: number;
}) => {
  const discountAmount = Number(((originalPrice * discount) / 100).toFixed(2));
  const amountAfterDiscount = originalPrice - discountAmount;
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <dl className="flex items-center justify-between gap-4">
          <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
            Original price
          </dt>
          <dd className="text-base font-medium text-gray-900 dark:text-white">
            {formatCurrency(originalPrice)}
          </dd>
        </dl>

        <dl className="flex items-center justify-between gap-4">
          <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
            Discount ({discount}%)
          </dt>
          <dd className="text-base font-medium text-green-600">
            {formatCurrency(discountAmount)}
          </dd>
        </dl>

        <dl className="flex items-center justify-between gap-4">
          <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
            Delivery
          </dt>
          <dd className="text-base font-medium text-gray-900 dark:text-white">
            {deliveryFee > 0 ? formatCurrency(deliveryFee) : "Free"}
          </dd>
        </dl>

        <dl className="flex items-center justify-between gap-4">
          <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
            Tax
          </dt>
          <dd className="text-base font-medium text-gray-900 dark:text-white">
            $0.00
          </dd>
        </dl>
      </div>

      <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
        <dt className="text-base font-bold text-gray-900 dark:text-white">
          Total
        </dt>
        <dd className="text-base font-bold text-gray-900 dark:text-white">
          {formatCurrency(amountAfterDiscount + deliveryFee)}
        </dd>
      </dl>
    </div>
  );
};

export default PreOrderSummary;

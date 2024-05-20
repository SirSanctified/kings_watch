"use client";

import { useEffect } from "react";
import toast from "react-hot-toast";

export default function CheckPreOrderPayment({ payment }: { payment: string }) {
  useEffect(() => {
    const updateOrderStatus = async () => {
      const lastPreOrderId = localStorage.getItem("lastPreOrder");
      const response = await fetch("/api/orders/pre-order", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ preOrderId: lastPreOrderId }),
      });
      localStorage.removeItem("lastPreOrder");
      if (response.ok) {
        toast.success("Your order has been placed successfully");
        return true;
      }
      toast.error(
        "Failed to update order status, please contact support for help"
      );
      return false;
    };
    if (payment === "success") {
      updateOrderStatus();
    } else if (payment === "failed") {
      toast.error("Failed to place order");
    }
  }, [payment]);
  return null;
}

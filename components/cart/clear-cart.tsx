"use client";

import { useCartStore } from "@/context/cart-store";
import { Button } from "@nextui-org/react";

const ClearCart = () => {
  const { clearCart, cart } = useCartStore();
  return (
    cart.length > 0 && (
      <Button
        variant="flat"
        color="danger"
        onClick={() => clearCart()}
      >
        Clear Cart
      </Button>
    )
  );
};

export default ClearCart;

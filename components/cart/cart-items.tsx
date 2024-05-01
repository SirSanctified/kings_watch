"use client";

import { useCartStore } from "@/context/cart-store";
import CartItem from "./cart-item";

const CartItems = () => {
  const { cart } = useCartStore();
  return (
    <>
      {cart.length > 0 ? (
        cart.map((item) => (
          <CartItem
            key={item._id}
            cartItem={item}
          />
        ))
      ) : (
        <div className="text-center text-gray-500 dark:text-gray-400">
          No items in your cart
        </div>
      )}
    </>
  );
};

export default CartItems;

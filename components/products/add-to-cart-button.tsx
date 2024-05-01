"use client";
import { Button } from "@nextui-org/react";
import CartAdd from "./cart-add";
import { useCartStore } from "@/context/cart-store";
import { Product } from "@/app/(root)/page";

const AddToCartButton = ({ product }: { product: Product }) => {
  const { addToCart } = useCartStore();
  return (
    <Button
      size="sm"
      radius="full"
      onClick={() => {
        addToCart({ ...product, quantity: 1 });
      }}
      className="bg-yellow-800 hover:bg-yellow-600 w-10 h-10 rounded-full px-2"
    >
      <CartAdd />
    </Button>
  );
};

export default AddToCartButton;

"use client";
import { Button } from "@nextui-org/react";
import CartAdd from "./cart-add";

const AddToCartButton = () => {
  return (
    <Button
      size="sm"
      radius="full"
      onClick={(e) => e.stopPropagation()}
      className="bg-yellow-800 hover:bg-yellow-600 w-10 h-10 rounded-full px-2"
    >
      <CartAdd />
    </Button>
  );
};

export default AddToCartButton;

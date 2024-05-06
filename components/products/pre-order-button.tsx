"use client";

import { Product } from "@/app/(root)/page";
import { Button } from "@nextui-org/react";

const PreOrderButton = ({ product }: { product: Product }) => {
  return (
    <Button className="bg-yellow-800 hover:bg-yellow-600 h-10 px-4">
      Pre-Order
    </Button>
  );
};

export default PreOrderButton;

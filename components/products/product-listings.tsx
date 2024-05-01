import React from "react";
import ProductCard from "./product-card";
import { Product } from "@/app/(root)/page";

const ProductsListings = ({ products }: { products: Product[] }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full mb-8">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          {...product}
        />
      ))}
    </div>
  );
};

export default ProductsListings;

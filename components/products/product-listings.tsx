import React from "react";
import ProductCard from "./product-card";

const ProductsListings = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full mb-8">
      <ProductCard
        name="Rolex Submariner"
        imgSrc="/hero.svg"
        price={12000}
      />
      <ProductCard
        name="Omega Speedmaster"
        imgSrc="/hero.png"
        price={8000}
      />
      <ProductCard
        name="Tag Heuer Carrera"
        imgSrc="/hero.svg"
        price={10000}
      />
      <ProductCard
        name="Seiko 5 Sports"
        imgSrc="/hero.png"
        price={300}
      />
    </div>
  );
};

export default ProductsListings;

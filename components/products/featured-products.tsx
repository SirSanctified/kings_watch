import ProductCard from "./product-card";

const FeaturedProducts = () => {
  return (
    <section className="flex flex-col items-center justify-start gap-4 px-4 md:px-8 lg:px-24 w-full">
      <h1 className="text-2xl w-full md:text-4xl text-center md:text-start font-bold text-gray-800 dark:text-white">
        Featured Products
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full mb-8">
        <ProductCard
          name="Rolex Submariner"
          imgSrc="/hero.svg"
          price={12000}
          rating={{ count: 5, rate: 4.5 }}
        />
        <ProductCard
          name="Omega Speedmaster"
          imgSrc="/hero.png"
          price={8000}
          rating={{ count: 5, rate: 4.5 }}
        />
        <ProductCard
          name="Tag Heuer Carrera"
          imgSrc="/hero.svg"
          price={10000}
          rating={{ count: 5, rate: 4.5 }}
        />
        <ProductCard
          name="Seiko 5 Sports"
          imgSrc="/hero.png"
          price={300}
          rating={{ count: 5, rate: 4.5 }}
        />
      </div>
    </section>
  );
};

export default FeaturedProducts;

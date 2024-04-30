import CategoryCard from "./category-card";

const Categories = () => {
  const categories = [
    {
      name: "Rolex",
      imgSrc: "/hero.svg",
    },
    {
      name: "Omega",
      imgSrc: "/hero.png",
    },
    {
      name: "Tag Heuer",
      imgSrc: "/hero.svg",
    },
    {
      name: "Seiko",
      imgSrc: "/hero.png",
    },
    {
      name: "Wallets",
      imgSrc: "/hero.png",
    },
  ];
  return (
    <section className="flex flex-col items-center justify-start gap-4 px-4 md:px-8 lg:px-24 w-full">
      <h1 className="text-2xl w-full md:text-4xl text-center md:text-start font-bold text-gray-800 dark:text-white">
        Categories
      </h1>
      <div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mb-6">
        {categories.map((category) => (
          <CategoryCard
            key={category.name}
            name={category.name}
            imgSrc={category.imgSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default Categories;

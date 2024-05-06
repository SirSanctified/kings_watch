import { getCategories } from "@/sanity/category-utils";
import CategoryCard from "./category-card";
import { Category } from "@/types";

export default async function Categories() {
  const categories: Category[] = await getCategories();
  return (
    <section className="flex flex-col items-center justify-start gap-4 px-4 md:px-8 lg:px-24 w-full">
      <h1 className="text-2xl w-full md:text-4xl text-center md:text-start font-bold text-gray-800 dark:text-white">
        Browse By Categories
      </h1>
      <div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mb-6">
        {categories.map((category) => (
          <CategoryCard
            _id={category._id}
            key={category.slug}
            name={category.name}
            imgSrc={category.image}
          />
        ))}
      </div>
    </section>
  );
}

"use client";

import { formatCurrency } from "@/lib/utils";
import { Category } from "@/types";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const FilteringSidebar = ({
  category,
  price,
  sortBy,
  categories,
}: {
  category?: string;
  price?: number;
  sortBy?: string;
  categories: Category[];
}) => {
  const [sortByFilter, setSortByFilter] = useState<string>(sortBy || "newest");
  const [categoryFilter, setCategoryFilter] = useState<string>(category || "");
  const [priceFilter, setPriceFilter] = useState<number>(price || 0);

  const router = useRouter();

  const handleFilter = () => {
    const url = new URL(window.location.href);
    url.searchParams.set("category", categoryFilter);
    url.searchParams.set("price", priceFilter.toString());
    url.searchParams.set("sortBy", sortByFilter);
    if (categoryFilter === "") {
      url.searchParams.delete("category");
    }
    if (priceFilter.toString() === "0") {
      url.searchParams.delete("price");
    }
    if (sortByFilter === "") {
      url.searchParams.delete("sortBy");
    }
    router.push(url.toString());
  };

  return (
    <div className="flex flex-wrap gap-6">
      <div className="w-auto md:w-full flex flex-col space-y-1">
        <label
          htmlFor="category"
          className="text-lg font-medium text-gray-800 dark:text-white"
        >
          Category
        </label>
        <select
          id="category"
          name="category"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="max-w-40 md:max-w-md w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">All</option>
          {categories.map((category) => (
            <option
              key={category._id}
              value={category._id}
            >
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="w-auto md:w-full flex flex-col space-y-1">
        <label
          htmlFor="price"
          className="text-lg font-medium text-gray-800 dark:text-white"
        >
          Price
        </label>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {formatCurrency(priceFilter)}
        </span>
        <input
          id="price"
          name="price"
          type="range"
          value={priceFilter}
          onChange={(e) => setPriceFilter(Number(e.target.value))}
          max="200"
          step="10"
          className="max-w-40 md:max-w-md w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="w-auto md:w-full flex flex-col space-y-1">
        <label
          htmlFor="sorting"
          className="text-lg font-medium text-gray-800 dark:text-white"
        >
          Sort By
        </label>
        <select
          id="sorting"
          name="sorting"
          value={sortByFilter}
          onChange={(e) => setSortByFilter(e.target.value)}
          className="max-w-40 md:max-w-md w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
      <Button
        onClick={handleFilter}
        className="w-full text-white text-lg font-semibold bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 rounded-lg px-5 py-2.5 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-yellow-800 transition-all duration-300 ease-linear"
      >
        Apply Filters
      </Button>
    </div>
  );
};

export default FilteringSidebar;

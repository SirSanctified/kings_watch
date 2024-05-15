import FilteringSidebar from "./filtering-sidebar";
import ProductsListings from "./product-listings";
import { getProducts } from "@/sanity/product-utils";
import { Category } from "@/types";
import { getCategories } from "@/sanity/category-utils";
import { Product } from "@/app/(root)/page";

export async function getStaticProps(props: {
  category?: string;
  price?: number;
  sortBy?: string;
}) {
  const { category, price, sortBy } = props;

  const products = getProducts(
    category ?? "",
    price ?? 0,
    sortBy ?? "newest"
  );
  const categories: Category[] = await getCategories();

  return {
    props: {
      products,
      categories,
    },
    revalidate: 300, 
  };
}


export default async function ProductsContainer({
  category,
  price,
  sortBy,
  categories,
  products,
}: {
  category?: string;
  price?: number;
  sortBy?: string;
  categories: Category[],
  products: Product[]
}) {
  
  return (
    <div className="w-full flex gap-6 flex-col my-6 md:flex-row">
      <div className="md:w-1/3 lg:w-1/4">
        <FilteringSidebar
          category={category}
          categories={categories}
          price={price}
          sortBy={sortBy}
        />
      </div>
      <div className="md:w-2/3 lg:w-3/4 flex flex-col space-y-4 w-full items-start justify-start">
        <ProductsListings products={products} />
      </div>
    </div>
  );
}

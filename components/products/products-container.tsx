import { Product } from "@/app/(root)/page";
import FilteringSidebar from "./filtering-sidebar";
import ProductsListings from "./product-listings";
import { getProducts } from "@/sanity/product-utils";

export default async function ProductsContainer() {
  const products: Product[] = await getProducts();
  return (
    <div className="w-full flex gap-6 flex-col my-6 md:flex-row">
      <div className="md:w-1/3 lg:w-1/4">
        <FilteringSidebar />
      </div>
      <div className="md:w-2/3 lg:w-3/4 flex flex-col w-full items-start justify-start">
        <ProductsListings products={products} />
      </div>
    </div>
  );
}

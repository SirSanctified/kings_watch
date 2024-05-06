import Banner from "@/components/products/banner";
import ProductsContainer from "@/components/products/products-container";

const ProductsListingPage = ({
  searchParams,
}: {
  searchParams?: { category?: string; price?: number; sortBy?: string };
}) => {
  const { category, price, sortBy } = searchParams || {};
  return (
    <main className="flex min-h-screen space-y-8 flex-col bg-white dark:bg-gray-800 p-24 px-4 md:px-8 lg:px-24  w-full">
      <Banner />
      <ProductsContainer
        category={category}
        price={price}
        sortBy={sortBy}
      />
    </main>
  );
};

export default ProductsListingPage;

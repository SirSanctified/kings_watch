import Banner from "@/components/products/banner";
import ProductsContainer from "@/components/products/products-container";

const ProductsListingPage = () => {
  return (
    <main className="flex min-h-screen space-y-8 flex-col bg-white dark:bg-gray-800 p-24 px-4 md:px-8 lg:px-24  w-full">
      <Banner />
      <ProductsContainer />
    </main>
  );
};

export default ProductsListingPage;

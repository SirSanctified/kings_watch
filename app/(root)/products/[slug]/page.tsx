import ProductDetails from "@/components/products/product-details";
import ProductImages from "@/components/products/product-images";
import { getProductBySlug } from "@/sanity/product-utils";
import { Product } from "../../page";

export default async function ProductDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const product: Product = await getProductBySlug(params.slug);
  return (
    <main className="flex min-h-screen space-y-8 flex-col md:flex-row md:space-x-4 md:space-y-0 bg-white dark:bg-gray-800 p-24 px-4 md:px-8 lg:px-24">
      <ProductImages
        imgSrcs={[product.image, ...(product.extraImages || [])]}
      />
      {/* right side with product details */}
      <ProductDetails product={product} />
    </main>
  );
}

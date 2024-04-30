import ProductDetails from "@/components/products/product-details";
import ProductImages from "@/components/products/product-images";

const ProductDetailsPage = () => {
  const description =
    "Studio quality three mic array for crystal clear calls and voice recordings. Six-speaker sound system for a remarkably robust and high-quality audio experience. Up to 256GB of ultrafast SSD storage. Two Thunderbolt USB 4 ports and up to two USB 3 ports. Ultrafast Wi-Fi 6 and Bluetooth 5.0 wireless. Color matched Magic Mouse with Magic Keyboard or Magic Keyboard with Touch ID.";
  const name =
    "Apple iMac 24-inch All-In-One Computer, Apple M1, 8GB RAM, 256GB SSD, Mac OS, Pink";
  return (
    <main className="flex min-h-screen space-y-8 flex-col md:flex-row md:space-x-4 md:space-y-0 bg-white dark:bg-gray-800 p-24 px-4 md:px-8 lg:px-24">
      <ProductImages
        imgSrcs={["/hero.png", "/hero.svg", "/hero.png", "/hero.svg"]}
      />
      {/* right side with product details */}
      <ProductDetails
        name={name}
        description={description}
        price={1000}
      />
    </main>
  );
};

export default ProductDetailsPage;

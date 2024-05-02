import { getHomeImage } from "@/sanity/home-image-utils";
import { Button } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Hero() {
  const homeImage: { image: string } = await getHomeImage();
  return (
    <main className="flex flex-col lg:flex-row items-center justify-between gap-4 p-24 px-4 md:px-8 lg:px-24  w-full">
      <div className="w-full lg:w-1/2">
        <h1 className="text-3xl md:text-6xl text-center md:text-start font-bold text-gray-800 dark:text-white">
          Timeless Style: Discover Your Perfect Watch
        </h1>
        <p className="text-lg md:text-2xl mt-4 text-balance md:text-start text-gray-600 dark:text-gray-300">
          Discover your perfect timepiece from our curated collection of
          renowned watchmakers. We offer nationwide delivery to every city in
          Zimbabwe, starting from just $5. For an even more convenient shopping
          experience, enjoy free delivery within Harare CBD.
        </p>
        <div className="flex flex-wrap w-full gap-4 flex-col sm:flex-row justify-center md:justify-start items-center mt-8">
          <Button
            size="lg"
            radius="none"
            className="bg-yellow-800 hover:bg-yellow-600  w-full sm:w-auto transition-all duration-300 ease-linear font-medium text-white rounded-lg group"
            endContent={
              <ArrowRight className="w-8 h-8 p-2 rounded-full text-black bg-white group-hover:opacity-60" />
            }
          >
            <Link href={"/products"}>Discover Your Timepiece</Link>
          </Button>
          <Button
            variant="bordered"
            size="lg"
            radius="none"
            className="border-yellow-800 border hover:bg-yellow-600 w-full sm:w-auto transition-all duration-300 ease-linear font-medium rounded-lg"
          >
            <Link href={"/contact"}>Speak to Sales</Link>
          </Button>
        </div>
      </div>
      <Image
        src={homeImage.image || "/hero.png"}
        alt="hero"
        width={612}
        height={408}
        className="w-full lg:w-1/2 rounded-lg h-auto object-cover"
      />
    </main>
  );
}

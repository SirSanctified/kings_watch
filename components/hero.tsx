import { Button } from "@nextui-org/react";
import Image from "next/image";

const Hero = () => {
  return (
    <main className="flex flex-col md:flex-row items-center justify-between gap-4 p-24 px-4 md:px-8 lg:px-24  w-full bg-white dark:bg-gray-800">
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl md:text-6xl text-center md:text-start font-bold text-gray-800 dark:text-white">
          Timeless Style: Discover Your Perfect Watch
        </h1>
        <p className="text-lg md:text-2xl mt-4 text-center md:text-start text-gray-600 dark:text-gray-300">
          More than just timekeeping: Discover watches that define you.
        </p>
        <div className="flex w-full justify-center md:justify-start mt-8">
          <Button
            size="lg"
            radius="none"
            className="bg-yellow-800 hover:bg-yellow-600 transition-all duration-300 ease-linear font-medium text-white rounded-lg"
          >
            Discover Your Timepiece
          </Button>
        </div>
      </div>
      <Image
        src="/hero.svg"
        alt="hero"
        width={500}
        height={500}
        className="w-full md:w-1/2 md:max-h-[400px]"
      />
    </main>
  );
};

export default Hero;

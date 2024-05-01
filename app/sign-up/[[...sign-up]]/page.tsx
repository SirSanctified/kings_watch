import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex min-h-screen space-y-8 flex-col sm:flex-row sm:space-x-4 md:space-x-8 bg-white dark:bg-gray-800 p-24 px-4 md:px-8 lg:px-24  w-full">
      <Image
        src="/hero.svg"
        alt="hero"
        width={500}
        height={500}
        className="w-full h-full flex-1 hidden sm:block object-contain"
      />
      <div className="flex flex-col justify-center items-center flex-1">
        <SignUp path="/sign-up" />
      </div>
    </main>
  );
}

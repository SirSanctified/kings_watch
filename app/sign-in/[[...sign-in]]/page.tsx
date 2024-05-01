import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex min-h-screen space-y-8 flex-col md:flex-row md:space-x-8 bg-white dark:bg-gray-800 p-24 px-4 md:px-8 lg:px-24 w-full">
      <Image
        src="/hero.svg"
        alt="hero"
        width={1080}
        height={720}
        className="w-full h-full max-h-[720px] object-contain flex-1 hidden md:block"
      />
      <div className="flex flex-col justify-center items-center flex-1">
        <SignIn path="/sign-in" />
      </div>
    </main>
  );
}

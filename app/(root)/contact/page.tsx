import ContactForm from "@/components/contact-form";
import Image from "next/image";

function ContactPage() {
  return (
    <main className="flex space-y-8 flex-col md:flex-row md:space-x-4 md:space-y-0 lg:space-x-8 md:justify-between bg-white dark:bg-gray-800 p-20 px-4 md:px-8 lg:px-24 w-full">
      <div className="flex flex-col justify-center items-center flex-1">
        <ContactForm />
      </div>
      <div className="hidden md:flex flex-col justify-center items-center flex-1">
        <Image
          src="/customer-support.webp"
          alt="hero"
          width={1080}
          height={1920}
          className="w-full max-w-80 max-h-[720px] block object-cover mx-auto rounded-lg"
        />
      </div>
    </main>
  );
}

export default ContactPage;

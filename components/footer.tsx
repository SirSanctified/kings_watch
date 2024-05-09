import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 bg-slate-800 md:p-8 lg:p-10 dark:bg-slate-900">
      <div className="mx-auto max-w-screen-xl text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-6">
            <Link
              href="/"
              className="flex justify-center items-center text-2xl font-semibold text-white"
            >
              <Image
                src="/logo-icon.png"
                alt="King's Watch Logo"
                width={50}
                height={50}
              />
              <span className="ml-2 text-yellow-700">King&apos;s Watch</span>
            </Link>
            <p className="text-gray-200 w-full md:text-start">
              The latest and greatest timepieces in Zimbabwe 🇿🇼 .
            </p>
            <div
              className="flex gap-2 mt-2"
              title="King's Watch Socials"
            >
              <Link
                href={"https://www.facebook.com/INUKAGOKWE?mibextid=ZbWKwL"}
                target="_blank"
                title="King's Watch Facebook Page"
              >
                <Image
                  src="/facebook.svg"
                  alt="King's Watch Facebook Page"
                  width={38}
                  height={38}
                  loading="lazy"
                />
              </Link>
              <Link
                href={"https://wa.me/c/263776089822"}
                target="_blank"
                title="King's Watch WhatsApp Chat"
              >
                <Image
                  src="/whatsapp.svg"
                  alt="King's Watch WhatsApp Chat"
                  width={38}
                  height={38}
                  loading="lazy"
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 mb-6">
            <p className="text-gray-200">
              Room G11, Nickys Mall. Corner Bank And Chinhoyi Street,
              <br />
              Opposite Gulf Complex or Next to Chicken Inn.
            </p>
            <p className="text-gray-200">Call: +263 77 608 9822</p>
            <p className="text-gray-200">ASK FOR TINASHE</p>
          </div>
          <ul className="flex flex-wrap justify-center items-center md:items-start mb-6 text-white">
            <li>
              <Link
                href="/"
                className="mr-4 hover:underline md:mr-6 "
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="mr-4 hover:underline md:mr-6"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="mr-4 hover:underline md:mr-6 "
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="mr-4 hover:underline md:mr-6"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <span className="text-sm text-gray-300 sm:text-center my-4">
          © {new Date().getFullYear()}{" "}
          <Link
            href="/"
            className="hover:underline"
          >
            King&apos;s Watch™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;

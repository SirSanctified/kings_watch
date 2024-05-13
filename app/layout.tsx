import NextThemeProvider from "@/components/theme-provider";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "King's Watch Zim - Watches, Belts & Wallets | Elevate Your Everyday Style",
  description:
    "From everyday essentials to timeless classics, discover premium watches for men & women in Harare. Shop a wide range of styles & brands at King's Watch Zim. Find us in Room G11, Nickys Mall (Corner Bank & Chinhoyi St), opposite Gulf Complex.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  creator: "Pritchard Mambambo",
  keywords: [
    "watches",
    "belts",
    "wallets",
    "jewelry",
    "jewellery",
    "clocks",
    "wristwatches",
    "wrist watches",
    "wrist watch",
  ],
  twitter: {
    title: "King's Watch Zim - For all your watch needs",
    description:
      "The best watch store in the Harare. We have watches for every occasion. Find us in Room G11, Nickys Mall, Corner Bank And Chinhoyi Street, opposite Gulf Complex, Harare.",
    card: "summary_large_image",
    creator: "Pritchard Mambambo",
    images: ["/preview.png"],
    creatorId: "@Sir_sanctified",
  },
  authors: [{ name: "Pritchard Mambambo", url: "https://www.pritchmambs.me/" }],
  classification: "Electronics Retail",
  publisher: "Pritchard Mambambo",
  applicationName: "King's Watch Zim",
  category: "E-Commerce",
  openGraph: {
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "King's Watch Zim",
      },
    ],
    type: "website",
    siteName: "King's Watch Zim",
    title: "King's Watch Zim - For all your watch needs",
    description:
      "The best watch store in the Harare. We have watches for every occasion. Find us in Room G11, Nickys Mall, Corner Bank And Chinhoyi Street, opposite Gulf Complex, Harare.",
    determiner: "auto",
    url: "https://kings-watch.vercel.app/",
    countryName: "Zimbabwe",
  },
  metadataBase: new URL("https://kings-watch.vercel.app/"),
};
const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body suppressHydrationWarning>
          <NextThemeProvider>
            <div
              className={`${inter.className} text-foreground bg-white dark:bg-gray-800`}
            >
              {children}
            </div>
          </NextThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;

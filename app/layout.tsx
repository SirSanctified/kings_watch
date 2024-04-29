import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import NextThemeProvider from "@/components/theme-provider";
import CustomNavbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "King's Watch Zim - For all your watch needs",
  description:
    "The best watch store in the Harare. We have watches for every occasion. Find us in Room G11, Nickys Mall, Corner Bank And Chinhoyi Street, opposite Gulf Complex, Harare.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NextThemeProvider>
        <body
          className={`${inter.className} text-foreground bg-background`}
          suppressHydrationWarning
        >
          <Providers>
            <CustomNavbar />
            {children}
          </Providers>
        </body>
      </NextThemeProvider>
    </html>
  );
}

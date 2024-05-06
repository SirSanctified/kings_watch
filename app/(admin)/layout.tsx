import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import NextThemeProvider from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "King's Watch Zim - Admin Dashboard",
  description:
    "The best watch store in the Harare. We have watches for every occasion. Find us in Room G11, Nickys Mall, Corner Bank And Chinhoyi Street, opposite Gulf Complex, Harare.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${inter.className} text-foreground bg-white dark:bg-gray-800`}
    >
      {children}
    </div>
  );
}

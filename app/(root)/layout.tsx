import { Inter } from "next/font/google";
import "../globals.css";
import { Providers } from "@/components/providers";
import CustomNavbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${inter.className} text-foreground bg-white dark:bg-gray-800`}
    >
      <Providers>
        <CustomNavbar />
        {children}
        <Footer />
      </Providers>
    </div>
  );
}

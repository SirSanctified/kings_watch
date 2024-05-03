import NextThemeProvider from "@/components/theme-provider";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
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
  );
};

export default RootLayout;

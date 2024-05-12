import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Watches, Belts & Wallets | Premium Men's & Women's Accessories - King's Watch zim",
    description: "Find premium watches, belts & wallets for men & women. Shop by category, price & arrival time. Free shipping!"
}

export default function ProductsLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div>{children}</div>
    );
}
"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import { useState } from "react";
import { ThemeSwitcher } from "./theme-switcher";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useCartStore } from "@/context/cart-store";

export default function CustomNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCartStore();

  return (
    <Navbar
      isBordered
      position="sticky"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="w-full lg:px-16"
      maxWidth="full"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <Link
          href="/"
          title="King's Watch HomePage"
        >
          <NavbarBrand>
            <Image
              src={"/logo-icon.png"}
              alt="King's Watch Logo"
              width={50}
              height={50}
            />
            <p className="font-bold hidden md:block text-2xl text-inherit">
              King&apos;s Watch
            </p>
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-4"
        justify="end"
      >
        <NavbarItem>
          <Link
            color="foreground"
            href="/products"
            title="All products"
            className="hover:text-yellow-700"
          >
            Products
          </Link>
        </NavbarItem>
        <SignedIn>
          <NavbarItem>
            <Link
              color="foreground"
              href="/orders"
              title="Orders that you have placed"
              className="hover:text-yellow-700"
            >
              Orders
            </Link>
          </NavbarItem>
        </SignedIn>
        <NavbarItem className="relative">
          <Link
            href="/cart"
            title="Your Cart"
            className="hover:text-yellow-700"
          >
            <ShoppingCart size={24} />
          </Link>
          {totalItems > 0 && (
            <span className="absolute top-0 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/contact"
            title="Contact Us for more information"
            className="hover:text-yellow-700"
          >
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="relative sm:hidden">
          <Link
            href="/cart"
            title="Your Cart"
          >
            <ShoppingCart size={24} />
          </Link>
          {totalItems > 0 && (
            <span className="absolute top-0 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </NavbarItem>
        <NavbarItem className="flex items-center justify-center">
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
          <SignedOut>
            <Button
              as={Link}
              size="md"
              href="/sign-in"
              variant="flat"
              title="Sign In"
              className="bg-yellow-700 hover:bg-yellow-900 text-white dark:bg-yellow-700 dark:hover:bg-yellow-950 text-md font-medium"
            >
              Log In
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="text-foreground">
        <NavbarMenuItem onClick={() => setIsMenuOpen(false)}>
          <Link
            href={"/products"}
            title="All products"
          >
            Products
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem onClick={() => setIsMenuOpen(false)}>
          <Link
            href={"/orders"}
            title="Orders that you have placed"
          >
            Orders
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem onClick={() => setIsMenuOpen(false)}>
          <Link
            href={"/cart"}
            title="Your Cart"
          >
            Cart
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem onClick={() => setIsMenuOpen(false)}>
          <Link
            href={"/contact"}
            title="Contact Us for more information"
          >
            Contact
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

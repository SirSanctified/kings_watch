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

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

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
        <Link href="/">
          <NavbarBrand>
            <Image
              src={"/logo-icon.png"}
              alt="King's Watch Logo"
              width={50}
              height={50}
            />
            <p className="font-bold hidden sm:block text-2xl text-inherit">
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
          >
            Products
          </Link>
        </NavbarItem>
        <SignedIn>
          <NavbarItem>
            <Link
              color="foreground"
              href="/orders"
            >
              Orders
            </Link>
          </NavbarItem>
        </SignedIn>
        <NavbarItem className="relative">
          <Link
            href="/cart"
            aria-current="page"
          >
            <ShoppingCart size={24} />
          </Link>
          {totalItems > 0 && (
            <span className="absolute top-0 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="flex items-center justify-center">
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
          <SignedOut>
            <Button
              as={Link}
              size="md"
              color="primary"
              href="/sign-in"
              variant="flat"
            >
              Log In
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            key={`${item}-${index}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

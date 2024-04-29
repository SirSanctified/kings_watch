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
import { ShoppingCart, Truck } from "lucide-react";

export default function CustomNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            href="#"
          >
            Products
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
          >
            Orders
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            href="#"
            aria-current="page"
          >
            <ShoppingCart size={24} />
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="flex items-center justify-center">
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
          <Button
            size="md"
            color="primary"
            href="#"
            variant="flat"
          >
            Log In
          </Button>
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

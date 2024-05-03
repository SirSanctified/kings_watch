import { Product } from "@/app/(root)/page";

export type Category = {
  name: string;
  slug: string;
  image: string;
};

export type OrderItem = {
  _id?: string;
  quantity: number;
  price: number;
  total: number;
  product: Pick<Product, "name" | "image" | "price">;
};

export type Order = {
  _id?: string;
  number: string;
  total: number;
  status: string;
  createdAt: string;
  items: string[];
  user: string;
};

export type PopulatedOrder = Order & { items: OrderItem[] };

export type SanityUser = {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
};

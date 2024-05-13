import { create } from "zustand";
import { Product } from "@/app/(root)/page";

export type Category = {
  _id: string;
  name: string;
  slug: string;
  image: string;
};

export type OrderItem = {
  _id?: string;
  quantity: number;
  price: number;
  name: string;
  total: number;
  product: Pick<Product, "name" | "image" | "price">;
};

export type CreateOrderItem = Omit<OrderItem, "product"> & {
  product: { _type: "reference"; _ref: string; _key?: string };
};
export type Order = {
  _id?: string;
  name?: string;
  number?: string;
  total: number;
  email: string;
  phone: string;
  address: string;
  status: string;
  createdAt?: string;
  items: { _type: "reference"; _ref: string }[];
  user: { _type: "reference"; _ref: string };
};

export type PopulatedOrder = Order & { items: OrderItem[] };

export type FetchedOrder = {
  _id: string;
  number: string;
  total: number;
  status: string;
  email: string;
  address: string;
  phone: string;
  paymentStatus: string;
  createdAt: string;
  items: {
    _id: string;
    quantity: number;
    price: number;
    name: string;
    total: number;
    product: {
      _id: string;
      slug: string;
      name: string;
      image: string;
      price: number;
    };
  }[];
};
export type SanityUser = {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
};

export type PreOrder = {
  _id: string;
  name: string;
  quantity: number;
  createdAt: string;
  price: number;
  total: number;
  status: string;
  product: Pick<Product, "name" | "image" | "price">;
  slug: string;
};

export type CreatePreOrder = Omit<PreOrder, "product" | "_id" | "slug"> & {
  product: { _type: "reference"; _ref: string };
  customer: { _type: "reference"; _ref: string };
  paymentStatus: string;
  email: string;
  phone: string;
  address: string;
  createdAt: string;
  status: string;
};

export type ContactMessage = {
  _id?: string;
  name: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
  createdAt?: string;
};

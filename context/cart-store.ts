import { type Product } from "@/app/(root)/page";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem extends Product {
  quantity: number;
}

export interface CartState {
  cart: CartItem[];
  cartTotal: number;
  totalItems: number;
  addToCart: (product: CartItem) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  updateQuantity: (productId: string, quantity: number) => void;
}

export const useCartStore = create(
  persist<CartState>(
    (set) => ({
      cart: [],
      cartTotal: 0,
      totalItems: 0,
      addToCart: (product: CartItem) =>
        set((state: { cart: CartItem[] }) => {
          const existingProductIndex = state.cart.findIndex(
            (item) => item._id === product._id
          );
          const newQuantity = parseInt(product.quantity.toString(), 10);
          if (newQuantity <= 0) {
            const newCart = state.cart.filter(
              (item) => item._id !== product._id
            );
            return {
              cart: newCart,
              cartTotal: calculateCartTotal(newCart),
              totalItems: calculateTotalItems(newCart),
            };
          }
          if (existingProductIndex !== -1) {
            state.cart[existingProductIndex].quantity += 1;
            return {
              cart: [...state.cart],
              cartTotal: calculateCartTotal(state.cart),
              totalItems: calculateTotalItems(state.cart),
            };
          } else {
            return {
              cart: [...state.cart, product],
              cartTotal: calculateCartTotal([...state.cart, product]),
              totalItems: calculateTotalItems([...state.cart, product]),
            };
          }
        }),
      removeFromCart: (productId: string) =>
        set((state: { cart: CartItem[] }) => {
          const newCart = state.cart.filter((item) => item._id !== productId);
          return {
            cart: newCart,
            cartTotal: calculateCartTotal(newCart),
            totalItems: calculateTotalItems(newCart),
          };
        }),

      clearCart: () =>
        set((state: { cart: CartItem[] }) => {
          return {
            cart: [],
            cartTotal: 0,
            totalItems: 0,
          };
        }),

      updateQuantity: (productId: string, quantity: number) =>
        set((state: { cart: CartItem[] }) => {
          const newCart = state.cart.map((item) => {
            if (item._id === productId) {
              item.quantity += quantity;
              return item;
            }
            return item;
          });
          return {
            cart: newCart,
            cartTotal: calculateCartTotal(newCart),
            totalItems: calculateTotalItems(newCart),
          };
        }),
    }),

    { name: "cart-storage", getStorage: () => localStorage }
  )
);

function calculateCartTotal(cart: CartItem[]) {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function calculateTotalItems(cart: CartItem[]) {
  return cart.reduce((total, item) => total + item.quantity, 0);
}

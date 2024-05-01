import { Product } from "@/app/(root)/page";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem extends Product {
  quantity: number;
  color: string;
}

export const useCartStore = create(
  persist(
    (set) => ({
      cart: [] as CartItem[],
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
            state.cart[existingProductIndex].quantity = newQuantity;
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
    }),
    { name: "cart-storage", getStorage: () => localStorage }
  )
);

function calculateCartTotal(cart: CartItem[]) {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function calculateTotalItems(cart: CartItem[]) {
  return cart.reduce((total, item) => total + 1, 0);
}

import { create } from "zustand";
import { Product } from "../types/product";

type CartItem = Product & {
  quantity: number;
};

type CartState = {
  items: CartItem[];
  addToCart: (product: Product, qty: number) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>((set) => ({
  items: [],

  addToCart: (product, qty) =>
    set((state) => {
      const existing = state.items.find((i) => i._id === product._id);

      if (existing) {
        return {
          items: state.items.map((i) =>
            i._id === product._id
              ? { ...i, quantity: i.quantity + qty }
              : i
          ),
        };
      }

      return {
        items: [...state.items, { ...product, quantity: qty }],
      };
    }),

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((i) => i._id !== id),
    })),

  updateQty: (id, qty) =>
    set((state) => ({
      items: state.items.map((i) =>
        i._id === id ? { ...i, quantity: Math.max(1, qty) } : i
      ),
    })),

  clearCart: () => set({ items: [] }),
}));
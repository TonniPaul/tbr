import { fetchProductId } from "@/fetcher/fetcher";
import { AllProducts } from "@/interface/AllProduct";
import { StateCreator } from "zustand";

export interface CartProps extends AllProducts {
  quantity: number;
}

export interface CartSliceType {
  cart: CartProps[];
  addToCart: (product: CartProps) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, action: "increase" | "decrease") => void;
  reset: () => void;
}

export const cartSlice: StateCreator<CartSliceType> = (set, get) => ({
  cart: [],

  // function to initialize cart
  addToCart: (product: CartProps) => {
    const cart = get().cart;
    const findProduct = cart.find((p) => p.id === product.id);

    if (findProduct) {
      findProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    set({ cart });
    console.log(cart);
  },

  // function to remove single item from cart
  removeFromCart: (productId: string) => {
    set({ cart: get().cart.filter((product) => product.id !== productId) });
  },

  // function to update selected product quantity
  updateQuantity: (productId: string, action: "increase" | "decrease") => {
    const cart = get().cart;
    const findProduct = cart.find((p) => p.id === productId);
    if (findProduct) {
      if (action === "decrease") {
        findProduct.quantity =
          findProduct.quantity! > 1
            ? findProduct.quantity! - 1
            : findProduct.quantity!;
      } else {
        findProduct.quantity! += 1;
      }
    }
  },

  // function to reset empty cart
  reset: () => {
    set({ cart: [] });
  },
});

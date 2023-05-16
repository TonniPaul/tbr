import { create } from "zustand";
import { CartSliceType, cartSlice } from "./cartSlice";
import { productSlice, ProductSliceType } from "./productSlice";
import { devtools, persist } from "zustand/middleware";

interface StoreTypes extends CartSliceType, ProductSliceType {}

export const useStore = create<StoreTypes>()(
  persist(
    // save my store to local storage using zustand
    (...a) => ({
      ...cartSlice(...a),
      ...productSlice(...a),
    }),
    { name: "tbr-store" }
  )
);

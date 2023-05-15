import { create } from "zustand";
import { CartSliceType, cartSlice } from "./cartSlice";
import { productSlice, ProductSliceType } from "./productSlice";

interface StoreTypes extends CartSliceType, ProductSliceType {}

export const useStore = create<StoreTypes>((...a) => ({
  ...cartSlice(...a),
  ...productSlice(...a),
}));

import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./books/bookSlice";
import productReducer from "./books/productSlice";

export const store = configureStore({
  reducer: {
    book: bookReducer,
    product: productReducer,
  },
});

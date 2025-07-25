import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import bookReducer from "./books/bookSlice";
import productReducer from "./books/productSlice";
import cartReducer from "./books/cartSlice";

const rootReducer = combineReducers({
  book: bookReducer,
  product: productReducer,
  cart: cartReducer,
});

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

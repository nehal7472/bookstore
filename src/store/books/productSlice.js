import { createSlice } from "@reduxjs/toolkit";
import productsData from "../../data/productsData";

const initialState = {
  products: productsData,
  search: "",
  rowsPerPage: 10,
  currentPage: 1,
  modalOpen: false,
  editMode: false,
  editingProduct: null,
  categoryFilter: "All",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
      state.currentPage = 1;
    },
    setRowsPerPage: (state, action) => {
      state.rowsPerPage = action.payload;
      state.currentPage = 1;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    toggleModal: (state, action) => {
      state.modalOpen =
        action.payload !== undefined ? action.payload : !state.modalOpen;
    },
    addProduct: (state, action) => {
      const newProduct = {
        id: Date.now(),
        ...action.payload,
      };
      state.products.unshift(newProduct);
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter((p) => p.id !== action.payload);
    },
    startEditProduct: (state, action) => {
      state.editMode = true;
      state.editingProduct = action.payload;
      state.modalOpen = true;
    },
    updateProduct: (state, action) => {
      const index = state.products.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
      }
      state.editMode = false;
      state.editingProduct = null;
    },
    cancelEdit: (state) => {
      state.editMode = false;
      state.editingProduct = null;
    },
    setCategoryFilter: (state, action) => {
      state.categoryFilter = action.payload;
      state.currentPage = 1;
    },
  },
});

export const {
  setSearch,
  setRowsPerPage,
  setCurrentPage,
  toggleModal,
  addProduct,
  deleteProduct,
  startEditProduct,
  updateProduct,
  cancelEdit,
  setCategoryFilter,
} = productSlice.actions;
export default productSlice.reducer;

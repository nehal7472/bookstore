// books/bookSlice.js
import { createSlice } from "@reduxjs/toolkit";
import booksData from "../../data/booksData";

const initialState = {
  allBooks: booksData,
  filteredBooks: booksData,
  searchQuery: "",
  selectedCategory: "All",
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    filterBooks: (state) => {
      let result = state.allBooks;

      if (state.selectedCategory !== "All") {
        result = result.filter(
          (book) => book.category === state.selectedCategory
        );
      }

      if (state.searchQuery) {
        const searchLower = state.searchQuery.toLowerCase();
        result = result.filter((book) =>
          book.title.toLowerCase().includes(searchLower)
        );
      }

      state.filteredBooks = result;
    },
  },
});

export const { setSearchQuery, setCategory, filterBooks } = bookSlice.actions;

export default bookSlice.reducer;

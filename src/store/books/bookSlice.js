import { createSlice } from "@reduxjs/toolkit";
import booksData from "../../data/booksData";

const initialState = {
  allBooks: booksData,
  filteredBooks: booksData,
  searchQuery: "",
};//35m 

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers  : {
    setBooks: (state, action) => {
      state.allBooks = action.payload;
      state.filteredBooks = action.payload;
    },
    filterBooks: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.filteredBooks = state.allBooks.filter((book) =>
        book.title.toLowerCase().includes(searchTerm)
      );
      state.searchQuery = searchTerm;
    },
  }
});


export const { setBooks, filterBooks } = bookSlice.actions;


export default bookSlice.reducer;

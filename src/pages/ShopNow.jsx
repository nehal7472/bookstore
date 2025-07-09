import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setSearchQuery,
  setCategory,
  filterBooks,
} from "../store/books/bookSlice";
import BooksCard from "../components/BooksCard";
import CartModal from "../components/CartModal";

const categories = ["All", "Novel", "Translations", "Kids' Stories"];

const ShopNow = () => {
  const dispatch = useDispatch();
  const { filteredBooks, selectedCategory, searchQuery } = useSelector(
    (state) => state.book
  );

  useEffect(() => {
    dispatch(filterBooks());
  }, [searchQuery, selectedCategory, dispatch]);

  return (
    <div className="px-4 md:px-10 py-10">
      <h1 className="text-center text-2xl md:text-3xl font-bold text-yellow-700 mb-6">
        Explore All Books Here
      </h1>

      <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm md:text-base">
        {categories.map((category) => (
          <label
            key={category}
            className="flex items-center gap-1 cursor-pointer"
          >
            <input
              type="radio"
              name="category"
              value={category}
              checked={selectedCategory === category}
              onChange={() => dispatch(setCategory(category))}
            />
            {category}
          </label>
        ))}
      </div>

      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search by book title..."
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          className="w-full max-w-md px-4 py-2 border border-yellow-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
        />
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => <BooksCard key={book.id} book={book} />)
        ) : (
          <p className="col-span-full text-gray-500 text-center">
            No books found matching your search.
          </p>
        )}
      </div>
      <CartModal />
    </div>
  );
};

export default ShopNow;

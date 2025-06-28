import { useState } from "react";
import BooksCard from "../components/BooksCard";
import BooksData from "../data/booksData";

const categories = ["All", "Novel", "Translations", "Kids' Stories"];

const ShopNow = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBooks =
    selectedCategory === "All"
      ? BooksData
      : BooksData.filter((book) => book.category === selectedCategory);

  return (
    <div className="px-4 md:px-10 py-10">
      <h1 className="text-center text-2xl md:text-3xl font-bold text-yellow-700 mb-6">
        Explore All Books Here
      </h1>

      <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm md:text-base">
        {categories.map((category) => (
          <label key={category} className="flex items-center gap-1 cursor-pointer">
            <input
              type="radio"
              name="category"
              value={category}
              checked={selectedCategory === category}
              onChange={() => setSelectedCategory(category)}
            />
            {category}
          </label>
        ))}
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center">
        {filteredBooks.map((book) => (
          <BooksCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default ShopNow;

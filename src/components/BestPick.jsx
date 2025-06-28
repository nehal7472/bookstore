import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import books from "../data/booksData.js";

const BestPick = () => {
  const [page, setPage] = useState(0);
  const booksPerPage = 4;
  const numPages = Math.ceil(books.length / booksPerPage);

  const handlePageClick = (index) => {
    setPage(index);
  };

  const currentBooks = books.slice(
    page * booksPerPage,
    (page + 1) * booksPerPage
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-24">
      <h2 className="text-3xl font-bold text-center mb-8">Our Best Picks</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentBooks.map((book, idx) => (
          <div
            key={idx}
            className="relative p-2 transition-all duration-300 ease-in-out hover:scale-105"
          >
            <div className="relative">
              <img
                src={book.image}
                alt={book.title}
                className="w-40 h-56 object-cover rounded-lg shadow-md"
              />
              <span className="absolute top-0 left-0 bg-yellow-500 text-[10px] font-semibold text-white px-2 py-0.5 rounded-br-md">
                Special Offer
              </span>
              <span className="absolute top-0 right-0 bg-yellow-500 text-white p-1 rounded-bl-md">
                <FaShoppingCart size={14} />
              </span>
            </div>
            <div className="mt-3 text-left">
              <h3 className="font-semibold text-sm leading-tight">
                {book.title}
              </h3>
              <p className="text-xs text-gray-500">{book.author}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6 space-x-2">
        {[...Array(numPages)].map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              page === index ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => handlePageClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default BestPick;

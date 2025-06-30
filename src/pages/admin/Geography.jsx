import React from "react";
import { FaTools } from "react-icons/fa";
import { Link } from "react-router-dom";

const Geography = () => {
  return (
    <div className="flex items-center justify-center h-[90%] ">
      <div className="text-center px-6">
        <div className="text-6xl text-yellow-700 animate-bounce mb-4 inline-block">
          <FaTools />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Geography Page Under Construction
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          We’re working hard to bring you something amazing! 🚧
        </p>
        <Link
          className="mt-6 px-6 py-2 border border-yellow-600  rounded hover:bg-yellow-700 hover:text-white  transition"
          to="/admin/products"
        >
          Go To Products Page
        </Link>
      </div>
    </div>
  );
};

export default Geography;

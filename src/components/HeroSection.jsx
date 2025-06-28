import React from "react";

const HeroSection = () => {
  return (
    <section
      className="w-full h-screen text-white py-20 px-4 text-center bg-cover bg-center"
      style={{ backgroundImage: "url('assets/heroimg.png" }}
    >
      <h1 className="text-3xl md:text-5xl font-bold text-yellow-600 mb-6">
        The Book Lover's Dreamland Awaits!
      </h1>
      <p className="max-w-2xl mx-auto text-base md:text-lg mb-8">
        Welcome to the ultimate book lover's paradise! Join our community and
        contribute to the ever-evolving library of stories, where every book has
        a chance to inspire someone new.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-lg mx-auto bg-black/50 p-2 rounded-md border border-yellow-500">
        <input
          type="text"
          placeholder="Search a Book"
          className="w-full md:w-2/3 p-2 text-sm rounded-md bg-transparent border-none focus:outline-none placeholder:text-gray-300"
        />
        <button className="bg-[#4B330B] hover:bg-yellow-700 text-white font-semibold px-8 py-2 rounded-md">
          Search
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full h-screen relative overflow-hidden flex flex-col items-center justify-center px-4 text-center bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#4f46e5] animate-gradient">
      {/* Soft glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_70%)] pointer-events-none" />

      {/* Headline */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-lg tracking-tight mb-6 animate-fadeIn">
        The Book Lover's Dreamland Awaits!
      </h1>

      {/* Subheading */}
      <p className="max-w-2xl text-lg md:text-xl text-gray-100 mb-10 animate-fadeIn delay-200">
        Discover, share, and explore a world of stories. Dive into our growing
        library where every book is a new adventure.
      </p>

      {/* Search Box */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-xl w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-4 z-10 animate-fadeIn delay-300">
        <input
          type="text"
          placeholder="Search a Book"
          className="w-full md:w-2/3 p-3 text-sm text-white placeholder-gray-300 bg-transparent border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button className="w-full md:w-auto px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-md transition-all duration-300">
          Search
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

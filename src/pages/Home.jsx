import React from "react";
import { FaSearch } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import BestPick from "../components/BestPick";
import PromoSection from "../components/PromoSection";
import Footer from "../components/Footer";

const books = [
  {
    title: "Thamashashudhu Megherpalaka",
    author: "",
    image: "https://via.placeholder.com/150x220",
  },
  {
    title: "Gangopadhyay",
    author: "Maitre Mitra",
    image: "https://via.placeholder.com/150x220",
  },
  {
    title: "Manasa Mandir",
    author: "Kamala Sankrityayan",
    image: "https://via.placeholder.com/150x220",
  },
  {
    title: "Adarsher Kahini",
    author: "Motilal Roy",
    image: "https://via.placeholder.com/150x220",
  },
];

const Home = () => {
  return (
    <div className="w-full font-sans">
      {/* Hero */}
      <HeroSection />

      {/* Best Picks */}
      <BestPick books={books} />

      {/* Promo Section */}
     <PromoSection/>
    </div>
  );
};

export default Home;

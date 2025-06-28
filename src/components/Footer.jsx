import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-6 px-4">
      <div className="max-w-7xl mx-auto border-t border-gray-600 pt-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">

        <p className="text-center md:text-left text-sm">
          © 2024 |{" "}
          <a href="#" className="underline">
            Neth BookPoint
          </a>{" "}
          &nbsp;
          <span className="text-yellow-500">
            Visit our branches in Galle, Kurunegala, Kandy, and Colombo, and
            register for our online platform to enjoy maximum benefits!
          </span>
        </p>


        <div className="flex space-x-4">
          <a
            href="#"
            className="text-gray-300 hover:text-yellow-500 transition"
          >
            <FaFacebookF size={18} />
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-yellow-500 transition"
          >
            <FaLinkedinIn size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiBell } from "react-icons/fi";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="w-full bg-no-repeat bg-cover bg-center px-6 py-4 flex justify-between items-center relative"
      style={{ backgroundImage: "url('assets/navimg.png')" }}
    >
      <div className="flex items-center gap-2">
        <img
          src="assets/logo.png"
          alt="Logo"
          className="h-14 w-auto object-contain"
        />
        <div className="text-yellow-500 font-bold text-xl">
          NETH <span className="text-white">BOOKPOINT</span>
          <p className="text-[10px] text-white italic leading-none">
            A Stop for Great Reads
          </p>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-6 text-white">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-500 border-b border-yellow-500"
              : "hover:text-yellow-500"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-500 border-b border-yellow-500"
              : "hover:text-yellow-500"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/shop-now"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-500 border-b border-yellow-500"
              : "hover:text-yellow-500"
          }
        >
          Shop
        </NavLink>
        <NavLink
          to="/delivery-team"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-500 border-b border-yellow-500"
              : "hover:text-yellow-500"
          }
        >
          Delivery Team
        </NavLink>
        <NavLink
          to="/sellers"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-500 border-b border-yellow-500"
              : "hover:text-yellow-500"
          }
        >
          Sellers
        </NavLink>
        <NavLink
          to="/admin"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-500 border-b border-yellow-500"
              : "px-6 py-2 border border-yellow-600  rounded hover:bg-yellow-700 hover:text-white  transition"
          }
        >
          Admin
        </NavLink>
        <FiBell className="text-xl" />
        <div className="flex flex-col items-center">
          <img
            src="assets/profile.png"
            alt="User Avatar"
            className="rounded-full w-8 h-8"
          />
          <span className="text-sm">007cryptic@gmail.com</span>
        </div>
      </nav>

      <div
        className="md:hidden text-white z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <FiX className="text-2xl" />
        ) : (
          <FiMenu className="text-2xl" />
        )}
      </div>

      <div
        className={`absolute top-20 left-0 w-full bg-black text-white px-6 py-4 flex flex-col gap-4 transition-all duration-300 md:hidden shadow-lg z-40 ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            isActive
              ? "text-yellow-500 border-b border-yellow-500"
              : "hover:text-yellow-500"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            isActive
              ? "text-yellow-500 border-b border-yellow-500"
              : "hover:text-yellow-500"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/shop-now"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            isActive
              ? "text-yellow-500 border-b border-yellow-500"
              : "hover:text-yellow-500"
          }
        >
          Shop
        </NavLink>
        <NavLink
          to="/delivery-team"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            isActive
              ? "text-yellow-500 border-b border-yellow-500"
              : "hover:text-yellow-500"
          }
        >
          Delivery Team
        </NavLink>
        <NavLink
          to="/sellers"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            isActive
              ? "text-yellow-500 border-b border-yellow-500"
              : "hover:text-yellow-500"
          }
        >
          Sellers
        </NavLink>
        <NavLink
          to="/admin"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-500 border-b border-yellow-500"
              : "text-center px-6 py-2 border border-yellow-600  rounded hover:bg-yellow-700 hover:text-white  transition"
          }
        >
          Admin
        </NavLink>
        <div className="flex items-center gap-2 pt-2 border-t border-gray-600">
          <FiBell className="text-xl" />
          <img
            src="assets/profile.png"
            alt="User Avatar"
            className="rounded-full w-8 h-8"
          />
          <span className="text-sm">007cryptic@gmail.com</span>
        </div>
      </div>
    </header>
  );
};

export default Header;

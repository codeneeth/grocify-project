import React, { useState } from "react";
import { ShoppingCart, UserCircle2, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext"; // optional

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const { user, logout } = useAuth(); // optional if you added auth context

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-green-600">
          Grocify
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-green-600 transition">
            Home
          </Link>
          <Link to="/shop" className="hover:text-green-600 transition">
            Shop
          </Link>
          <Link to="#" className="hover:text-green-600 transition">
            About us
          </Link>
          <Link to="#" className="hover:text-green-600 transition">
            Dev.
          </Link>
        </nav>

        {/* Icons + Menu */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-full"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Cart */}
          <button className="relative p-2 hover:bg-gray-100 rounded-full transition">
            <ShoppingCart className="h-6 w-6 text-gray-700" />
            <span className="absolute top-0 right-0 h-4 w-4 bg-yellow-400 rounded-full text-xs text-white flex items-center justify-center font-bold">
              2
            </span>
          </button>

          {/* User Icon or Login */}
          {/* Uncomment below if using auth */}
          {/* {user ? (
            <button onClick={logout} className="text-sm text-gray-700 hover:text-red-500 transition">
              Logout
            </button>
          ) : ( */}
            <Link to="/login" className="p-2 hover:bg-gray-100 rounded-full transition">
              <UserCircle2 className="h-6 w-6 text-gray-700" />
            </Link>
          {/* )} */}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col gap-3 text-gray-700 font-medium bg-white rounded-lg shadow-md p-4">
            <Link to="/" className="hover:text-green-600 transition">
              Home
            </Link>
            <Link to="/shop" className="hover:text-green-600 transition">
              Shop
            </Link>
            <Link to="#" className="hover:text-green-600 transition">
              About us
            </Link>
            <Link to="#" className="hover:text-green-600 transition">
              Dev.
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;

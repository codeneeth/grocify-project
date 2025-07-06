import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="text-lg font-bold text-green-600">Grocify</div>

        {/* Nav Links */}
        <nav className="flex gap-6 text-gray-600 text-sm">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <Link to="/shop" className="hover:text-green-600">Shop</Link>
          <Link to="/about" className="hover:text-green-600">About us</Link>
          <Link to="#" className="hover:text-green-600">Contact</Link>
        </nav>

        {/* Copyright */}
        <p className="text-gray-400 text-xs text-center">
          © 2025 Grocify. All rights reserved. <br className="md:hidden" />
          Made with <span className="text-red-500">♥</span> by{" "}
          <a
            href="https://github.com/codeneeth"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 font-medium"
          >
            Praneeth
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

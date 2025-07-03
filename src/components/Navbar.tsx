import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Training", to: "/training" },
  { name: "Build Your Gym", to: "/build-gym" },
  { name: "Brands", to: "/brands" },
  { name: "About", to: "/about" },
  { name: "Policies", to: "/policies" },
  { name: "Get In Touch", to: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full z-30 fixed top-0 left-0 bg-white/20 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="bg-green-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-2xl">🏋️‍♂️</span>
          <span className="text-gray-900 text-xl font-extrabold tracking-widest">GreekGod</span>
        </div>
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-gray-900 font-semibold">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                className="hover:text-green-500 transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-gray-900"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Open menu"
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-md shadow-lg rounded-b-2xl px-4 py-4">
          <ul className="flex flex-col gap-4 text-gray-900 font-semibold">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  className="hover:text-green-500 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
} 
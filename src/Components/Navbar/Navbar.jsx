import React, { useState } from "react";
import logo from "../../assets/Gallery/logo.png";
import { CiSearch } from "react-icons/ci";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, Outlet } from "react-router-dom";
import Menu from "../../Components/Menu Items/Menu.jsx";

function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {/* Navbar */}
      <div className="w-full bg-[#ECF2F9] px-5 sm:px-8 md:px-10 lg:px-16 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

          {/* Logo */}
          <div className="shrink-0">
            <img
              className="h-9 sm:h-10 w-auto"
              src={logo}
              alt="Gallery"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <Menu />
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2">

            {/* Search */}
            {showSearch && (
              <input
                className="text-sm outline-none w-[180px] sm:w-[250px] h-10 bg-white px-3 rounded-lg border"
                type="text"
                placeholder="Searching...."
              />
            )}

            {/* Search Button */}
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="h-9 w-9 flex items-center justify-center rounded-full bg-white text-[#0061E0] text-2xl"
            >
              <CiSearch />
            </button>

            {/* Get Started */}
            <button className="hidden sm:block h-10 px-4 sm:px-6 bg-[#0061E0] text-white rounded-md">
              Get Started
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setShowMenu(true)}
              className="lg:hidden h-10 w-10 flex items-center justify-center bg-white text-[#0061E0] text-2xl rounded-md"
            >
              <FiMenu />
            </button>
          </div>
        </div>
      </div>

      {/* Dark Overlay */}
      {showMenu && (
        <div
          onClick={() => setShowMenu(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        ></div>
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-[280px] sm:w-[320px] bg-white z-50 shadow-2xl p-6 transition-transform duration-300 lg:hidden ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* Sidebar Header */}
        <div className="flex items-center justify-between mb-10">
          <img
            src={logo}
            alt="Gallery"
            className="h-9"
          />

          <button
            onClick={() => setShowMenu(false)}
            className="h-9 w-9 flex items-center justify-center rounded-full bg-gray-100 text-xl text-[#0061E0]"
          >
            <FiX />
          </button>
        </div>

        {/* MOBILE MENU */}
        <nav className="flex flex-col items-start gap-6">

          <Link
            to="/"
            onClick={() => setShowMenu(false)}
            className="text-gray-700 hover:text-[#0061E0]"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setShowMenu(false)}
            className="text-gray-700 hover:text-[#0061E0]"
          >
            About
          </Link>

          <Link
            to="/properties"
            onClick={() => setShowMenu(false)}
            className="text-gray-700 hover:text-[#0061E0]"
          >
            Properties
          </Link>

          <Link
            to="/services"
            onClick={() => setShowMenu(false)}
            className="text-gray-700 hover:text-[#0061E0]"
          >
            Services
          </Link>

          <Link
            to="/contact"
            onClick={() => setShowMenu(false)}
            className="text-gray-700 hover:text-[#0061E0]"
          >
            Contact
          </Link>

        </nav>
      </div>

      <Outlet />
    </>
  );
}

export default Navbar;
import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import logo from "../../assets/logo1.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md w-full">
      {/* Top Row */}
      <div className="flex items-center justify-between px-4 lg:px-10 py-2">
        {/* Left: Logo */}
        <div className="flex items-center h-[8vh]">
          <img src={logo} alt="Logo" className="h-[10vh] w-auto object-contain" />
        </div>

        {/* Middle: Search icon (visible on mobile only) */}
        <div
          className="md:hidden ml-[25%] text-xl text-orange-300"
          onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
        >
          <IoSearchSharp />
        </div>

        {/* Desktop Search Bar */}
        <div className="hidden md:flex relative w-[30vw]">
          <input
            type="text"
            placeholder="Search..."
            className="w-full xl:h-[6vh] h-[4vh] px-4 py-2 border border-orange-100 rounded-lg shadow-sm focus:shadow-md focus:outline-none focus:ring-1 focus:ring-orange-300"
          />
          <IoSearchSharp className="absolute right-3 top-[1.3vh] text-orange-500 text-xl" />
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-4 text-zinc-600 xl:text-2xl text-3xl">
          <div className="hidden md:block">
            <CiHeart />
          </div>
          <div className="hidden md:block">
            <MdOutlineShoppingCart />
          </div>
          <div className="hidden md:block">
            <CgProfile />
          </div>

          {/* Always show icons in mobile */}
          <div className="md:hidden flex items-center gap-3 text-xl">
            <CiHeart />
            <MdOutlineShoppingCart />
            {/* <CgProfile /> */}
            {/* Animated Hamburger */}
            <div
              className="flex flex-col justify-center items-center w-7 h-7 cursor-pointer relative"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span
                className={`block w-6 h-[2px] bg-orange-500 transition-transform duration-300 ${
                  menuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-[2px] bg-orange-500 my-[6px] transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-[2px] bg-orange-500 transition-transform duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              ></span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar (toggled) */}
      {mobileSearchOpen && (
        <div className="md:hidden px-4 pb-2">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-[6vh] px-4 py-2 border border-orange-100 rounded-lg shadow-sm focus:shadow-md focus:outline-none focus:ring-1 focus:ring-orange-300"
            />
            <IoSearchSharp className="absolute right-3 top-[1.3vh] text-orange-500 text-xl" />
          </div>
        </div>
      )}

      {/* Mobile Menu Items */}
      <div
        className={`absolute overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          menuOpen
            ? "max-h-[500px] opacity-100 scale-100"
            : "max-h-0 opacity-0 scale-y-95"
        } bg-white w-full px-6 pt-2 pb-4 text-orange-500 font-semibold`}
      >
        <div className="flex flex-col items-start gap-3">
          <span>Type 1</span>
          <span>Type 2</span>
          <span>Type 3</span>
          <span>Type 4</span>
          <span>Type 5</span>
        </div>
      </div>

      {/* Desktop Bottom Categories */}
      <div className="hidden md:flex justify-center gap-[3vw] py-2 xl:text-[1vw] text-[2vw] font-semibold text-orange-500 border-t border-orange-100">
        <span className="hover:text-orange-600 cursor-pointer">Type 1</span>
        <span className="hover:text-orange-600 cursor-pointer">Type 2</span>
        <span className="hover:text-orange-600 cursor-pointer">Type 3</span>
        <span className="hover:text-orange-600 cursor-pointer">Type 4</span>
        <span className="hover:text-orange-600 cursor-pointer">Type 5</span>
      </div>
    </div>
  );
}

export default Navbar;

import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import logo from "../../assets/logo1.png";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  return (
    <div className="flex sticky top-0 z-50 bg-white w-full shadow-sm pt-1">
      <div className="w-[10vw]">
        {/* Logo */}
        <div className="h-[13vh] w-[40vw] flex items-center">
          <img src={logo} alt="Logo" className="h-[100%] object-contain" />
        </div>
      </div>
      <div className="">
        {/* Top Row: Logo | Search | Icons */}
        <div className="flex items-center justify-between h-[8vh] px-6">
          {/* Search Bar */}
          <div className="relative w-[30vw] ml-[25vw]">
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-[6.5vh] px-4 py-2 border border-orange-100 rounded-lg shadow-sm focus:shadow-md focus:shadow-orange-200 focus:outline-none focus:ring-1 focus:ring-orange-300"
            />
            <IoSearchSharp className="absolute right-3 top-[1.2vh] text-orange-500 text-xl" />
          </div>

          {/* Icons */}
          <div className="flex ml-[15vw] gap-6 text-zinc-600 text-[2.2vw] items-center w-[15vw] justify-end">
            <CiHeart />
            <MdOutlineShoppingCart />
            <CgProfile />
          </div>
        </div>

        {/* Bottom Row: Categories */}
        <div className="flex justify-center mr-[5vw] items-center gap-[3vw] py-1 text-[1.1vw] font-semibold text-orange-500">
          <span>Type 1</span>
          <span>Type 2</span>
          <span>Type 3</span>
          <span>Type 4</span>
          <span>Type 5</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

import React from "react";
import { CgArrowTopRightR } from "react-icons/cg";
import { FaRegHeart, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

function ProductCard({ product }) {
  const { name, image, rating, reviews, originalPrice, discountPercent } =
    product;

  const sellingPrice = Math.round(
    originalPrice - (originalPrice * discountPercent) / 100
  );

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (rating >= i - 0.5) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-500" />);
      }
    }
    return stars;
  };

  return (
    <div className="">
    <div className="p-4 flex justify-center">
      <div className="relative w-[18vw] h-[54vh] bg-white rounded-xl border border-zinc-300 shadow-lg overflow-hidden">
        {/* Discount Badge */}
        <div className="flex absolute px-2 pt-2">
          <div className="text-white bg-amber-500 px-2 py-1 rounded text-[0.8vw] font-bold">
            {discountPercent}% OFF
          </div>
        </div>

        {/* Product Image */}
        <div className="flex justify-center mt-2">
          <img
            src={image}
            alt={name}
            className="w-[24vw] h-[14vw] object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="px-3">
          <p
            className={`text-center font-semibold ${
              name.length <= 18
                ? "text-[1.3vw]"
                : name.length <= 25
                ? "text-[1.2vw]"
                : "text-[1vw]"
            }`}
          >
            {name}
          </p>

          <div className="flex items-center mt-1 text-[2.5vh]">
            {renderStars()}
            <h6 className="text-zinc-900 text-[2vh] ml-1">({reviews})</h6>
          </div>
          <div className="flex">
            <s className="text-[1vw] mt-[.7vh] text-red-500 opacity-60">
              ₹{originalPrice}
            </s>
            <p className="ml-2 text-green-700 font-bold text-[1.3vw]">
              ₹{sellingPrice}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between px-3 mt-2 ml-2 mr-2 mb-3">
          <button className="text-orange-400 hover:text-blue-800">
            <FaRegHeart className="text-[1.8vw] ml-4" />
          </button>

          <button className="flex h-[5vh] items-center bg-orange-600 text-white px-3 py-1 rounded hover:bg-blue-500">
            <MdOutlineShoppingCart className="text-[1vw] mr-1" />
            <span className="text-[0.9vw] font-medium">Choose</span>
          </button>
        </div>
      </div>
    </div></div>
  );
}

export default ProductCard;

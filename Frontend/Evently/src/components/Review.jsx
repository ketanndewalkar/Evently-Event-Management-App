import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

const review = () => {
  return (
    <>
    <div className="w-full h-50 flex items-center overflow-x-scroll scrollbar-hide gap-2">
      <div className="w-full border-1 border-gray-400 p-4 rounded-2xl shrink-0 flex flex-col">
        <div className="w-full flex gap-2 ">
          <FaStar className="text-1xl" />
          <FaStar className="text-1xl" />
          <FaStar className="text-1xl" />
          <FaStar className="text-1xl" />
          <FaStarHalf className="text-1xl" />
        </div>
        <h1 className="font-bold text-1xl mt-2">Sarah M. </h1>
        <p className="text-gray-500 mt-2">
          " I'm blown away by the quality and style of the clohes I received
          from Shop.co. From casual wear to elegant dresses.every piece I've
          bought has exceeded my expectations."
        </p>
      </div>
      <div className="w-full border-1 border-gray-400 p-4 rounded-2xl shrink-0">
        <div className="w-full flex gap-2 ">
          <FaStar className="text-1xl" />
          <FaStar className="text-1xl" />
          <FaStar className="text-1xl" />
          <FaStar className="text-1xl" />
          <FaStarHalf className="text-1xl" />
        </div>
        <h1 className="font-bold text-1xl mt-2">Sarah M. </h1>
        <p className="text-gray-500 mt-2">
          " I'm blown away by the quality and style of the clohes I received
          from Shop.co. From casual wear to elegant dresses.every piece I've
          bought has exceeded my expectations."
        </p>
      </div>
      </div>
    </>
  );
};

export default review;

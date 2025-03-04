import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import img from "../../asset/tshirt1.png";
import { FaArrowRight } from "react-icons/fa";
const Cart = () => {
  return (
    <>
      <div className="w-full px-4 mb-5">
        <h1 className="text-[1.1rem] mt-4 text-gray-500">Home {">"} Cart</h1>
        <h1 className="text-3xl custom1 mt-4">YOUR CART</h1>
        <div className="border-1 border-gray-300 w-full rounded-3xl mt-3 p-6">
          <div className="w-full h-30 flex">
            <div className="w-30 h-30 rounded-lg bg-gray-200 shrink-0 p-4 flex justify-center items-center">
              <img src={img} className="" />
            </div>
            <div className="w-full h-full p-2">
              <div className="flex justify-between items-center">
                <h1 className="font-bold text-[1.1rem]">
                  Gradient Graphic T-shirt...
                </h1>
                <AiFillDelete className="text-red-400 text-[1.2rem]" />
              </div>
              <p className="font-bold text-sm text-gray-600">
                Size : <span className="font-normal">Large</span>
              </p>
              <p className="font-bold text-sm text-gray-600">
                Color : <span className="font-normal">White</span>
              </p>
              <div className="flex items-center justify-between mt-1">
                <p className="text-[1.4rem] font-bold">$499</p>

                <span className="flex items-center py-1 px-4 rounded-full gap-3 bg-gray-200">
                  <AiOutlineMinus className="text-[1.1rem]" />
                  <p className="text-[1.2rem]">1</p>
                  <AiOutlinePlus className="text-[1.1rem]" />
                </span>
              </div>
            </div>
          </div>
          <div className="w-full border-b-1 border-gray-300 my-3"></div>
          <div className="w-full h-30 flex">
            <div className="w-30 h-30 rounded-lg bg-gray-200 shrink-0 p-4 flex justify-center items-center">
              <img src={img} className="" />
            </div>
            <div className="w-full h-full p-2">
              <div className="flex justify-between items-center">
                <h1 className="font-bold text-[1.1rem]">
                  Gradient Graphic T-shirt...
                </h1>
                <AiFillDelete className="text-red-400 text-[1.2rem]" />
              </div>
              <p className="font-bold text-sm text-gray-600">
                Size : <span className="font-normal">Large</span>
              </p>
              <p className="font-bold text-sm text-gray-600">
                Color : <span className="font-normal">White</span>
              </p>
              <div className="flex items-center justify-between mt-1">
                <p className="text-[1.4rem] font-bold">$499</p>

                <span className="flex items-center py-1 px-4 rounded-full gap-3 bg-gray-200">
                  <AiOutlineMinus className="text-[1.1rem]" />
                  <p className="text-[1.2rem]">1</p>
                  <AiOutlinePlus className="text-[1.1rem]" />
                </span>
              </div>
            </div>
          </div>
          <div className="w-full border-b-1 border-gray-300 my-3"></div>
          <div className="w-full h-30 flex">
            <div className="w-30 h-30 rounded-lg bg-gray-200 shrink-0 p-4 flex justify-center items-center">
              <img src={img} className="" />
            </div>
            <div className="w-full h-full p-2">
              <div className="flex justify-between items-center">
                <h1 className="font-bold text-[1.1rem]">
                  Gradient Graphic T-shirt...
                </h1>
                <AiFillDelete className="text-red-400 text-[1.2rem]" />
              </div>
              <p className="font-bold text-sm text-gray-600">
                Size : <span className="font-normal">Large</span>
              </p>
              <p className="font-bold text-sm text-gray-600">
                Color : <span className="font-normal">White</span>
              </p>
              <div className="flex items-center justify-between mt-1">
                <p className="text-[1.4rem] font-bold">$499</p>

                <span className="flex items-center py-1 px-4 rounded-full gap-3 bg-gray-200">
                  <AiOutlineMinus className="text-[1.1rem]" />
                  <p className="text-[1.2rem]">1</p>
                  <AiOutlinePlus className="text-[1.1rem]" />
                </span>
              </div>
            </div>
          </div>
          <div className="w-full border-b-1 border-gray-300 my-3"></div>
          <div className="w-full h-30 flex">
            <div className="w-30 h-30 rounded-lg bg-gray-200 shrink-0 p-4 flex justify-center items-center">
              <img src={img} className="" />
            </div>
            <div className="w-full h-full p-2">
              <div className="flex justify-between items-center">
                <h1 className="font-bold text-[1.1rem]">
                  Gradient Graphic T-shirt...
                </h1>
                <AiFillDelete className="text-red-400 text-[1.2rem]" />
              </div>
              <p className="font-bold text-sm text-gray-600">
                Size : <span className="font-normal">Large</span>
              </p>
              <p className="font-bold text-sm text-gray-600">
                Color : <span className="font-normal">White</span>
              </p>
              <div className="flex items-center justify-between mt-1">
                <p className="text-[1.4rem] font-bold">$499</p>

                <span className="flex items-center py-1 px-4 rounded-full gap-3 bg-gray-200">
                  <AiOutlineMinus className="text-[1.1rem]" />
                  <p className="text-[1.2rem]">1</p>
                  <AiOutlinePlus className="text-[1.1rem]" />
                </span>
              </div>
            </div>
          </div>
          <div className="w-full border-b-1 border-gray-300 my-3"></div>
          <div className="w-full h-30 flex">
            <div className="w-30 h-30 rounded-lg bg-gray-200 shrink-0 p-4 flex justify-center items-center">
              <img src={img} className="" />
            </div>
            <div className="w-full h-full p-2">
              <div className="flex justify-between items-center">
                <h1 className="font-bold text-[1.1rem]">
                  Gradient Graphic T-shirt...
                </h1>
                <AiFillDelete className="text-red-400 text-[1.2rem]" />
              </div>
              <p className="font-bold text-sm text-gray-600">
                Size : <span className="font-normal">Large</span>
              </p>
              <p className="font-bold text-sm text-gray-600">
                Color : <span className="font-normal">White</span>
              </p>
              <div className="flex items-center justify-between mt-1">
                <p className="text-[1.4rem] font-bold">$499</p>

                <span className="flex items-center py-1 px-4 rounded-full gap-3 bg-gray-200">
                  <AiOutlineMinus className="text-[1.1rem]" />
                  <p className="text-[1.2rem]">1</p>
                  <AiOutlinePlus className="text-[1.1rem]" />
                </span>
              </div>
            </div>
          </div>
          <div className="w-full border-b-1 border-gray-300 my-3"></div>
          <div className="w-full h-30 flex">
            <div className="w-30 h-30 rounded-lg bg-gray-200 shrink-0 p-4 flex justify-center items-center">
              <img src={img} className="" />
            </div>
            <div className="w-full h-full p-2">
              <div className="flex justify-between items-center">
                <h1 className="font-bold text-[1.1rem]">
                  Gradient Graphic T-shirt...
                </h1>
                <AiFillDelete className="text-red-400 text-[1.2rem]" />
              </div>
              <p className="font-bold text-sm text-gray-600">
                Size : <span className="font-normal">Large</span>
              </p>
              <p className="font-bold text-sm text-gray-600">
                Color : <span className="font-normal">White</span>
              </p>
              <div className="flex items-center justify-between mt-1">
                <p className="text-[1.4rem] font-bold">$499</p>

                <span className="flex items-center py-1 px-4 rounded-full gap-3 bg-gray-200">
                  <AiOutlineMinus className="text-[1.1rem]" />
                  <p className="text-[1.2rem]">1</p>
                  <AiOutlinePlus className="text-[1.1rem]" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full border-1 border-gray-300 rounded-3xl mt-5 p-5">
            <h1 className="font-bold text-[1.3rem]">Order Summary</h1>
            <p className="text-gray-400 flex justify-between w-full text-[1.1rem] items-center mt-3"><span>Subtotal</span><span className="text-black font-bold text-xl">$565</span></p>
            <p className="text-gray-400 flex justify-between w-full text-[1.1rem] items-center mt-3"><span>Discount</span><span className="text-red-500 font-bold text-xl">-$113</span></p>
            <p className="text-gray-400 flex justify-between w-full text-[1.1rem] items-center mt-3"><span>Delivery Fee</span><span className="text-black font-bold text-xl">$15</span></p>
            <div className="border-b-1 border-gray-200 my-3"></div>
            <p className="text-black font-bold flex justify-between w-full text-[1.1rem] items-center mt-3"><span>Total</span><span className="text-black font-bold text-2xl">$15</span></p>
            <button className="bg-black text-white w-full p-4 rounded-full mt-4 relative">Button<FaArrowRight className="h-full absolute text-white text-[1.5rem] right-4 top-0"/></button>

        </div>
      </div>
    </>
  );
};

export default Cart;

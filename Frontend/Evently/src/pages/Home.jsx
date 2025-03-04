import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import model from "../../asset/model.png";
import star from "../../asset/star.png";

import gucci from "../../asset/Gucci.png";
import calvin from "../../asset/calvin.png";
import prada from "../../asset/prada.png";
import versace1 from "../../asset/versace.png";
import zara from "../../asset/zara.png";
import tshirt from "../../asset/tshirt.png";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import casual from "../../asset/casual.png";
import formal from "../../asset/formal.png";
import party from "../../asset/party.png";
import gym from "../../asset/gym.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="w-full px-4  bg-gray-100">
        <h1 className="w-full  custom1 text-4xl mt-8 inline-block">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="w-full text-gray-400 text-1xl mt-3">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense if
          style.
        </p>
        <span className="w-full text-center flex justify-center items-center h-15 border-2 border-black rounded-full text-1xl bg-black mt-6">
          <span className="text-white">Shop Now</span>
        </span>
        <div className="flex justify-center h-15 gap-6 items-center mt-6">
          <div className="">
            <h1 className="text-3xl font-bold w-full text-center">200+</h1>
            <p className="text-sm text-gray-400">International Brands</p>
          </div>
          <div className="h-3/4 w-2 border-r-2 border-gray-400"></div>
          <div>
            <h1 className="text-3xl font-bold w-full text-center">2,000+</h1>
            <p className="text-sm text-gray-400">High Quality Products</p>
          </div>
        </div>
        <div className="w-full flex justify-center items-center flex-col mt-4">
          <h1 className="text-3xl font-bold">30,000+</h1>
          <p className="text-sm text-gray-400">Happy Customers</p>
        </div>

        <div className="w-full relative">
          <img src={star} className="absolute w-20 right-7" />
          <img src={star} className="absolute w-20 right-6" />
          <img src={star} className="absolute w-15 top-28 left-7" />
          <img src={star} className="absolute w-15 top-28 left-6" />
          <img src={model} />
        </div>
      </div>
      <div className=" handle_company w-full h-25 flex flex-wrap gap-9 px-2 justify-center bg-black gap-y-0 items-center">
        <img src={versace1} className="w-33 h-11" />
        <img src={zara} className="w-25 h-9" />
        <img src={gucci} className="w-35 h-9" />
        <img src={prada} className="w-20 h-10" />
        <img src={calvin} className="w-27 h-10" />
      </div>
      <div className="w-full px-4">
        <h1 className="w-full text-4xl custom1 text-center mt-15">
          {" "}
          NEW ARRIVALS
        </h1>
        <div className="flex mt-6 overflow-x-scroll shrink-0 scrollbar-hide">
          <div className="w-60 h-90 p-3 shrink-0">
            <div className="w-full h-2/3 bg-gray-200 rounded-lg flex justify-center items-center">
              <img src={tshirt} className="w-[90%] " />
            </div>
            <h1 className="text-1xl font-bold mt-2 ml-1 leading-6">
              Tshirt with Tap Details
            </h1>
            <div className="flex gap-2 mt-1 ml-1 items-center">
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStarHalf className="text-1xl" />
              </span>
              <p>4.5/5</p>
            </div>
            <p className="text-2xl mt-1 ml-1 font-bold">$49.99</p>
          </div>
          <div className="w-60 h-90 p-3 shrink-0">
            <div className="w-full h-2/3 bg-gray-200 rounded-lg flex justify-center items-center">
              <img src={tshirt} className="w-[90%] " />
            </div>
            <h1 className="text-1xl font-bold mt-2 ml-1 leading-6">
              Tshirt with Tap Details
            </h1>
            <div className="flex gap-2 mt-1 ml-1 items-center">
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStarHalf className="text-1xl" />
              </span>
              <p>4.5/5</p>
            </div>
            <p className="text-2xl mt-1 ml-1 font-bold">$49.99</p>
          </div>
          <div className="w-60 h-90 p-3 shrink-0">
            <div className="w-full h-2/3 bg-gray-200 rounded-lg flex justify-center items-center">
              <img src={tshirt} className="w-[90%] " />
            </div>
            <h1 className="text-1xl font-bold mt-2 ml-1 leading-6">
              Tshirt with Tap Details
            </h1>
            <div className="flex gap-2 mt-1 ml-1 items-center">
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStarHalf className="text-1xl" />
              </span>
              <p>4.5/5</p>
            </div>
            <p className="text-2xl mt-1 ml-1 font-bold">$49.99</p>
          </div>
          <div className="w-60 h-90 p-3 shrink-0">
            <div className="w-full h-2/3 bg-gray-200 rounded-lg flex justify-center items-center">
              <img src={tshirt} className="w-[90%] " />
            </div>
            <h1 className="text-1xl font-bold mt-2 ml-1 leading-6">
              Tshirt with Tap Details
            </h1>
            <div className="flex gap-2 mt-1 ml-1 items-center">
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStarHalf className="text-1xl" />
              </span>
              <p>4.5/5</p>
            </div>
            <p className="text-2xl mt-1 ml-1 font-bold">$49.99</p>
          </div>
          <div className="w-60 h-90 p-3 shrink-0">
            <div className="w-full h-2/3 bg-gray-200 rounded-lg flex justify-center items-center">
              <img src={tshirt} className="w-[90%] " />
            </div>
            <h1 className="text-1xl font-bold mt-2 ml-1 leading-6">
              Tshirt with Tap Details
            </h1>
            <div className="flex gap-2 mt-1 ml-1 items-center">
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStarHalf className="text-1xl" />
              </span>
              <p>4.5/5</p>
            </div>
            <p className="text-2xl mt-1 ml-1 font-bold">$49.99</p>
          </div>
          <div className="w-60 h-90 p-3 shrink-0">
            <div className="w-full h-2/3 bg-gray-200 rounded-lg flex justify-center items-center">
              <img src={tshirt} className="w-[90%] " />
            </div>
            <h1 className="text-1xl font-bold mt-2 ml-1 leading-6">
              Tshirt with Tap Details
            </h1>
            <div className="flex gap-2 mt-1 ml-1 items-center">
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStarHalf className="text-1xl" />
              </span>
              <p>4.5/5</p>
            </div>
            <p className="text-2xl mt-1 ml-1 font-bold">$49.99</p>
          </div>
        </div>
        <div className="w-full h-14 border-1 border-gray-400 rounded-full font- font-bold text-gray-900 flex justify-center items-center text-1xl mt-4">
          <span>View All</span>
        </div>
        <div className="w-full border-b-1 border-gray-300 mt-10"></div>
        <h1 className="w-full text-4xl custom1 text-center mt-12">
          {" "}
          TOP SELLING
        </h1>
        <div className="flex mt-6 overflow-x-scroll shrink-0 scrollbar-hide">
          <div className="w-60 h-90 p-3 shrink-0">
            <div className="w-full h-2/3 bg-gray-200 rounded-lg flex justify-center items-center">
              <img src={tshirt} className="w-[90%] " />
            </div>
            <h1 className="text-1xl font-bold mt-2 ml-1 leading-6">
              Tshirt with Tap Details
            </h1>
            <div className="flex gap-2 mt-1 ml-1 items-center">
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStarHalf className="text-1xl" />
              </span>
              <p>4.5/5</p>
            </div>
            <p className="text-2xl mt-1 ml-1 font-bold">$49.99</p>
          </div>
          <div className="w-60 h-90 p-3 shrink-0">
            <div className="w-full h-2/3 bg-gray-200 rounded-lg flex justify-center items-center">
              <img src={tshirt} className="w-[90%] " />
            </div>
            <h1 className="text-1xl font-bold mt-2 ml-1 leading-6">
              Tshirt with Tap Details
            </h1>
            <div className="flex gap-2 mt-1 ml-1 items-center">
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStarHalf className="text-1xl" />
              </span>
              <p>4.5/5</p>
            </div>
            <p className="text-2xl mt-1 ml-1 font-bold">$49.99</p>
          </div>
          <div className="w-60 h-90 p-3 shrink-0">
            <div className="w-full h-2/3 bg-gray-200 rounded-lg flex justify-center items-center">
              <img src={tshirt} className="w-[90%] " />
            </div>
            <h1 className="text-1xl font-bold mt-2 ml-1 leading-6">
              Tshirt with Tap Details
            </h1>
            <div className="flex gap-2 mt-1 ml-1 items-center">
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStarHalf className="text-1xl" />
              </span>
              <p>4.5/5</p>
            </div>
            <p className="text-2xl mt-1 ml-1 font-bold">$49.99</p>
          </div>
          <div className="w-60 h-90 p-3 shrink-0">
            <div className="w-full h-2/3 bg-gray-200 rounded-lg flex justify-center items-center">
              <img src={tshirt} className="w-[90%] " />
            </div>
            <h1 className="text-1xl font-bold mt-2 ml-1 leading-6">
              Tshirt with Tap Details
            </h1>
            <div className="flex gap-2 mt-1 ml-1 items-center">
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStarHalf className="text-1xl" />
              </span>
              <p>4.5/5</p>
            </div>
            <p className="text-2xl mt-1 ml-1 font-bold">$49.99</p>
          </div>
          <div className="w-60 h-90 p-3 shrink-0">
            <div className="w-full h-2/3 bg-gray-200 rounded-lg flex justify-center items-center">
              <img src={tshirt} className="w-[90%] " />
            </div>
            <h1 className="text-1xl font-bold mt-2 ml-1 leading-6">
              Tshirt with Tap Details
            </h1>
            <div className="flex gap-2 mt-1 ml-1 items-center">
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStarHalf className="text-1xl" />
              </span>
              <p>4.5/5</p>
            </div>
            <p className="text-2xl mt-1 ml-1 font-bold">$49.99</p>
          </div>
          <div className="w-60 h-90 p-3 shrink-0">
            <div className="w-full h-2/3 bg-gray-200 rounded-lg flex justify-center items-center">
              <img src={tshirt} className="w-[90%] " />
            </div>
            <h1 className="text-1xl font-bold mt-2 ml-1 leading-6">
              Tshirt with Tap Details
            </h1>
            <div className="flex gap-2 mt-1 ml-1 items-center">
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStar className="text-1xl" />
              </span>
              <span className="">
                <FaStarHalf className="text-1xl" />
              </span>
              <p>4.5/5</p>
            </div>
            <p className="text-2xl mt-1 ml-1 font-bold">$49.99</p>
          </div>
        </div>
        <div className="w-full h-14 border-1 border-gray-400 rounded-full font- font-bold text-gray-900 flex justify-center items-center text-1xl mt-4">
          <span>View All</span>
        </div>
        <div className="w-full border-b-1 border-gray-300 mt-7"></div>
        <div className="w-full mt-7">
          <div className="w-full rounded-3xl bg-gray-200 p-5 ">
            <h1 className="w-full custom1 text-4xl text-center inline-block mt-5">
              BROWSE BY
              <br /> DRESS STYLE
            </h1>
            <div className="w-full  relative mt-9 bg-white rounded-3xl h-50 flex justify-end blur-1xl">
              <img src={casual} className="h-full" />
              <p className="absolute top-5 left-7 text-3xl font-bold">Casual</p>
            </div>
            <div className="w-full  relative mt-4 bg-white rounded-3xl h-50 flex justify-end blur-1xl">
              <img src={formal} className="h-full mr-8" />
              <p className="absolute top-5 left-7 text-3xl font-bold">Formal</p>
            </div>
            <div className="w-full  relative mt-4 bg-white rounded-3xl h-50 flex justify-end blur-1xl">
              <img src={party} className="h-full mr-8" />
              <p className="absolute top-5 left-7 text-3xl font-bold">Party</p>
            </div>
            <div className="w-full  relative mt-4 bg-white rounded-3xl h-50 flex justify-end blur-1xl">
              <img src={gym} className="h-full mr-6" />
              <p className="absolute top-5 left-7 text-3xl font-bold">Gym</p>
            </div>
          </div>
          <div className="w-full flex items-end mt-9 justify-between">
            <h1 className="h-full custom1 text-3xl">OUR HAPPY CUSTOMER</h1>
            <div className="flex text-2xl gap-7 h-full mr-3 items-end mb-1">
              <FaArrowLeft />
              <FaArrowRight />
            </div>
          </div>
          <div className="w-full h-50 flex items-center mt-5 overflow-x-scroll scrollbar-hide gap-2">
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
                " I'm blown away by the quality and style of the clohes I
                received from Shop.co. From casual wear to elegant dresses.every
                piece I've bought has exceeded my expectations."
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
                " I'm blown away by the quality and style of the clohes I
                received from Shop.co. From casual wear to elegant dresses.every
                piece I've bought has exceeded my expectations."
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

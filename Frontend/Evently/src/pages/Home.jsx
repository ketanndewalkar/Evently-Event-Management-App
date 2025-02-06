import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import model from "../../asset/model.png";
import star from "../../asset/star.png";

import gucci from "../../asset/Gucci.png";
import calvin from "../../asset/calvin.png";
import prada from "../../asset/prada.png";
import versace from "../../asset/versace.png";
import zara from "../../asset/zara.png";

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
            <h1 className="text-3xl font-bold">200+</h1>
            <p className="text-sm text-gray-400">International Brands</p>
          </div>
          <div className="h-3/4 w-2 border-r-2 border-gray-400"></div>
          <div>
            <h1 className="text-3xl font-bold">2,000+</h1>
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
        <div className=" handle_company w-full h-25 flex flex-wrap gap-9 justify-center bg-black gap-y-0 items-center">
          <img src={versace} className="w-33 h-11" />
          <img src={zara} className="w-25 h-9" />
          <img src={gucci} className="w-35 h-9" />
          <img src={prada} className="w-20 h-10" />
          <img src={calvin} className="w-27 h-10" />
        </div>
      </div>
    </>
  );
};

export default Home;

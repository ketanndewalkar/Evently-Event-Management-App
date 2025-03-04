import React, { useEffect, useRef, useState } from "react";
import { IoMenu } from "react-icons/io5";
import Logo from "../../asset/SHOP.CO.png";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
  const navigate = useNavigate();
  const input = useRef(null);
  console.log(input);
  const [showSearch, setshowSearch] = useState(false);
  const searchani = () => {
    navigate("/home");
    input.current.focus();
  };
  
  
  useGSAP(() => {
    showSearch&&input.current?searchani():"";
  }, [showSearch]);
  return (
    <div className="w-full h-18 px-4 text-white flex items-center justify-between">
      <div className=" h-14  flex items-center gap-2">
        
        {!showSearch ? (
          <h1 className="custom1 text-3xl text-black h-full flex items-center handle_logo">
            <span>SHOP CO</span>
          </h1>
        ) : (
          <></>
        )}
      </div>
      {showSearch ? (
        <span className="border-1 border-gray-200 rounded-full w-full flex p-1 px-2">
          <input ref={input} className="w-full outline-none text-black px-3 text-[1.2rem]"/>
          <RxCross2 className=" text-4xl rounded-full text-gray-400 mr-2" onClick={()=>setshowSearch(false)}/>
        </span>
      ) : (
        <div className=" flex text-black text-3xl gap-5 items-center mr-3 font-semibold">
          <CiSearch onClick={()=>setshowSearch(true)} className="active:bg-gray-200 active:rounded-full"/>
          <NavLink to="/home/cart" className="active:bg-gray-200 active:rounded-full p-2 flex justify-center items-center">
            <CiShoppingCart />
          </NavLink>
          <NavLink to="/profile" className="active:bg-gray-200 active:rounded-full p-2">
            <IoPersonOutline
            className="text-2xl"
          />
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;

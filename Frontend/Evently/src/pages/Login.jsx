import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handle_back = () => {
    navigate("/");
  };

  return (
    <>
      <div className="w-[100vw] h-[96vh] p-7 box-border">
        <div className="w-full h-full ">
          <div className="w-full  relative flex mt-8">
            <IoIosArrowBack
              className="absolute top-1 text-3xl"
              onClick={handle_back}
            />
            <h1 className="text-3xl w-full text-center">Log In</h1>
          </div>
          <p className="mt-15 text-sm w-full text-center">
            Give Credentials to Log in your Account
          </p>
          <form className="w-full mt-6 ">
            <span className="w-full h-13 flex items-center rounded-lg overflow-hidden border-1 border-gray-400">
              <CiMail className="text-3xl ml-4 text-gray-600" />
              <input
                className="w-full h-full border-none outline-none px-4 text-1xl"
                placeholder="Type your Email"
              />
            </span>
            <span className="w-full h-13 flex mt-5 items-center relative rounded-lg overflow-hidden border-1 border-gray-400">
              <HiOutlineLockClosed className="text-3xl ml-4 text-gray-600" />
              <input
                className="w-full h-full border-none outline-none px-4 text-1xl"
                placeholder="Type your Password"
                maxLength={25}
              />
              <FaEye className="text-2xl absolute right-5 text-gray-600" />
            </span>
            <div className="w-full mt-5 flex justify-between">
              <label
                htmlFor="check"
                className="flex items-center gap-2 ml-2 text-sm"
              >
                <input className="" type="checkbox" id="check" />
                Remember Me
              </label>
              <a href="#" className="text-sm text-[#FA701B] ml-20">
                Forgot Password?
              </a>
            </div>
            <button className="w-full h-13 mt-14 bg-[#FA701B] text-white rounded-lg">
              Log In
            </button>
          </form>
          <p className="text-sm w-full text-center mt-6">
            Don`t have Account?
            <span className="text-[#FA701B]" onClick={()=>navigate("/signup")}>Sign up</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;

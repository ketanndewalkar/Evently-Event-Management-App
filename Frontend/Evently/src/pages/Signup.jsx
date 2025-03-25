import React, { useContext, useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import Loader from "../components/loader";
import { AuthContext } from "../context/AuthContext";
const Signup = () => {
  const {login} = useContext(AuthContext);
  const navigate = useNavigate();
  const [show, setshow] = useState(false);
  

  const [loader, setloader] = useState(false);
  const handleshow = (e) => {
    console.log(e);
    setshow((prev) => !prev);
  };
  const [formdata, setformdata] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloader(true);
    fetch("http://localhost:3000/signup", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        const {token , user , message} = await res.json();
        login(token,user);
        setloader(false);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
        setloader(false);
      });
  };

  useEffect(() => {
    setshow(false);
    setformdata({
      username: "",
      email: "",
      password: "",
      confirm_password: "",
    });
  }, []);

  return (
    <>
      <div className="w-[100vw] h-[96vh] p-7 box-border">
        <div className="w-full h-full ">
          <div className="w-full  relative flex mt-8">
            <IoIosArrowBack
              className="absolute top-1 text-3xl"
              onClick={() => navigate("/")}
            />
            <h1 className="text-3xl w-full text-center">Sign Up</h1>
          </div>
          <p className="mt-15 text-sm w-full text-center">
            Give Credentials to Sign Up your Account
          </p>
          <form className="w-full mt-6 ">
            <span className="w-full h-13 mt-5 flex items-center rounded-lg overflow-hidden border-1 border-gray-400">
              <CgProfile className="text-3xl ml-4 text-gray-600" />
              <input
                className="w-full h-full border-none outline-none px-4 text-1xl"
                placeholder="Type your Username"
                name="username"
                value={formdata.username}
                onChange={(e) =>
                  setformdata((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </span>
            <span className="w-full h-13 mt-5 flex items-center rounded-lg overflow-hidden border-1 border-gray-400">
              <CiMail className="text-3xl ml-4 text-gray-600" />
              <input
                className="w-full h-full border-none outline-none px-4 text-1xl"
                placeholder="Type your Email"
                name="email"
                value={formdata.email}
                onChange={(e) =>
                  setformdata((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </span>
            <span className="w-full h-13 flex mt-5 items-center relative rounded-lg overflow-hidden border-1 border-gray-400">
              <HiOutlineLockClosed className="text-3xl ml-4 text-gray-600" />
              <input
                className="w-full h-full border-none outline-none px-4 text-1xl"
                type={show ? "text" : "password"}
                placeholder="Type your Password"
                maxLength={25}
                value={formdata.password}
                name="password"
                onChange={(e) =>
                  setformdata((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
              {!show ? (
                <FaEye
                  className="text-2xl absolute right-5 text-gray-600"
                  onClick={handleshow}
                />
              ) : (
                <FaEyeSlash
                  className="text-2xl absolute right-5 text-gray-600"
                  onClick={handleshow}
                />
              )}
            </span>
            <span className="w-full h-13 flex mt-5 items-center relative rounded-lg overflow-hidden border-1 border-gray-400">
              <HiOutlineLockClosed className="text-3xl ml-4 text-gray-600" />
              <input
                className="w-full h-full border-none outline-none px-4 text-1xl"
                type={show ? "text" : "password"}
                placeholder="Type your confirm Password"
                maxLength={25}
                value={formdata.confirm_password}
                name="confirm_password"
                onChange={(e) =>
                  setformdata((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </span>
            <div className="w-full mt-5 flex justify-between">
              <label
                htmlFor="check"
                className="flex items-center gap-2 ml-2 text-sm"
              >
                <input type="checkbox" id="check" />
                Remember Me
              </label>
              <a href="#" className="text-sm text-black ml-20">
                Forgot Password?
              </a>
            </div>
            <button
              className="w-full h-13 mt-14 bg-black text-white rounded-lg"
              onClick={handleSubmit}
            >
              {loader ? <Loader /> : "Sign Up"}
            </button>
          </form>
          <p className="text-sm w-full text-center mt-6 text-gray-600">
            Already have Account?
            <span className="text-black" onClick={() => navigate("/login")}>
              {" "}
              Log in
            </span>{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;

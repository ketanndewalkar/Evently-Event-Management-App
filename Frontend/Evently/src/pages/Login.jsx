import React, { useContext, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/loader";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [state, setstate] = useState(0);
  const navigate = useNavigate();
  const [show, setshow] = useState(false);
  const [loader, setloader] = useState(false);
  const [msg, setmsg] = useState(null);
  const [status, setstatus] = useState(0);

  const [formdata, setformdata] = useState({
    username: "",
    password: "",
  });
  const handleshow = (e) => {
    console.log(e);
    setshow((prev) => !prev);
  };

  const handlelogin = (e) => {
    e.preventDefault();
    setloader(true);
    console.log(JSON.stringify(formdata));
    fetch("http://localhost:3000/login", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        setstatus(res.status);
        if (res.status === 200) {
          const { token, User, message } = await res.json();
          login(token, User);
          setmsg(message);
          setloader(false);
          setTimeout(() => {
            navigate("/home");
            setstate(1);
          }, 1000);
          
        } else {
          const { message } = await res.json();
          setmsg(message);
          setloader(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setloader(false);
      });
  };

  return (
    <>
      <div className="w-[100vw] h-[96vh] p-7 box-border">
        <div className="w-full h-full ">
          <div className="w-full  relative flex mt-8">
            <IoIosArrowBack
              className="absolute top-1 text-3xl"
              onClick={() => navigate("/")}
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
                placeholder="Type your username"
                name="username"
                onChange={(e) =>
                  setformdata((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                value={formdata.username}
              />
            </span>
            <span className="w-full h-13 flex mt-5 items-center relative rounded-lg overflow-hidden border-1 border-gray-400">
              <HiOutlineLockClosed className="text-3xl ml-4 text-gray-600" />
              <input
                className="w-full h-full border-none outline-none px-4 text-1xl"
                placeholder="Type your Password"
                required="true"
                maxLength={25}
                name="password"
                type={show ? "text" : "password"}
                onChange={(e) =>
                  setformdata((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                value={formdata.password}
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
            <div className="w-full mt-5 flex justify-between">
              <label
                htmlFor="check"
                className="flex items-center gap-2 ml-2 text-sm"
              >
                <input className="" type="checkbox" id="check" />
                Remember Me
              </label>
              <a href="#" className="text-sm text-black ml-20">
                Forgot Password?
              </a>
            </div>
            <button
              className="w-full h-13 mt-14 bg-black text-white rounded-lg flex justify-center items-center relative"
              onClick={handlelogin}
            >
              {loader ? <Loader /> : "Log In"}
              {loader ? (
                ""
              ) : (
                <>
                <p className={`absolute bottom-[-5vw] left-3 text-${status===200?"green":"red"}-500`}>
                  {msg}
                </p>
                </>
              )}
            </button>
          </form>
          <p className="text-sm w-full text-center mt-6 text-gray-600">
            Don`t have Account?
            <span className="text-black " onClick={() => navigate("/signup")}>
              {" "}
              Sign up
            </span>
          </p>
        </div>
      </div>
      <Link to="/home">Home </Link>
    </>
  );
};

export default Login;

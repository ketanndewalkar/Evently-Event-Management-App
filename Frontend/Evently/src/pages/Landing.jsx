import React, { useState } from "react";
import LOGO from "../../asset/LOGO.png";
import Subimg from "../../asset/Subimg.png";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Landing = () => {
    const navigate = useNavigate();
  const [data, setdata] = useState([
    {
      t1: "Explore Upcoming and Nearby Events",
      t2: "In publishing and graphic design, Lorem is a placeholder text commonly",
    },
    {
      t1: "Create and Find Events Easily in One Place",
      t2: "In this app you can create any kind of events and you can join all events ",
    },
    {
      t1: "Watching Free Concerts with Friends ",
      t2: "Find and booking concert tickets near you! Invite your friends to watch together ",
    },
  ]);

  const [currentpage, setcurrentpage] = useState(0);
  const [currentdata, setcurrentdata] = useState(data[0]);

  const handle_next = () => {
    if (currentpage < data.length - 1) {
      setcurrentpage(currentpage + 1);
      setcurrentdata(data[currentpage + 1]);
    }
  };

  const handle_prev = () => {
    if (currentpage > 0) {
      setcurrentpage(currentpage - 1);
      setcurrentdata(data[currentpage - 1]);
    }
  };

  const handle_Start = () => {
    navigate("/login")
  };

  return (
    <div className="w-[100vw] h-[97vh] flex flex-col items-center relative">
      <img 
        src={LOGO} 
        className="w-[50%] mt-[10vh]" 
        />
      <img 
      src={Subimg} 
      className="w-[80%]" 
      />
      <div className="w-full h-[40%] absolute bg-[#FA701B] bottom-0 rounded-t-[9vw] p-[5vw] ">
        <div className="w-full h-full  flex flex-col items-center">
          <h1 className="text-2xl w-[65%] text-center text-white font-semibold leading-10 mt-[5vw]">
            {currentdata.t1}
          </h1>
          <p className="w-[80%] text-gray-300 text-[3.5vw] text-center mt-[5vw] leading-7">
            {currentdata.t2}
          </p>
          <div className="w-[85%] flex justify-between p-[4vw] mt-10 relative top-0">
            {currentpage !== data.length - 1 ? (
              <>
                <button
                  className={`text-gray-200 font-bold border-2 text-[4vw] ${
                    currentpage === 0 ? "opacity-0" : "border-gray-300"
                  } px-5 py-2 rounded-lg`}
                  onClick={handle_prev}
                >
                  Prev
                </button>
                <div className="h-full w-[40%]  flex justify-center items-center gap-2">
                  {data.map((ele, index) => {
                    return (
                      <>
                        <span
                          key={index}
                          className={`w-[2vw] h-[2vw] ${
                            index <= currentpage
                              ? "bg-white"
                              : "bg-white opacity-60"
                          } rounded-lg`}
                        ></span>
                      </>
                    );
                  })}
                </div>
                <button
                  className="text-gray-200 font-bold border-2 text-[4vw] border-gray-300 px-5 py-2 rounded-lg"
                  onClick={handle_next}
                >
                  Next
                </button>
              </>
            ) : (
              <button
                className="w-full whitespace-nowrap text-[#FA701B] font-bold flex justify-center items-center gap-3 text-[4vw] bg-white px-5 py-2 rounded-lg "
                onClick={handle_Start}
              >
                Get Started
                <FaArrowRight />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

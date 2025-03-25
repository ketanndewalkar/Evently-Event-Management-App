import React, { useContext, useRef, useState } from "react";
import { VscSettings } from "react-icons/vsc";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import tshirt1 from "../../asset/tshirt1.png";
import Filter from "../components/Filter";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { RxCross1 } from "react-icons/rx";
import { CommonContext } from "../context/CommonContext";
import { Link } from "react-router-dom";

const Search = () => {
  const { search, result, searchvalue } = useContext(CommonContext);
  const filter = useRef(null);
  const [showFilter, setShowFilter] = useState(false);
  
  useGSAP(() => {
    if (showFilter) {
      gsap.to(filter.current, {
        x: "-100%",
        duration: 0.3,
      });
    } else {
      gsap.to(filter.current, {
        x: "0%",
        duration: 0.3,
      });
    }
  }, [showFilter]);

  return (
    <>
      <div className="px-4 w-full relative overflow-x-hidden z-10 pb-25">
        <h1 className="font-mono font-bold text-[1.3rem] mt-3 text-center">
          Search Result ( {searchvalue} )
        </h1>
        <div className="flex justify-between items-center w-full mt-4 relative z-20">
          <p className="text-[1.1rem] text-gray-500">
            Showing {Array.isArray(result) ? result.length : 0} results
          </p>
          <span
            className="p-2 rounded-full text-[1.4rem] bg-gray-200 text-gray-600"
            onClick={() => setShowFilter(!showFilter)}
          >
            {!showFilter ? <VscSettings /> : <RxCross1 />}
          </span>
        </div>
        <div className="absolute w-full left-full z-99" ref={filter}>
          <Filter showFilter={showFilter} setShowFilter={setShowFilter} />
        </div>

        <div className="w-full mt-4 flex flex-row flex-wrap gap-x-5 gap-y-8 justify-center py-2">
          {Array.isArray(result) && result.length > 0 ? (
            result.map((ele) => (
              <Link key={ele._id} to={`/home/detail/${ele._id}`} className="w-49 h-70 rounded-lg shrink-0">
                <div className="w-full h-49 rounded-lg bg-gray-200 p-2 flex items-center justify-center">
                  <img src={Array.isArray(ele.images) && ele.images.length > 0 ? ele.images[0] : tshirt1} className="mix-blend-multiply z-0" alt={ele.name} />
                </div>
                <h1 className="font-bold mt-1">{ele.name.slice(0, 23)}..</h1>
                <div className="flex items-center gap-1 text-[1.1rem] mt-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalf />
                </div>
                <div className="flex items-center mt-3 justify-between">
                  <span className="text-[1.3rem] font-semibold">₹ {parseInt(ele.price)}</span>
                  <span className="text-[1.3rem] font-semibold line-through text-gray-500">
                    ₹399
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center text-gray-500">No results found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;

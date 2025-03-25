import { useGSAP } from "@gsap/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoCheckmark } from "react-icons/io5";
import { CommonContext } from "../context/CommonContext";

const Filter = (props) => {
  const {search} = useContext(CommonContext);
  const colors = [
    "blue", "green", "yellow", "purple",
    "pink", "orange", "gray", "lime", "cyan", "teal"
  ];
  const [filterdata, setfilterdata] = useState({
    selectedColor:[],
    maxvalue:0,
    minvalue:0,
  });

  const handlefilter = (e) =>{
    e.preventDefault();
    console.log("clicked");
    const query = new URLSearchParams();
    filterdata.selectedColor.forEach((color)=>query.append("color",color));
    query.append("minvalue",filterdata.minvalue);
    query.append("maxvalue",filterdata.maxvalue);
    query.append("search",search);
    fetch(`http://localhost:3000/filter?${query.toString()}`)
    .then(async (res)=>console.log(await res.json()))
    .catch(async (error)=>console.log(error));
  }

  const handlechangecheckbox = (color) =>{
    console.log("hello");
    if(filterdata.selectedColor.includes(color)){
      setfilterdata((prev)=>{
        return(
          {...prev,["selectedColor"]:filterdata.selectedColor.filter((ele)=>ele!==color)}
        )
      })
    }else{
      setfilterdata((prev)=>{
        return({...prev,["selectedColor"]:[...filterdata.selectedColor,color]})
      })
    }
  }

  const handlechangeinput = (e) =>{
    setfilterdata((prev)=>{
      return ({...prev,[e.target.name]:parseInt(e.target.value)})
    })
  }

  useEffect(() => {
    setfilterdata((prev)=>({...prev,selectedColor:[],maxvalue:0,minvalue:0}));
  },[props.showFilter])

  return (
    <>
      <div className="w-full border-1 border-gray-300 absolute top-full bg-white mt-3 rounded-lg py-3 px-6">
        <div className="flex items-center justify-between">
          <h1 className="text-[1.4rem] font-bold">Filter</h1>
          <RxCross1
            className="text-[1.5rem] hidden"
            onClick={() => props.setShowFilter((prev) => !prev)}
          />
        </div>
        <div className="w-full border-b-1 border-gray-500 mt-2"></div>
        <h1 className="text-[1.2rem] font-semibold mt-3">Price</h1>

        <div className="flex items-center justify-between mt-3">
          <input
            type="number"
            name="minvalue"
            className="w-1/2 border-1 border-gray-300 rounded-lg py-2 px-4"
            placeholder="Min Price"
            value={filterdata.minvalue==0?"":filterdata.minvalue}
            onChange={handlechangeinput}
          />
          <span className="mx-2">-</span>
          <input
            type="number"
            name="maxvalue"
            className="w-1/2 border-1 border-gray-300 rounded-lg py-2 px-4"
            placeholder="Max Price"
            value={filterdata.maxvalue==0?"":filterdata.maxvalue}
            onChange={handlechangeinput}
          />
        </div>
        <div className="w-full border-b-1 border-gray-300 mt-4"></div>
        <h1 className="text-[1.2rem] font-semibold mt-3">Color</h1>

        <div className="flex items-center mt-3 flex-wrap justify-start gap-y-2 gap-x-5 px-1rounded-lg py-2 ">
          <div className="flex flex-wrap gap-4">
            {colors.map((color)=>(
              <label key={color} htmlFor={color} className="cursor-pointer">
              <span
                className={`w-12 h-12 rounded-full flex justify-center items-center opacity-70 ${filterdata.selectedColor.includes(color)?"border-1 border-black":""}`}
                style={{backgroundColor:`${color}`}}
              >
                {filterdata.selectedColor.includes(color)?<IoCheckmark className="text-black text-3xl opacity-100"/>:""}
              </span>
              <input
                id={color}
                type="checkbox"
                name="color"
                value={color}
                className="hidden"
                checked={filterdata.selectedColor.includes(color)}
                onChange={() => handlechangecheckbox(color)}

              />
            </label>
            ))}          
          </div>
        </div>
        <button className="text-[1.2rem] p-2 w-full border-2 border-black mt-4 rounded-lg bg-black text-white" onClick={handlefilter}>
          Filter Out
        </button>
      </div>
    </>
  );
};

export default Filter;

import React, { useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Edit from "../components/Edit";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Profile = () => {
  const [arr,setarr] = useState(["Name", "Profile Image", "Change Password", "Username"]);
  const [field, setfield] = useState(0)
  const edit = useRef(null);
  const profile = useRef(null);
  const [showEdit, setShowEdit] = useState(false);
  const navigate = useNavigate();
  const editani = () => {
    if (showEdit) {
      gsap.to(edit.current, {
        x: "-100%",
      });
      gsap.to(profile.current,{
        x:"-100%"
      })
    } else {
      gsap.to(edit.current, {
        x: "0%",
      });
      gsap.to(profile.current,{
        x:"0%"
      })
    }
  };

  const handleEdit = (num) =>{
    setShowEdit(true);
    setfield(num);
    
  }

  const handleback = () => {
    if (showEdit) {
      setShowEdit(false);
    } else {
      navigate("/home");
    }
  };
  useGSAP(() => {
    editani();
  }, [showEdit]);

  return (
    <>
      <div className="px-2 w-full relative h-screen overflow-hidden">
        <div className="w-full h-fit relative mt-10 overflow-hidden">
          <IoIosArrowBack
            className="text-3xl absolute h-full"
            onClick={handleback}
          />
          <h1 className="w-full h-full text-3xl text-center">Profile</h1>
        </div>
        <div className="w-full border-gray-400 border-1 mt-10 p-2 rounded-lg relative overflow-hidden" ref={profile}>
          {arr.map((ele,index) => (
            <>
              <span 
                className={`w-full ${arr.length-1!=index?'border-b-1':""} border-black flex items-center px-2 py-5 justify-between`}
                onClick={()=>handleEdit(index)}
                key={index}>
                <p className="h-full">{ele}</p>
                <IoIosArrowForward className="h-full" />
              </span>
            </>
          ))}
          
          <button className="w-full h-13 mt-14 bg-black text-white rounded-lg">
            Log Out
          </button>
        </div>
        <div
          className="w-full absolute top-19 left-full p-2 bg-white"
          ref={edit}
        >
          <Edit field={field} field_name={arr[field]}/>
        </div>
      </div>
    </>
  );
};

export default Profile;

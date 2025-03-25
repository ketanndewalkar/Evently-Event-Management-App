import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Loader from "./loader";

const Edit = (props) => {
  const { user, setUser } = useContext(AuthContext);
  const [file, setfile] = useState(null);
  const [loader, setloader] = useState(false);
  const fieldName = {
    0: "email",
    1: "profile",
    2: "password",
    3: "username",
  };
  const [value, setvalue] = useState("");

  const handleprofile = async (e) => {
    e.preventDefault();
    setloader(true);
    const formdata = new FormData();
    formdata.append("profile", file);
    const res = await fetch("http://localhost:3000/profile", {
      method: "POST",
      credentials: "include",
      body: formdata,
    });

    const data = await res.json();
    const id = data.User.profile;

    try {
      const image = await fetch(`http://localhost:3000/profile_image?id=${id}`);

      const imageurl = await image.json();
      console.log(imageurl);
      setUser({ ...user, profile: imageurl.image });
    } catch (error) {
      console.log(error);
    }

    setloader(false);
  };

  const handleupdate = (e) => {
    e.preventDefault();
    setloader(true);
    console.log(fieldName[props.field], value, "check");
    fetch(`http://localhost:3000/profile-update`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        field: fieldName[props.field],
        value: value,
      }),

      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        console.log(await res.json());
        setUser((prev) => ({ ...prev, [`${fieldName[props.field]}`]: value }));
        setvalue("");
        setloader(false);
      })
      .catch(async (error) => console.log(error));
  };
  useEffect(() => {
    console.log(
      props.field,
      props.field_name,
      user[`${fieldName[props.field]}`]
    );
  });
  return (
    <>
      <div className="w-full border-1  border-gray-200 bg-white h-200 rounded-lg px-2 relative flex flex-col justify-between mt-8">
        <div>
          <h1 className="text-[1.2rem] mt-6">{props.field_name}:</h1>
          <div className="relative">
            {props.field != 1 ? (
              <input
                className="outline-none border-1 rounded-lg w-full py-2 px-4 mt-2"
                type="text"
                placeholder={
                  fieldName[props.field] != "password"
                    ? user[`${fieldName[props.field]}`]
                    : ""
                }
                value={value}
                onChange={(e) => setvalue(e.target.value)}
              />
            ) : (
              <>
                <input
                  id="profile"
                  type="file"
                  className="hidden"
                  onChange={(e) => setfile(e.target.files[0])}
                />
                <label htmlFor="profile">
                  <div className="w-full flex justify-center items-center mt-4 py-4">
                    <img
                      src={user.profile}
                      className="w-60 h-60 border-3 rounded-lg active:border-gray-300 hover:border-gray-300 hover:cursor-pointer"
                    />
                  </div>
                </label>
              </>
            )}
            <span className="absolute top-[35%] right-2">
              {loader ? <Loader /> : ""}
            </span>
          </div>
          <p className="text-green-500"></p>
        </div>
        <button
          className="border-1 rounded-lg bg-black text-white p-3 w-full flex mt-10 mb-4 justify-center items-center"
          onClick={(e) =>
            props.field != 1 ? handleupdate(e) : handleprofile(e)
          }
        >
          <span>Update</span>
        </button>
      </div>
    </>
  );
};

export default Edit;

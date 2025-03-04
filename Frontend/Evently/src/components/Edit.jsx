import React, { useEffect, useState } from 'react'

const Edit = (props) => {
    const fieldName = {
        0:"name",
        1:"profile_image",
        2:"usename",
        3:"password"
    }
    const [value, setvalue] = useState("");
    useEffect(()=>{
        console.log(props.field,props.field_name);
    })
  return (
    <>
    <div className='w-full border-1  border-gray-200 bg-white h-200 rounded-lg px-2 relative flex flex-col justify-between'>
        <div>
          <h1 className='text-[1.2rem] mt-6'>{props.field_name}:</h1>
          <input className='outline-none border-1 rounded-lg w-full py-2 px-4 mt-2' value={value} onChange={(e)=>setvalue(e.target.value)}/>
          <p className='text-green-500'>Done</p>
        </div>
        <button className="border-1 rounded-lg bg-black text-white p-3 w-full flex mt-10 mb-4 justify-center items-center"><span>Update</span></button>
    </div>
    </>
  )
}

export default Edit



import React from 'react'
import { IoMenu } from "react-icons/io5";
import Logo from "../../asset/SHOP.CO.png"
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <div className='w-full h-18 px-4 text-white flex items-center justify-between'>
        <div className=' h-14  flex items-center gap-2'>
          <IoMenu className='text-4xl text-black'/>
          <h1 className='custom1 text-3xl text-black h-full flex items-center handle_logo'><span>SHOP CO</span></h1>
        </div>
        <div className=' flex text-black text-3xl gap-7 items-center mr-3 font-semibold'>
        <CiSearch />
        <CiShoppingCart />
        <IoPersonOutline className='text-2xl'/>
        </div>
    </div>
  )
}

export default Navbar
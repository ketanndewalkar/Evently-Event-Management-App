import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import Logo from "../../asset/SHOP.CO.png";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { FaPaypal } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full px-4 py-4 bg-gray-200'>
        <div className='w-full h-[30vh] p-6 bg-black border-2 border-black rounded-4xl flex flex-col justify-center items-center gap-3'>
            <h1 className='text-3xl w-full font-bold text-white custom1'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
            <span className='bg-white w-full rounded-3xl flex items-center h-12 px-3'>
              <MdOutlineMail className='text-3xl text-gray-400'/>
              <input
              className='px-2 border-none outline-none w-full'
              placeholder="Enter your email address"
              type="text"/>
            </span>
            <span className='bg-white w-full rounded-3xl flex items-center h-12 px-3 justify-center gap-2'>
              <FaBell />
              <p className='font-bold'>Subscribe to our Newsletter</p>
            </span>
        </div>
        <h1 className='custom1 text-3xl mt-10'>SHOP CO</h1>
        <p className='text-gray-400 mt-2'>We have clothes that suits your style and which you`re proud to wear. From women to men.</p>
        <div className='w-full  flex gap-3 mt-4'>
          <span className='w-10 h-10 border-1 bg-white border-gray-500 rounded-full flex justify-center items-center text-1xl text-gray-800'>
            <RiTwitterXFill />
          </span>
          <span className='w-10 h-10 border-1 bg-black border-gray-500 rounded-full flex justify-center items-center text-1xl text-white'>
            <FaFacebookF />
          </span>
          <span className='w-10 h-10 border-1 bg-white border-gray-500 rounded-full flex justify-center items-center text-1xl text-gray-800'>
            <IoLogoInstagram />
          </span>
          <span className='w-10 h-10 border-1 bg-white border-gray-500 rounded-full flex justify-center items-center text-1xl text-gray-800'>
            <FaGithub />
          </span>
        </div>
        <div className='inline-block w-1/2 mt-7'>
          <h1 className='text-1xl font-bold text-gray-600 tracking-[1vw]'>COMPANY</h1>
          <ul className='text-gray-400 mt-3  flex flex-col gap-2'>
            <li>About</li>
            <li>Feature </li>
            <li>Work</li>
            <li>Career</li>
          </ul>
        </div>
        <div className='inline-block w-1/2'>
          <h1 className='text-1xl font-bold text-gray-600 tracking-[1vw]'>HELP</h1>
          <ul className='text-gray-400 mt-3 flex flex-col gap-2'>
            <li>Customer Support</li>
            <li>Delivert Details </li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className='inline-block w-1/2 mt-7'>
          <h1 className='text-1xl font-bold text-gray-600 tracking-[1vw]'>FAQ</h1>
          <ul className='text-gray-400 mt-3  flex flex-col gap-2'>
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payment</li>
          </ul>
        </div>
        <div className='inline-block w-1/2'>
          <h1 className='text-1xl font-bold text-gray-600 tracking-[1vw]'>RESOURCES</h1>
          <ul className='text-gray-400 mt-3 flex flex-col gap-2'>
            <li>Free eBook</li>
            <li>Development Tutorials</li>
            <li>How to - Blog</li>
            <li>Youtube Playlist</li>
          </ul>
        </div>
        <div className='w-full border-b-1 border-gray-400 mt-15'></div>
        <p className='w-full text-center text-gray-400 mt-6'>Shop.co. ⓒ 2000-2025. All Rights Reserved </p>
        <div className='w-full flex justify-center items-center gap-6 mt-3'>
          <RiVisaLine className='text-6xl text-gray-700 '/>
          <FaPaypal className='text-3xl text-gray-700'/>
          <FaApplePay className='text-6xl text-gray-700'/>
          <FaGooglePay className='text-6xl text-gray-700'/>
        </div>
    </div> 
  )
}

export default Footer
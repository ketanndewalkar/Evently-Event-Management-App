import React, { useContext, useEffect, useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import tshirt1 from "../../asset/tshirt1.png"
import tshirt2 from "../../asset/tshirt2.png"
import tshirt3 from "../../asset/tshirt3.png"
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { AiOutlineMinus,AiOutlinePlus } from "react-icons/ai";
import ProductDetail from '../components/ProductDetail';
import Review from "../components/Review";
import { CommonContext } from '../context/CommonContext';
import { useParams } from 'react-router-dom';
import { getproduct } from '../Functions/getProduct';
import { addToCart } from '../Functions/cart.controller';


const Detail = () => {
    const [show, setshow] = useState(true)
    const [main_image, setmain_image] = useState(null)
    const [product,setproduct] = useState({});
    const [quantity,setquantity] = useState(1);
    const params = useParams();
    const {searchvalue,setMainloader,Mainloader} = useContext(CommonContext);

    const handletheproduct = async  () =>{
        setMainloader(true);
        const product = await getproduct(params.id);
        setproduct(product);
        setMainloader(false);
    }

    useEffect(()=>{
        if(Object.keys(product).length != 0)
        setmain_image(product.images[0])
    },[product])


    useEffect(()=>{
        handletheproduct();
    },[])
        
        
  return (
    <>
    {Object.keys(product).length != 0 ? <div className='w-full px-4'>
        <p className='flex items-center text-gray-500 pl-1 mt-4'>Home <IoIosArrowForward /> Shop <IoIosArrowForward /> {searchvalue[0].toUpperCase() + searchvalue.slice(1).toLowerCase()} <IoIosArrowForward /> {product.name} </p>
        <div className='w-full h-100 bg-gray-200 rounded-3xl p-4 mt-9 flex items-center justify-center'>
            <img src={main_image} className='mix-blend-multiply'/>
        </div>
        <div className='w-full flex mt-3 gap-2'>
            {product.images.map(ele=>(<>
                <div className={`w-1/3 h-33 rounded-lg bg-gray-200 p-2 flex items-center justify-center ${main_image==ele?"border-2":""}`} onClick={()=>setmain_image(ele)} >
                <img src={ele} className='mix-blend-multiply'/>
            </div>
            </>))}
            
        </div>
        <h1 className='w-full custom1 text-2xl mt-6'>{product.name} <br/>{product.category}</h1>
        <div className='w-full flex gap-1 text-[1.2rem] mt-3 items-center'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStarHalf/>
            <p className='text-[1.1rem] ml-1'>4.5/<span className='text-gray-400'>5</span></p>
        </div>
        <div className='flex items-center gap-4 mt-3'>
            <span className='text-2xl font-semibold'>$299</span>
            <span className='text-2xl font-semibold line-through text-gray-400'>$399</span>
            <span className='text-[1.1rem] px-3 py-1 rounded-full text-red-500 bg-[#f2dada]'>- 40%</span>
        </div>
        <div className='w-full border-b-1 border-gray-400 mt-4'></div>
        <p className='text-[1rem] text-gray-500 mt-4'>{product.description}<br/> Crafted from soft and breathable fabric, it offers superior confort and style.</p>
        <div className='w-full border-b-1 border-gray-400 mt-4'></div>
        <p className='text-[1.2rem] text-gray-500 mt-3'>Select Color</p>
        <div className='flex gap-2 mt-3'>
            <span className='w-12 h-12 border-1 border-gray-700 rounded-full bg-violet-300 flex items-center justify-center'><IoMdCheckmark className='text-2xl text-gray-700'/></span>
            <span className='w-12 h-12 border-1 border-gray-400 rounded-full bg-yellow-200 flex items-center justify-center'></span>
            <span className='w-12 h-12 border-1 border-gray-400 rounded-full bg-pink-200 flex items-center justify-center'></span>
        </div>
        <div className='w-full border-b-1 border-gray-400 mt-5'></div>
        <p className='text-[1.2rem] text-gray-500 mt-3'>Select Size</p>
        <div className='gap-2 mt-3 flex justify-between'>
            <span className=' py-2 px-6 rounded-full bg-gray-200 text-gray-500 active:bg-black active:text-white'>Small</span>
            <span className=' py-2 px-6 rounded-full bg-gray-200 text-gray-500 active:bg-black active:text-white'>Medium</span>
            <span className=' py-2 px-6 rounded-full bg-gray-200 text-gray-500 active:bg-black active:text-white'>Large</span>
            <span className=' py-2 px-6 rounded-full bg-gray-200 text-gray-500 active:bg-black active:text-white'>X-Large</span>
        </div>
        <div className='w-full border-b-1 border-gray-400 mt-5'></div>
        <div className='w-full flex mt-4 justify-between gap-3'>
            <span className='flex items-center py-2 px-4 rounded-full gap-3 bg-gray-200'><AiOutlineMinus className='text-[1.1rem]' onClick={()=>setquantity(quantity==1?quantity:quantity-1)}/><p className='text-[1.2rem]'>{quantity}</p><AiOutlinePlus  className='text-[1.1rem]' onClick={()=>setquantity(quantity+1)}/></span>
            <span className=' border-2 border-black py-2 px-3 rounded-full w-full text-center bg-black text-white' onClick={()=>addToCart(product._id,quantity)}>Add to Cart</span>
        </div>
        <div className='flex justify-evenly mt-5'>
            <span className={`text-[1.2rem]  py-2 border-b-2  ${show ? "border-black text-black font-semibold":"border-white text-gray-400"}`} onClick={()=>setshow(true)}>Product Details</span>
            <span className={`text-[1.2rem]  py-2 border-b-2 border-black text-black ${show==false ? "border-black text-black font-semibold":"border-white text-gray-400"}`} onClick={()=>setshow(false)}>Rating & Reviews</span>
            
        </div>
        <div className='w-full border-b-1 border-gray-200'></div>
        {show?<ProductDetail/>:<Review/>}
        


    </div>:<div className='w-full h-screen bg-white'></div>}
    </>
  )
}

export default Detail
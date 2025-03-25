import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import img from "../../asset/tshirt1.png";
import { FaArrowRight } from "react-icons/fa";
import Loader from "../components/loader";
import { cartProductDelete, cartProductQuantity } from "../Functions/cart.controller";
const Cart = () => {
  const [products, setproducts] = useState([]);
  const [loader, setloader] = useState(true);
  const [total, setTotal] = useState({
    subtotal: 0,
    tax: 0,
    delivery: 0,
    discount: 0,
    total: 0,
  });
  const handledelete = async (id) =>{
    setloader(true);
    await cartProductDelete(id);
    setproducts(products.filter(ele=>{
      return ele._id !== id
    }))
    setTimeout(()=>{
      setloader(false);
    },2000);

  }

  const handlequantity = async (id,quantity) =>{
    cartProductQuantity(id,quantity);
    // setproducts((prev)=>{
    //   return ({...prev,prev})
    // })
  }

  useEffect(() => {
    fetch("http://localhost:3000/cart", {
      method: "GET",
      credentials: "include",
    }).then(async (res) => {
      const data = await res.json();
      console.log(data); // Log the fetched data
      setproducts(Array.isArray(data.products) ? data.products : []); // Ensure products is always an array
      setloader(false);
      console.log(products.length);
    });
  }, []);
  useEffect(() => {
    if (products.length !== 0) {
      const subtotal = products.reduce((acc, num) => acc + num.price, 0); // Fixed reduce syntax
      console.log("subtotal", subtotal.toFixed(2));
      const tax = subtotal * 0.15;
      const delivery = subtotal * 0.2;
      const discount = subtotal * 0.1;
      const total = subtotal + tax + delivery - discount;

      setTotal({ subtotal, tax, delivery, discount, total });
    }
  }, [products]);
  return (
    <>
      <div className="w-full px-4 mb-5">
        <h1 className="text-[1.1rem] mt-4 text-gray-500">Home {">"} Cart</h1>
        <h1 className="text-3xl custom1 mt-4">YOUR CART</h1>
        {products.length === 0 || loader ? (
          <>
            {loader ? (
              <div className="mt-3">
                <Loader />
              </div>
            ) : (
              <div className="w-full text-center p-4 text-md mt-4">
                No Product in Cart
              </div>
            )}
          </>
        ) : (
          <>
            <div className="border-1 border-gray-300 w-full rounded-3xl mt-3 p-6">
              {products.map((product, index) => (
                <>
                  <div className="w-full h-30 flex mb-3" key={index}>
                    <div className="w-30 h-30 rounded-lg bg-gray-200 shrink-0 p-4 flex justify-center items-center">
                      <img
                        src={product.images[0]}
                        className="mix-blend-multiply"
                      />
                    </div>
                    <div className="w-full h-full p-2">
                      <div className="flex justify-between items-center">
                        <h1 className="font-bold text-[1.1rem]">
                          {product.name.slice(0, 20)}
                        </h1>
                        <AiFillDelete className="text-red-400 text-[1.2rem]" onClick={()=>{
                          handledelete(product._id);
                        }}/>
                      </div>
                      <p className="font-bold text-sm text-gray-600">
                        Size : <span className="font-normal">Large</span>
                      </p>
                      <p className="font-bold text-sm text-gray-600">
                        Color : <span className="font-normal">White</span>
                      </p>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-[1.4rem] font-bold">
                          ${product.price}
                        </p>

                        <span className="flex items-center py-1 px-4 rounded-full gap-3 bg-gray-200">
                          <AiOutlineMinus className="text-[1.1rem]" onClick={()=>{
                            handlequantity(product._id,product.quantity-1)
                          }}/>
                          <p className="text-[1.2rem]">{product.quantity}</p>
                          <AiOutlinePlus className="text-[1.1rem]" onClick={()=>{
                            handlequantity(product._id,product.quantity+1)
                          }}/>
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div className="w-full border-1 border-gray-300 rounded-3xl mt-5 p-5">
              <h1 className="font-bold text-[1.3rem]">Order Summary</h1>
              <p className="text-gray-400 flex justify-between w-full text-[1.1rem] items-center mt-3">
                <span>Subtotal</span>
                <span className="text-black font-bold text-xl">
                  ${total.subtotal.toFixed(2)}
                </span>
              </p>
              <p className="text-gray-400 flex justify-between w-full text-[1.1rem] items-center mt-3">
                <span>Discount</span>
                <span className="text-red-500 font-bold text-xl">
                  -${total.discount.toFixed(2)}
                </span>
              </p>
              <p className="text-gray-400 flex justify-between w-full text-[1.1rem] items-center mt-3">
                <span>Delivery Fee</span>
                <span className="text-black font-bold text-xl">
                  ${total.delivery.toFixed(2)}
                </span>
              </p>
              <div className="border-b-1 border-gray-200 my-3"></div>
              <p className="text-black font-bold flex justify-between w-full text-[1.1rem] items-center mt-3">
                <span>Total</span>
                <span className="text-black font-bold text-2xl">
                  ${total.total.toFixed(2)}
                </span>
              </p>
              <button className="bg-black text-white w-full p-4 rounded-full mt-4 relative">
                Button
                <FaArrowRight className="h-full absolute text-white text-[1.5rem] right-4 top-0" />
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;

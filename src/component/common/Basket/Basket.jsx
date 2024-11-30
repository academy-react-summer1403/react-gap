import React from 'react'
import { BsArrowLeftSquare } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
const Basket = () => {
  return (
    <div className='h-[300px] text-center mt-10'>

      <h1>سبد خرید شما خالی هست</h1>
          
          <NavLink to={"/"}>
                <button className="btn btn-info text-white mt-52">شروع یادگیری برنامه نویسی
        <BsArrowLeftSquare fill='white' size={20}/>

        </button>
      </NavLink>

      
      </div>
  )
}

export default Basket

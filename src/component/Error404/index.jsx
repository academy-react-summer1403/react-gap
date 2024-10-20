import React from 'react'
import { NavLink } from 'react-router-dom'

const index = () => {
  return (
    <div className='flex  justify-center flex-col  h-[680px] mt-6 ml-6'>

      <div className='w-[1100px] h-[520px] mr-[190px]'>
        <img src='./Mask Group.png' />
      </div>
      <NavLink to={"/"}>
      <button className='w-[190px] h-[60px] 
      rounded-[10px]  bg-[#158B68;] mr-[690px]
       text-[#ffffff] text-lg '>
         بازگشت به خانه </button>

      </NavLink>



    </div>
  )
}

export default index

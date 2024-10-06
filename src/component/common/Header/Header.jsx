import React from 'react'
import { Fragment } from 'react'


const Header = () => {
  return (
   <Fragment>
    <div className='flex justify-between
     w-screen h-20 bg-gradient-to-r from-[#A4F6DE] to-[#FFFFFF]  ' >



            <div className=' flex  gap-2 border-2 w-60 h-10 m-6'>
            <div className='border-2 w-9 h-10' ><img src="" alt="" /></div>
             <h1> آکادمی اچ وان </h1>
            </div>
     
     
       
       <div className='flex gap-6 justify-center border-2 w-96 h-10 m-6'>

       <button className='border-2 w-360 h-10 font-inter'> صفحه اصلی </button>
       <div> دوره ها </div>
       <div> مقالات </div>
       <div> درباره ما </div>

       </div>
       
      <div>
        <img src="./" alt="" />
      </div>


<div className='m-6'>
   <button> ثبت نام / ورود </button>
 
</div>
     
     

    </div>

   </Fragment>
  )
}

export default Header

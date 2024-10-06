import React from 'react'
import { Fragment } from 'react'


const Header = () => {
  return (
   <Fragment>
    <div className='flex justify-between
     w-screen h-20 bg-gradient-to-r from-[#A4F6DE] to-[#FFFFFF]  ' >



            <div className=' flex  gap-2  w-60 h-10 m-6'>
            <div className='border-2 w-9 h-10' ><img src="" alt="" /></div>
             <h1 className='text-[#22445D;] font-inter'> آکادمی اچ وان </h1>
            </div>
     
     
       
       <div className='flex gap-6 justify-center w-96 h-10 m-6'>

       <button className='w-[110px] h-[37px] bg-[#6D676757;] rounded-lg text-[#22445D;] font-inter'> صفحه اصلی </button>
       <div className='text-[#22445D;]'> دوره ها </div>
       <div  className='text-[#22445D;]' > مقالات </div>
       <div  className='text-[#22445D;]'> درباره ما </div>

       </div>
       
      <div>
        <img src="./" alt="" />
      </div>


<div className='m-6'>
   <button className='w-[110px] h-[37px] bg-[#00DF9D;] rounded-lg text-[#22445D;]  font-inter'> ثبت نام / ورود </button>
 
</div>
     
     

    </div>

   </Fragment>
  )
}

export default Header

import React from 'react'
import { Fragment } from 'react'
// import cours from '../screens/Landing/cours';


const Header = () => {
    return (
    <Fragment>




  
    <div className='flex justify-between
     w-screen h-20 bg-gradient-to-r from-[#A4F6DE] to-[#FFFFFF]  ' >



            <div className=' flex  gap-2  w-60 h-10 m-6'>
            <div className='border-2 border-black w-[50px] h-[50px]' > 
               <img src='./Logo.png'/>
            </div>

             <h1 className='text-[#22445D;] font-inter text-2xl m-3'>
               آکادمی اچ وان 
             </h1>
            </div>
     
     
       
       <div className='flex gap-6 justify-center h-[70px] m-6 mb-3'>

       <button className='w-[150px] h-[57px] bg-[#E8F2F8;] rounded-lg text-[#22445D;] font-inter relative -left-7'> صفحه اصلی </button>

       <div className='flex gap-6 justify-center relative top-2 w-[300px] '>
          <div className='text-[#22445D;] text-xl'> دوره ها </div>
       <div  className='text-[#22445D;] text-xl' > مقالات </div>
       <div  className='text-[#22445D;] text-xl'> درباره ما </div>
       </div>
     

       </div>
       
      <div>
        <img src="./" alt="" />
      </div>


<div className='m-6'>
   <button className='w-[150px] h-[57px] bg-[#00DF9D;] rounded-lg text-[#22445D;]  font-inter relative left-6'> ثبت نام / ورود </button>
 
</div>
     
     

    </div>

</Fragment>
  )
}


export default Header

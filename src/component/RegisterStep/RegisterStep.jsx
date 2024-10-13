import React from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { HiMiniFingerPrint } from "react-icons/hi2";
const RegisterStep = () => {
  return (
    <div className=' flex justify-center  w-screen h-[500px] m-10 '>

        <div className='flex  w-[800px] h-[500px]'>
            <div className=' w-[400px] h-[500px] bg-[#FBF6F6;] rounded-r-2xl shadow-2xl'>
                <div className=' flex justify-center relative top-[100px] w-[400px] h-[400px]'>

                    <form action=''>

                        <h1 className='  relative top-[20px] font-Inter  text-[#22445D]'>ثبت نام</h1>
                        <br />
                        <br />
                        <div className='input-box'>
                            <input className='border-2 relative w-[340px] h-[40px] rounded-lg border-[#158B68] mt-4 px-5 right-2' type="text" placeholder='کد تایید' />
                               <HiMiniFingerPrint   className=' relative -top-6 fill-[#158B68] right-3'/>
                            
                        </div>
                               
                                <br />
                        <div className='register-link'>
                            <button className='border-2 w-[340px] h-[40px] rounded-lg  bg-[#158B68;] text-white'>ادامه</button>
                            <br />
                            <br />
                            <button className='border-2 w-[340px] h-[40px] rounded-lg  bg-[#FFFFFF;] text-[#22445D] border-[#158B68]'>بازگشت به صفحه قبل</button>
                            <br />


                        </div>

                        <div><AiOutlineHome className=' relative right-80 bottom-[350px] size-6 fill-[#158B68]' /></div>


                    </form>

                </div>
            </div>
            <div className='flex justify-center  w-[400px] h-[500px] bg-[#A4F6DE;] rounded-l-2xl '> 
                <div className='w-[300px] h-[300px] mt-20'>
                <img src="./registerVerfy.png" alt="" />

                </div>
            </div>

        </div>
      
    </div>
  )
}

export default RegisterStep

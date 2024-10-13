import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { FaMobileAlt } from 'react-icons/fa'
import { GoKey } from 'react-icons/go'
import { FaAt } from "react-icons/fa";
import { BiShieldAlt2 } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
const RegisterStep1 = () => {
  return (
    <div className=' flex justify-center  w-screen h-[500px] m-10'>
    <div className='flex  w-[800px] h-[500px] '> 
      
        <div className=' w-[400px] h-[500px] bg-[#FBF6F6;] rounded-r-2xl shadow-2xl'>


          <div className=' flex justify-center relative  top-[100px] w-[400px] h-[400px]'>

  <form action="">

          <h1 className=' relative -top-[20px] font-inter'>ثبت نام</h1>
          <br />
          <div className='input-box'>
          <input  className=' rounded-lg  w-[340px] h-[40px] mt-2 relative px-5 border-2 border-[#158B68]' type='text'    placeholder='شماره همراه' required  />
          <FaMobileAlt  className=' relative -top-6 fill-[#158B68]'/>
          </div>

          <div className='input-box'>
            <input className='border-2 w-[340px] h-[40px] mt-2 relative px-5 rounded-lg border-[#158b68]' type="text" placeholder='ایمیل کاربر' />
          </div>
          <div><FaAt className='relative -top-6 fill-[#158B68] right-1'/></div>

          <div className='input-box '>
          <input className='border-2 rounded-lg  w-[340px] h-[40px] mt-2 relative px-5  border-[#158B68]' type='password' placeholder='رمز عبور' required />  
          <div> <GoKey  className=' relative -top-6 right-1 fill-[#158B68]'/></div>
          </div>

          <div className='input-box'>
            <input className='border-2 w-[340px] h-[40px] mt-2 px-5 border-[#158b68] rounded-lg' type="text" placeholder='تکرار رمز عبور'/>
          </div>
          <div><BiShieldAlt2  className=' relative -top-6 right-1 fill-[#158B68] ' /></div>
          <div><TiTick  className=' relative -top-10 right-1 fill-[#158B68]' /></div>

          <div className='remember-forget'>
            <label className='relative  font-inter text-[#22445D] text-xs'><input type="checkbox" /> من با تمام اظهارات موافقم </label>
          </div>

          <div className="register-link">
          <button className=' w-[340px] h-[40px] bg-[#158B68;] text-white rounded-lg  relative mt-3'>ادامه </button>
          </div>

          <div> <AiOutlineHome className=' relative right-80 top-[-480px] size-6 fill-[#158B68]' /> </div>


        </form>



          </div>
    
        </div>

        <div className='flex justify-center border-2 w-[400px] h-[500px] bg-[#A4F6DE;] rounded-l-2xl '>
          <div className='w-[300px] h-[300px] mt-24'>
              <img src="./Layer 2.png" alt="" />
          </div>
        
        </div>

        


      
      </div>

      </div>
  )
}

export default RegisterStep1

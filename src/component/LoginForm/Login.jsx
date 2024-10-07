
import React from 'react'
import { FaMobileAlt } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";
const Login = () => {


  return (
    <div className=' flex justify-center  w-screen h-[500px] m-10'>
    <div className='flex border-2 w-[800px] h-[500px] rounded-lg'> 
      
        <div className='flex justify-center border-2 w-[400px] h-[500px] bg-[#FBF6F6;] '>
          <form action="">
          <h1 >ورود به سیستم</h1>
          <div className='input-box'>

          <input  className=' rounded-lg  w-[340px] h-[35px] mt-4 i' type='text' placeholder='شماره همراه' required  />
          <FaMobileAlt  className='icoc'/>
          </div>
          <div className='input-box '>
          <input className='border-2 rounded-lg  w-[340px] h-[35px] mt-4' type='password' placeholder='رمز عبور' required />
          <IoKeyOutline  className='icoc'/>
          </div>
          <div className='remember-forget'>

            <label><input type="checkbox" /> مرا به خاطر بسپارید</label>
              <br/>
              
            <a href='#'>فراموشی رمز</a>

          </div>
          <button type='submit'>Login</button>
          <div className="register-link">

          <button className=' w-[340px] h-[40px] bg-[#158B68;] text-white rounded-lg'>تایید </button>
          <br/>
          <button className='w-[340px] h-[40px] bg-[#158B68;] text-white rounded-lg mt-4'> بازگشت به صفحه اصلی</button>

                        <br />
            <a href='#'>یک حساب کاربری ایجاد کنید </a>

          </div>
        </form>
        </div>

        <div className='border-2 w-[400px] h-[500px] bg-[#A4F6DE;]'>
          <img src="" alt="" />
        </div>


      
      </div>

      </div>

  )
}

export default Login

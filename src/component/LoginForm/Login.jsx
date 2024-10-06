
import React from 'react'
import { FaMobileAlt } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";
const Login = () => {


  return (
    
    <div className='flex justify-center border-2 w-[1539px] h-[557px] font-inter'>
        <div className='flex justify-center border-2 w-[800px] '> 

        <form action="">
          <h1>Login</h1>
          <div className='input-box'>
          <input type='text' placeholder='شماره همراه' required />
          <FaMobileAlt />
          </div>
          <div className='input-box'>
          <input type='password' placeholder='رمز عبور' required />
          <IoKeyOutline />
          </div>
          <div className='remember-forget'>

            <label><input type="checkbox" /> مرا به خاطر بسپارید</label>
              <br/>
            <a href='#'>فراموشی رمز</a>

          </div>
          <button type='submit'>Login</button>
          <div className="register-link">
            <p>یک حساب کاربری ایجاد کنید <a href='#'>Register</a></p>
          </div>
        </form>
      </div>
      </div>
    
    )
  }

export default Login

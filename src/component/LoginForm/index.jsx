import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { GoKey } from "react-icons/go";
import { AiOutlineHome } from "react-icons/ai";

const index = () => {
  return (
    <div className=" flex justify-center  w-screen h-[500px] m-10 ">
      <div className="flex  w-[800px] h-[500px] ">
        <div className="  w-[400px] h-[500px] bg-[#FBF6F6;] rounded-r-2xl shadow-2xl">
          <div className="flex justify-center relative  top-[100px] w-[400px] h-[400px]">
            <form action="">
              <h1 className=" relative -top-[20px] font-inter">
                ورود به سیستم
              </h1>
              <div className="input-box">
                <input
                  className=" rounded-lg  w-[340px] h-[35px] mt-4 i relative px-5 border-2 border-[#158B68]"
                  type="text"
                  placeholder="شماره همراه"
                  required
                />
                <FaMobileAlt className=" relative -top-6 fill-[#158B68]" />
              </div>
              <div className="input-box ">
                <input
                  className="border-2 rounded-lg  w-[340px] h-[35px] mt-4 relative px-5  border-[#158B68]"
                  type="password"
                  placeholder="رمز عبور"
                  required
                />
                <div>
                  {" "}
                  <GoKey className=" relative -top-6 right-1 fill-[#158B68]" />
                </div>
              </div>
              <div className="remember-forget">
                <br />

                <label className="relative top-[-18px] font-inter text-[#22445D] text-xs">
                  <input type="checkbox" /> مرا به خاطر بسپارید
                </label>

                <br />

                <div>
                  {" "}
                  <AiOutlineHome className=" relative right-80 top-[-300px] size-6 fill-[#158B68]" />{" "}
                </div>
              </div>

              <div className="register-link">
                <button className=" w-[340px] h-[40px] bg-[#158B68;] text-white rounded-lg">
                  تایید{" "}
                </button>
                <br />
                <button className="w-[340px] h-[40px] border-2 border-[#fffff] text-[#22445D] rounded-lg mt-4">
                  {" "}
                  بازگشت به صفحه اصلی
                </button>

                <br />
                <a
                  className="  relative font-inter text-[#22445D] text-xs underline bottom-[-15px]"
                  href="#"
                >
                  یک حساب کاربری ایجاد کنید{" "}
                </a>

                <a
                  className="relative right-20 font-inter text-[#22445D] text-xs underline   bottom-[-15px]"
                  href="#"
                >
                  فراموشی رمز
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="flex justify-center border-2 w-[400px] h-[500px] bg-[#A4F6DE;] rounded-l-2xl ">
          <div className="w-[300px] h-[300px] mt-20">
            <img src="./verfy.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

import React from 'react'
import { MdOutlineContactPhone } from "react-icons/md";


const index = () => {
  return (
    <div className="">
 '
      <div className="h-[700px]">
      <div className=" h-[150px]  text-center m-20">
        {/* <h1 className="text-[#22445D;] text-4xl"> دوره های ما </h1>

        <p className="text-[#22445D;] text-2xl font-normal mt-2">
          {" "}
          ساختن دنیایی بهتر، یک دوره در یک زمان{" "}
        </p> */}

        <div className="border-transparent flex flex-wrap justify-center w-[90%] h-[500px] mr-10 mt-4">
        <div className="div">
            <img className='relative right-14 top-9' src="./hobab.png"/>
            </div>

          <div className="border-2 w-[90%] h-[400px] relative mt-24 rounded-2xl bg-[rgb(232,234,238)]">
            <div className=" w-[40%] h-auto">
            <h1 className='text-start relative top-6 font-bold text-3xl right-6'> از گوشه و اطراف دنیای برنامه‌نویسی </h1>
            <p className='text-start relative text-xl top-10 text-[rgb(149,160,177)] right-6'>نوشتن کار جالبیه که از هزاران سال همراه ما بوده و کمک کرده تا همیشه به روز باشیم، ما در راکت فضای رو به شکلی آماده کردیم تا شما بتونید ایده‌ها و مطالب جالب حوزه برنامه‌نویسی رو در اختیار هزاران برنامه‌نویس عضو راکت قرار بدید. </p>
            <button className="btn btn-primary  relative top-16 left-40 right-9 bg-[#c3ad20] text-[#000]">مشاهده همه مطالب</button>

            </div>
          </div>

          <div className=" flex flex-wrap justify-center w-[50%] h-[700px] relative bottom-[500px] right-[200px] gap-2">
           
            
            <div className="border-2 w-[280px] h-[282px] relative bottom-10 bg-[#ffffffc3]">
              <div className=" w-[90%] h-[50%] mr-4 mt-2">
                <img src="./photo1.png"/>
                <MdOutlineContactPhone className='relative top-12 w-6 h-6' />
                <h1 className='text-[10px] relative top-7 left-14'>  پشتیبانی کد دات </h1>
                <p className='text-end text-[10px] relative top-[50px] text-[rgb(128,146,176)]'> زمان مطالعه: 5 دقیقه </p>
              </div>
              <h1 className='relative top-3 text-start text-xl right-4 font-bold'> آموزش کار با جاوا اسکریپت</h1>
            </div>

            <div className="border-2  w-[280px] h-[282px]  bg-[#ffffffc3] ">
            <div className=" w-[90%] h-[50%] mr-4 mt-2">
                <img src="./photo2.png"/>
                <MdOutlineContactPhone className='relative top-12 w-6 h-6' />
                <h1 className='text-[10px] relative top-7 left-14'>  پشتیبانی کد دات </h1>
                <p className='text-end text-[10px] relative top-[50px] text-[rgb(128,146,176)]'> زمان مطالعه: 5 دقیقه </p>
              </div>
              <h1 className='relative top-3 text-start text-xl right-4 font-bold'> آموزش کار با جاوا اسکریپت</h1>
            </div>

            <div className="border-2  w-[280px] h-[282px] relative bottom-11 bg-[#ffffffc3]">
            <div className=" w-[90%] h-[50%] mr-4 mt-2">
                <img src="./photo2.png"/>
                <MdOutlineContactPhone className='relative top-12 w-6 h-6' />
                <h1 className='text-[10px] relative top-7 left-14'>  پشتیبانی کد دات </h1>
                <p className='text-end text-[10px] relative top-[50px] text-[rgb(128,146,176)]'> زمان مطالعه: 5 دقیقه </p>
              </div>
              <h1 className='relative top-3 text-start text-xl right-4 font-bold'> آموزش کار با جاوا اسکریپت</h1>
            </div>

            <div className="shadow w-[280px] h-[282px] bg-[#ffffffc3] ">
            <div className=" w-[90%] h-[50%] mr-4 mt-2">
                <img src="./photo1.png"/>
                <MdOutlineContactPhone className='relative top-12 w-6 h-6' />
                <h1 className='text-[10px] relative top-7 left-14'>  پشتیبانی کد دات </h1>
                <p className='text-end text-[10px] relative top-[50px] text-[rgb(128,146,176)]'> زمان مطالعه: 5 دقیقه </p>
              </div>
              <h1 className='relative top-3 text-start text-xl right-4 font-bold '> آموزش کار با جاوا اسکریپت</h1>
            </div>

          </div>


        </div>


      </div>
      
    </div>
    </div>
  )
}

export default index

import React from "react";

const Footer = () => {
  return (
    <div className="dark:bg-[#22445D;]  h-[500px] sm:h-[450px] bg-[#A4F6DE;] dark:text-[#ffff]">
      <div className="hidden 2xl:block border-t-2 border-t-[#807A7A]  w-[90%] h-[100px] relative top-[341px] -left-[80px]">
        <div className="flex justify-start gap-3 h-[66px] mt-6">
          <div className="w-[46px] h-[46px]">
            <img src="./h11.png" alt="" />
          </div>
          <div className="w-[70%] h-[56px]">
            <h1 className="text-2xl text-[#757474]">
              کلیه حقوق این وب سایت برای آکادمی اچ وان محفوظ است.©
            </h1>
          </div>
          <div className="flex justify-center gap-2 w-[256px] h-[56px] mr-[590px]">
            <div className=" w-[56px] h-[56px]">
              <img src="./networkicon.png" alt="" />
            </div>
            <div className=" w-[56px] h-[56px]">
              <img src="./network icon (6).png" alt="" />
            </div>
            <div className=" w-[56px] h-[56px]">
              <img src="./network icon.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-[342px] relative -top-[100px]">
        <div className="w-[20%] mt-40 mr-10 h-[200px] sm:mt-20 sm:mr-28 sm:w-[20%]">
          <h1 className="font-inter text-xl text-[#444444;] sm:text-3xl">
            {" "}
            خدمات{" "}
          </h1>
          <div className="w-[327px] h-[200px] mt-5 ">
            <h2 className="text-lg text-[#444444;] m-2 sm:text-2xl">
              آموزش رایگان{" "}
            </h2>
            <h2 className="text-lg text-[#444444;] m-2 sm:text-2xl ">
              {" "}
              مشاوره رایگان{" "}
            </h2>
            <h3 className="text-lg text-[#444444;] m-2 sm:text-2xl">
              {" "}
              فرصت های شغلی{" "}
            </h3>
          </div>
        </div>

        <div className="w-[20%] mt-40 mr-14 h-[200px] sm:mt-20 sm:mr-28 sm:w-[20%]">
          <h1 className="font-inter text-xl text-[#444444;] sm:text-3xl">
            {" "}
            خدمات{" "}
          </h1>
          <div className="w-[327px] h-[200px] mt-5 ">
            <h2 className="text-lg text-[#444444;] m-2 sm:text-2xl">
              آموزش رایگان{" "}
            </h2>
            <h2 className="text-lg text-[#444444;] m-2 sm:text-2xl ">
              {" "}
              مشاوره رایگان{" "}
            </h2>
            <h3 className="text-lg text-[#444444;] m-2 sm:text-2xl">
              {" "}
              فرصت های شغلی{" "}
            </h3>
          </div>
        </div>

        
        <div className="w-[100%] mt-[70%] -mr-60 sm:w-[30%]  sm:mt-20  sm:mr-40">
          <h1 className="text-xl text-[#444444;] m-2 sm:text-2xl"> اخبار آموزشگاه </h1>
          <h2 className="text-lg text-[#444444;] m-2 text-right sm:2xl">
            {" "}
            برای دریافت اخبار بروز آموزشگاه ایمیل خود را وارد کنید.{" "}
          </h2>
          <input
            className="w-[359px] h-[55px] rounded-r-xl relative top-3 outline-none
             placeholder:p-6
             placeholder:font-medium
             "
            type="text"
            name=""
            id=""
            placeholder=" example@gmail.com"
          />

          <button className=" bg-[#41A789;] relative top-3 text-[#ffffff] w-24 rounded-l-lg p-4 hover:bg-[#51b199;] placeholder:pr-6">
            {" "}
            ثبت{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";

const Footer = () => {
  return (
    <div className="h-[442px] bg-[#A4F6DE;]">
      <div className=" border-t-2 border-t-[#807A7A]  w-[1560px] h-[100px] relative top-[341px] -left-[70px]">
        <div className="flex justify-start gap-3 w-[1480px] h-[66px] mt-6">
          <div className="w-[46px] h-[46px]">
            <img src="./h11.png" alt="" />
          </div>
          <div className="w-[700px] h-[56px]">
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

      <div className="flex justify-start gap-[80px] h-[342px] relative -top-[100px]">
        <div className="w-[327px] h-[252px] mt-20 mr-36">
          <h1 className="font-inter text-3xl text-[#444444;]"> خدمات </h1>
          <div className="w-[327px] h-[200px]  mt-5 ">
            <h2 className="text-2xl text-[#444444;] m-2">آموزش رایگان </h2>
            <h2 className="text-2xl text-[#444444;] m-2"> مشاوره رایگان </h2>
            <h3 className="text-2xl text-[#444444;] m-2"> فرصت های شغلی </h3>
          </div>
        </div>

        <div className="w-[300px] h-[142px] mt-20">
          <h1 className="font-inter text-3xl text-[#444444;]">آموزشگاه </h1>
          <div className="w-[327px] h-[200px]  mt-5 ">
            <h2 className="text-2xl text-[#444444;] m-2"> درباره ما </h2>
            <h2 className="text-2xl text-[#444444;] m-2"> ارتباط با ما </h2>
            <h3 className="text-2xl text-[#444444;] m-2"> قوانین پژوهشگاه </h3>
          </div>
        </div>

        <div className="flex justify-start flex-wrap w-[700px] h-[142px] mt-20">
          <h1 className="text-2xl text-[#444444;] m-2"> اخبار آموزشگاه </h1>
          <h2 className="text-2xl text-[#444444;] m-2 text-right">
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

          <button className=" bg-[#41A789;] relative top-3 text-[#ffffff] w-24 rounded-l-lg">
            {" "}
            ثبت{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;

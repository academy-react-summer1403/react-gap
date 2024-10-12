import React from "react";

const NewsBar = () => {
  return (
    <div className="flex  justify-center w-screen  flex-wrap">
      <h1 className=" relative mt-[20px] text-4xl "> لیست اخبار و مقالات </h1>

      <div className=" border-2 h-[130px] w-[90%] bg-[#FBF6F6] rounded-3xl -mr-[0px] mt-[60px] ">
        <button className="border-2 h-[60px] w-[140px] rounded-3xl border-color:[#158B68] bg-[#ffff] relative mt-[60px] mr-[80px]">
          {" "}
        </button>
        <button className="border-2 border-color:[#158B68] h-[60px] w-[140px] rounded-3xl bg-[#ffff] relative ">
          {" "}
          مرتب سازی
        </button>
        <input className="border-2 h-[40px] w-[440px] border-color:[#158B68] bg-[#ffff] relative mr-[80px] ms-[490px]" />
      </div>
    </div>
  );
};

export default NewsBar;

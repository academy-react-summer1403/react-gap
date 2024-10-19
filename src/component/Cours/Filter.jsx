import React from "react";

const Filter = () => {
  return (
    <div className="">
      <h1 className="text-center text-xl relative"> فیلترها </h1>
      <ul className="mt-9 transition list-none">
        <div className="text-start  mb-[10px] mr-[30px] text-lg font-normal">
          {" "}
          تکنولوژی
          <li className="relative m-[15px 0] overflow-hidden transition">
            <div className="text-right mr-[30px]">
              <input type="radio" name="ca" />
              <lable className="text-center text-[14px] indent-1 inline-block">
                <span className="mr-[10px] font-normal "> حضوری </span>
              </lable>
            </div>

            <div className="text-right mr-[30px]">
              <input type="radio" name="ca" />
              <lable className="text-center text-[14px] inline-block ">
                <span className="mr-[10px] font-normal "> آنلاین </span>
              </lable>
            </div>

            <div className="text-right mr-[30px]">
              <input type="radio" name="ca" />
              <lable className="text-center text-[14px] inline-block ">
                <span className="mr-[10px] font-normal "> آنلاین-حضوری</span>
              </lable>
            </div>
          </li>
        </div>
        <div className="border w-[80%] relative mr-[18px] mb-[10px] border-[#5BE1B9]"></div>
        <div className="  text-right mr-[30px] text-lg font-normal ">
          {" "}
          نوع برگزاری
          <div className=" flex flex-col border border-[#5BE1B9] h-[100px] w-[95%] -mr-[20px] mt-[10px] rounded-2xl">
            <div className="text-right mr-[30px]">
              <input type="radio" name="ca" />
              <lable className="text-center text-[14px] indent-1 inline-block">
                <span className="mr-[10px] font-normal "> حضوری </span>
              </lable>
            </div>

            <div className="text-right mr-[30px]">
              <input type="radio" name="ca" />
              <lable className="text-center text-[14px] inline-block ">
                <span className="mr-[10px] font-normal "> آنلاین </span>
              </lable>
            </div>

            <div className="text-right mr-[30px]">
              <input type="radio" name="ca" />
              <lable className="text-center text-[14px] inline-block ">
                <span className="mr-[10px] font-normal "> آنلاین-حضوری</span>
              </lable>
            </div>
          </div>
        </div>

        <div className="text-start  mb-[10px] mr-[30px] text-lg font-normal">
          {" "}
          سطح دوره{" "}
        </div>
        <div className="border w-[80%] relative mr-[18px] mb-[10px] border-[#5BE1B9]"></div>

        <div className="text-start mb-[10px] mr-[30px] text-lg font-normal ">
          {" "}
          قیمت{" "}
        </div>
        <div className="border w-[80%] relative mr-[18px] mb-[10px] border-[#5BE1B9]"></div>

        <button className="h-[30px] w-[100px] rounded-[5px]  bg-[#5BE1B9] relative mr-[80px] mb-[90px]">
          <spn className="font-sans my-0.5 text-xs font-normal py-px-[20px] ">
            پاک کردن فیلترها{" "}
          </spn>
        </button>
      </ul>
    </div>
  );
};

export default Filter;

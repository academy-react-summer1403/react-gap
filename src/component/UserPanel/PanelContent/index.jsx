import React from "react";

const index = () => {
  return (
    <div className="flex flex-wrap justify-center w-[74%] h-[1000px] mr-[350px] -mt-[58%]">
      <div className="flex flex-wrap justify-center gap-3 w-[98%] h-40 mt-9">
        <div className="border-2 border-red-600 w-[68%] "></div>
        <div className="border-2 border-green-800 w-[30%] "></div>
      </div>

      <div className="flex gap-3 w-[98%] h-[72%]">
        <div className="border-2 border-red-600 w-[50%] h-[98%]"></div>

        <div className="flex flex-wrap gap-2 w-[50%] h-[98%]">
          <div className="border-2 border-violet-800 w-[100%] h-[65%]"></div>
          <div className="flex gap-3 w-[100%] h-[35%] mt-9">
            <div className=" w-[30%] h-[80%] shadow-xl shadow-gray-400 rounded-xl">
              <div className="w-[80%] h-[70%] mx-auto mt-8">
                <div
                  className="radial-progress "
                  style={{ "--value": 90 }}
                  role="progressbar"
                >
                  90%
                </div>{" "}
                <h1 className="text-center leading-9">درصد تکمیل پروفایل</h1>
              </div>
            </div>
            <div className="border-2 border-blue-600 w-[70%] h-[80%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

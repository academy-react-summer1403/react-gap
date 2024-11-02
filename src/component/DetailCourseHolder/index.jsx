import { div } from "framer-motion/client";
import React from "react";

const index = () => {
  return (
    <div className="border-2 w-[100%] h-[900px]">
      <div className="w-[80%] h-[400px] mx-auto mt-10 bg-white rounded-lg shadow-xl">
        <div className="w-[100%] h-[340px] rounded-lg flex">
          <div className=" w-[60%] h-[95%]">
            <div className="w-[95%] h-[50%] mt-8 mx-auto">
              <h1 className="text-3xl font-bold text-slate-700">آموزش CSS</h1>
              <br />
              <p className="text-gray-400">
                آموزش کامل CSS به صورت کامل و البته رایگان هدفی‌ست که ما در این
                دوره آموزشی دنبال می‌کنیم. شما
                <br />
                 با مشاهده کامل این دوره یاد
               
                خواهید گرفت که در صفحات وبسایت خود از ویژگی‌های مختلف CSS
                <br />
                استفاده کنید.
              </p>
            </div>
            <div className="w-[100%] h-[30%] border-2 flex">
            <button className="btn btn-info"></button>
            <button className="btn btn-info">Info</button>
            </div>
          </div>
          <div className="w-[40%] h-[95%] border-r-2">
            <img
              src=""
              alt=""
              className="w-[80%] h-[80%] border-2 mx-auto mt-6"
            />
          </div>
        </div>
        <div className="w-[100%] h-[60px] border-2"></div>
      </div>
    </div>
  );
};

export default index;

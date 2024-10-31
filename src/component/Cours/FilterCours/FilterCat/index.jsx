import React from "react";

const App = () => (
  <div className=" -mr-3 w-[100%]  h-[200px] mx-auto">
    <div className=" flex flex-wrap justify-center border-2 bg-[#fff]  w-[90%] h-24 mr-5 ">
      <h1 className=" mt-7 ml-6 font-bold"> دوره‌های جاری </h1>
      <input type="checkbox" className="toggle mt-7" defaultChecked />
      <h2 className="mt-7 mr-6 font-bold text-[#ccc]">آرشیو شده </h2>
    </div>

    <div className=" border-2 w-[90%] h-[300px] flex flex-wrap  mr-5 mt-5 bg-[#fff]">
      <h1 className=" mt-7 mr-8 font-bold text-xl "> نوع دوره </h1>

      <div className="block ml-72">
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">جاوا </span>
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-blue-600"
              defaultChecked
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text"> ریکت</span>
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-blue-500"
              defaultChecked
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">ویو </span>
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-blue-600"
              defaultChecked
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">جاوااسکریپت </span>
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-blue-600"
              defaultChecked
            />
          </label>
        </div>
      </div>
    </div>
  </div>
);
export default App;

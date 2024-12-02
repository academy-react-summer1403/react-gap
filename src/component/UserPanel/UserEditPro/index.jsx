import React from "react";

const index = () => {
  return (
   
    <div>
      <div className="border-2 border-green-700 w-[40%] dark:bg-[#22445D;] mr-[50%]">
        <div className="border-b-2 h-[40px] w-[55%] mx-auto mt-4 font-sans text-xl dark:bg-[#22445D;]">
          <h1 className=" dark:text-white">ویرایش اطلاعات</h1>
        </div>
        <div className=" flex flex-wrap gap-9 h-[500px] w-[70%] mx-auto mt-9">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text dark:text-white"> نام</span>
            </div>
            <input
              type="text"
              placeholder=" اینجا بنویس"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label"></div>
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text  dark:text-white">
                {" "}
                نام خانوادگی{" "}
              </span>
            </div>
            <input
              type="text"
              placeholder=" اینجا بنویس"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label"></div>
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text  dark:text-white"> شماره </span>
            </div>
            <input
              type="text"
              placeholder=" اینجا بنویس"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label"></div>
          </label>

          <label className="form-control w-full max-w-xs mb-80">
            <div className="label">
              <span className="label-text  dark:text-white"> ایمیل </span>
            </div>
            <input
              type="text"
              placeholder=" اینجا بنویس"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label"></div>
          </label>
        </div>

        <button className="btn btn-primary mr-[900px] relative bottom-40">
          ثبت اطلاعات
        </button>
      </div> 
    </div>
  );
};

export default index;

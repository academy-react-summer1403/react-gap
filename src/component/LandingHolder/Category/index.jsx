import axios from "axios";
import React, { useEffect, useState } from "react";

const index = () => {
  const [CoursTechList, setCoursTechList] = useState(null);

  const GetCoursTech = async () => {
    const res = await axios.get(
      "https://classapi.sepehracademy.ir/api/Home/GetTechnologies"
    );
    setCoursTechList(res.data);
  };

  useEffect(() => {
    GetCoursTech();
  }, []);

  return (
    <div className="">
      <div>
        <div className="h-[100px]  text-center m-20">
          <h1 className="text-[#22445D;] text-4xl"> دسته بندی </h1>

          <p className="text-[#22445D;] text-2xl font-normal mt-3">
            {" "}
            ما فرصت آماده شدن برای زندگی را فراهم می کنیم{" "}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center w-[90%] mx-auto gap-[40px]">
        {CoursTechList?.map((item) => {
          return (
            <div className=" flex flex-col items-center w-full sm:w-[40%] lg:w-[20%] rounded-xl bg-[#FBF6F6;] shadow-2xl hover:scale-75 duration-75">
              <div className=" w-[20%] mt-10">
                <img src="./cat1.png" alt="" />
              </div>
              <div className="w-full my-10">
                <h1 className="text-[#22445D;] text-center">
                  {" "}
                    {item.techName}
                </h1>
              </div>
              <div className="w-[90%] text-center mb-10">
                <h2 className="text-[#22445D;]"> {item.describe}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default index;

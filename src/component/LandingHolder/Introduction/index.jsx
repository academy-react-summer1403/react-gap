import axios from "axios";
import React, { useEffect, useState } from "react";

const index = () => {
  const [TopTeacher, setTTopTeacher] = useState(null);

  const getTopTeacher = async () => {
    const res = await axios.get(
      "https://classapi.sepehracademy.ir/api/Home/GetTeachers"
    );
    setTTopTeacher(res.data);
  };

  useEffect(() => {
    getTopTeacher();
  }, []);
  return (
    <div className="w-auto  flex flex-wrap justify-center gap-1 bg-[#FFFF] mt-8 dark:bg-[#22445D] max-sm:bg-slate-100">
      <div className=" w-[25%] h-[450px] ml-56  max-sm:w-[100%]  max-sm:mr-64 max-sm:mt-[1200px]">
        <button className="btn no-animation bg-[#EFEEFE] text-[#5751E1] relative top-6 right-6 rounded-3xl
         hover:bg-[#5751E1] hover:text-[#ffff]">
          اساتید حرفه ای کد دات{" "}
        </button>
        <h1 className="relative top-10 right-6 font-bold text-2xl ">
          کلاس برتر ما{" "}
        </h1>
        <h1 className="relative top-10 right-6 font-bold text-2xl">
          و مربیان خبره در یک مکان
        </h1>
        <div className="div">
          <p className="w-[80%] h-[10%] relative top-16 right-6 text-xs max-sm:mt-[0pc]">
            نوشتن کار جالبیه که از هزاران سال همراه ما بوده و کمک کرده تا همیشه
            به روز باشیم، ما در راکت فضای رو به شکلی آماده کردیم تا شما بتونید
            ایده‌ها و مطالب جالب حوزه برنامه‌نویسی رو در اختیار هزاران
            برنامه‌نویس عضو کد دات قرار بدید.
          </p>
        </div>
        <button className="btn no-animation  w-48 h-8 hover:bg-[#2b2a44] bg-[#5751E1] text-white relative top-24 right-6 rounded-3xl">
          همه مربیان را ببینید
        </button>
      </div>
      <div className="border- flex flex-wrap justify-center w-[45%] h-[450px] relative left-10 mt-5">
        {TopTeacher?.map((item) => {
          return (
            <div className="w-1/2 h-1/2 max-sm:w-96">
              <div className="w-1/2 rounded-full bg-[#F7F7F9] max-sm:w-[90%] ">
                <img
                  className="rounded-full"
                  src={item.pictureAddress}
                  alt="img"
                />
              </div>
              <h1 className=" text-xs font-bold relative bottom-24 right-48">
                {item.fullName}
              </h1>

              <h1 className=" text-xs relative bottom-24 right-48 text-[#5751E1]">
                {item.linkdinProfileLink}
              </h1>
              <div className=" shadow border-2 w-8 h-8 rounded-full relative bottom-20 right-44 max-sm:ml-8">
                <img
                  className="relative top-1 right-[5px]"
                  src="./instagram.png"
                  alt="img"
                />
              </div>

              <div className=" shadow border-2 w-8 h-8 rounded-full relative bottom-28 right-[210px] ">
                <img
                  className="relative top-1 right-[5px]"
                  src="./whatsup.png"
                  alt="img"
                />
              </div>

              <div className=" shadow border-2 w-8 h-8 rounded-full relative bottom-36 right-[248px] ">
                <img
                  className="relative top-1 right-[5px]"
                  src="./twitter.png"
                  alt="img"
                />
              </div>

              <div className=" shadow border-2 w-8 h-8 rounded-full relative bottom-44 right-[285px] ">
                <img
                  className="relative top-1 right-[5px]"
                  src="./facebook.png"
                  alt="img"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default index;

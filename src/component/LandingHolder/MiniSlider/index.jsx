import React, { useState } from "react";
// Import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// Import swiper styles
import "swiper/css";
//Import swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const index = () => {
  const [SliderCourses, setSliderCourses] = useState([
    {
      id: 1,
      title: "دوره های پایتون ",
    },
  ]);

  return (
    <div>
      <div className=" flex flex-wrap justify-center mt-14  mr-2 w-[98%] h-[100px] gap-7 ">
        <div className=" mt-3 w-[100%] h-[70px]">
          {SliderCourses.map((item) => {
            return (
              <div className="">
                <Swiper
                  className=" w-[95%] h-[70px]"
                  //install swiper modules
                  modules={[Navigation, A11y]}
                  spaceBetween={6}
                  slidesPerView={3}
                  navigation
                >
                  
                  <SwiperSlide>
                    <div className="border-2 w-[90%] h-[60px] mr-16  bg-[#ffff] shadow-md rounded-md">
                      <h1 className="text-center mt-4 dark:text-black">دوره توسعه وب</h1>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="border-2 text-center w-[90%] h-[60px] mr-16  bg-[#ffff] rounded-md shadow-md">
                      <h1 className="text-center mt-4 dark:text-black">دوره های فرانت اند</h1>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="border-2 rounded-md text-center w-[90%] h-[60px] mr-16  bg-[#ffff] shadow-md">
                      <h1 className="text-center mt-4 dark:text-black">دوره های بک اند</h1>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="border-2 rounded-md text-center w-[90%] h-[60px] mr-16  bg-[#ffff] shadow-md">
                      <h1 className="text-center mt-4 dark:text-black">دوره های توسعه وب</h1>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="border-2 rounded-md text-center w-[90%] h-[60px] mr-16  bg-[#ffff] shadow-md">
                      <h1 className="text-center mt-4 dark:text-black">
                        دوره های مبانی برنامه نویسی
                      </h1>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="border-2 rounded-md text-center w-[90%] h-[60px] mr-16  bg-[#ffff] shadow-md">
                      <h1 className="text-center mt-4 dark:text-black">
                        دوره های برنامه‌نویسی موبایل
                      </h1>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="border-2 rounded-md text-center w-[90%] h-[60px] mr-16  bg-[#ffff] shadow-md">
                      <h1 className="text-center mt-4 dark:text-black">
                        دوره های جاوا اسکریپت
                      </h1>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="border-2 rounded-md text-center w-[90%] h-[60px] mr-16  bg-[#ffff] shadow-md">
                      <h1 className="text-center mt-4 dark:text-black">دوره های امنیت شبکه</h1>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="border-2 rounded-md text-center w-[90%] h-[60px] mr-16  bg-[#ffff] shadow-md">
                      <h1 className="text-center mt-4 dark:text-black">دوره های توسعه بازی</h1>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default index;

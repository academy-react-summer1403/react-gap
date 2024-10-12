import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// some-inner-component.jsx

import { useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = () => {
  const [ListSlider, setListSlider] = useState([
    { id: 1, name: "آشنایی با برنامه نویسی با وردپرس", status: "", icon: "" },
  ]);

  return (
    <div className="h-[900px]">
      <div className="  h-[100px]  text-center m-20">
        <h1 className="text-[#22445D;] text-4xl"> دوره های ما </h1>

        <p className="text-[#22445D;] text-2xl font-normal mt-2">
          {" "}
          ساختن دنیایی بهتر، یک دوره در یک زمان{" "}
        </p>

        <div className=" w-[98%] h-[800px] mx-auto m-10">
          {ListSlider.map((item) => {
            return (
              <div>
                <Swiper
                  // install Swiper modules
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={50}
                  slidesPerView={3}
                  navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                >
                  <SwiperSlide>
                    <div className="flex flex-wrap border-2 border-blue-950 w-[98%] h-[600px] rounded-3xl ">
                      <div className="border-2 border-black w-[150px] h-[150px] relative ">
                        <img src="" alt="" />
                      </div>
                      <div className="border-2 border-black w-[80%] h-[70%] mx-auto">
                        <div className=""></div>
                        <div>{item.name}</div>
                        <div>{item.icon}</div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="border-2 border-blue-950 w-[98%] h-[600px] rounded-3xl shadow-md	">
                      <div>{item.name}</div>
                      <div>{item.icon}</div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="border-2 border-blue-950 w-[98%] h-[600px] rounded-3xl shadow-md	"></div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="border-2 border-blue-950 w-[98%] h-[600px] rounded-3xl shadow-md	"></div>
                  </SwiperSlide>
                  ...
                </Swiper>
              </div>
            );
          })}
        </div>
      </div>
      <button className="bg-[#12926C;] w-[350px] h-[90px] relative top-[600px] right-[700px] rounded-full">
        <h1 className="text-2xl text-[#fff]">مشاهده مقالات بیشتر</h1>
      </button>
    </div>
  );
};

export default Slider;

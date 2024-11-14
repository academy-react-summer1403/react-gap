import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import axios from "axios";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// some-inner-component.jsx
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { NavLink } from "react-router-dom";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineFavoriteBorder } from "react-icons/md";

const index = () => {
  const [TopSliderList, setTopSliderList] = useState(null);

  const getTopSliderList = async () => {
    const res = await axios.get(
      "https://classapi.sepehracademy.ir/api/Home/GetCoursesTop?Count=5"
    );
    setTopSliderList(res.data);
  };

  useEffect(() => {
    getTopSliderList();
  }, []);

  return (
    <div className="w-[100%] h-[800px] mb-4 bg-[#f6f8f9] to-[rgb(246,248,249)]">
      <h1 className="text-center text-xl text-[rgb(93,134,210)] -mb-5">
        با آموزش‌های برنامه نویسی کد دات، برنامه‌نویسی را یک بار و برای همیشه
        یاد بگیر.
      </h1>
      <p className="text-center text-sm text-[rgb(4,10,10)] mt-6">
        همون طور که تا حالا هزاران نفر از مخاطبین کد دات تونستن این کارو انجام
        بدن.
      </p>

      <div className=" w-20 h-72 mt-36">
        <img src="./sidphoto2.png" alt="img" />
      </div>

      <div className=" w- h-72 mr-[95%] -mt-[450px]">
        <img src="./sidphoto.png" alt="img" />
      </div>

      <div className="h-[1100px]">
        <div className=" h-[150px]  text-center m-20">
          <div className=" w-[100%] -mt-96 ">
            <div className=" h-[700px]">
              <Swiper
                className="h-[480px] relative top-20 "
                // install Swiper modules
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={4}
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                {TopSliderList?.map((item) => {
                  return (
                    <SwiperSlide className="w-[98%] h-[100%]">
                      <div className="card bg-base-100 w-[100%] h-[100%] shadow-xl dark:bg-[#080d12]">
                        <div className="w-[100%] h-[100%]">
                          <div className=" w-[100%] ">
                            <img
                              src="./Lastimg.jpg"
                              className="w-[90%] h-[100%] mx-3 relative bottom-5 rounded-2xl"
                              alt=""
                            />
                          </div>
                          <figure>
                            {/* <img
                            src={item.tumbImageAddress}
                            className="rounded-2xl"
                            alt="Shoes"
                          /> */}
                          </figure>
                        </div>

                        <div className="card-body  mb-16 ">
                          <h2 className="card-title text-xs text-pink-600  dark:text-white">
                            {item.statusName}
                            <div className="badge badge-secondary">جدید</div>
                          </h2>
                          <div className="text-start text-sm"> نام استاد :
                            {item.teacherName}
                          </div>

                          <div className="card-actions justify-end mt-4">
                            {/* <NavLink to={"/courses"}>
                              <div className="badge badge-outline p-5 ml-14 hover:bg-[#41d3a7] hover:border-none   dark:text-white ">
                                {item.statusName}
                              </div>
                            </NavLink> */}

                            <div className="badge badge-outline p-5 hover:bg-pink-600  hover:border-none   dark:text-white">
                              {item.likeCount}
                              <AiOutlineLike />
                            </div>
                            <div className="badge badge-outline p-5 hover:bg-pink-600  hover:border-none  dark:text-white">
                              {item.dissLikeCount}
                              <AiOutlineDislike />
                              
                            </div>
                            <div className="badge badge-outline p-5 hover:bg-pink-600  hover:border-none  dark:text-white">
                              {/* {item.userFavoriteId} */}
                            <MdOutlineFavoriteBorder className="" />
                            </div>
                            
                            
                          </div>

                          <div className="">
                            <div className="avatar  flex">
                              {/* <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring ring-offset-2  dark:text-white">
                                <img src="" />
                              </div> */}
                              <h1 className=" leading-10 text-start text-[#ac3d85]   dark:text-white">
                                {item.typeName}
                              </h1>
                            </div>
                          </div>

                          
                          <div>
                            <p className="mt-30 text-right text-[#908A7A;]   dark:text-white">
                              
                            </p>
                          </div>
                          <div className="border-t-2 border-[#158B68]">
                            <h1 className="text-xl text-[#807A7A;] leading-10 hover:text-[#296c58]   dark:text-white">
                              مشاهده جزییات
                            </h1>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
                ...
              </Swiper>
            </div>
          </div>
        </div>
        <NavLink to={"/News"}></NavLink>
      </div>
    </div>
  );
};

export default index;

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
import { NavLink } from "react-router-dom";

import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa";
import { MdStarRate } from "react-icons/md";

const Article = () => {
  const [ListSlider, setListSlider] = useState([
    {
      id: 1,
      pic: "iconslider.png",
      button: "وضعیت دوره",
      Like: "./Like.png",
      title: "آشنایی با برنامه نویسی با وردپرس",
      jun: "./Group .png",
      mit: "50 سخنرانی (190 ساعت)",
      Desc: "لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود",
      Price: "3000 هزار تومان",
      Sign: "الان ثبت نام کن",
    },
  ]);

  return (
    <div className="  h-[1100px] ">
      <div className="   h-[150px]  text-center m-20 ">
        <h1 className="text-[#22445D;] text-4xl"> دوره های ما </h1>

        <p className="text-[#22445D;] text-2xl font-normal mt-2">
          {" "}
          ساختن دنیایی بهتر، یک دوره در یک زمان{" "}
        </p>

        <div className=" w-[98%] mx-auto m-10">
          {ListSlider.map((item) => {
            return (
              <div className=" h-[900px]">
                <Swiper
                  className="h-[700px] relative top-20 "
                  // install Swiper modules
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={50}
                  slidesPerView={3}
                  navigation
                  pagination={{ clickable: true }}
                
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                >
                  <SwiperSlide className="w-[98%] h-[100%]">
                    <div className="card bg-base-100 w-[100%] h-[100%] shadow-xl">
                      <div className="w-[100%] h-[100%]">
                        <figure>
                          <img src="./pic1.png" alt="Shoes" />
                        </figure>
                      </div>

                      <div className="  card-body" shadow-xl>
                        <h2 className="card-title mb-14">
                          آشنایی با برنامه نویسی با وردپرس
                          <div className="badge badge-secondary">NEW</div>
                        </h2>

                        <div className="card-actions justify-end ">
                        <NavLink to={'/courses'}>
                         <div className="badge badge-outline p-5 ml-14 hover:bg-[#41d3a7] hover:border-none ">

                            وضعیت دوره
                          </div>  
                        </NavLink>
                         
                          <div className="badge badge-outline p-5 hover:bg-[#41d3a7]  hover:border-none">
                            <AiOutlineLike />
                          </div>
                          <div className="badge badge-outline p-5 hover:bg-[#41d3a7]  hover:border-none">
                            <AiOutlineDislike />
                          </div>
                          <div className="badge badge-outline p-5 hover:bg-[#41d3a7]  hover:border-none">
                            <FaRegStar />
                          </div>
                        </div>

                        <div className="mt-10">
                          <div className="avatar ml-52 flex">
                            <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring ring-offset-2">
                              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                            <h1 className="mr-11 leading-10 text-[#809A7A;]">
                              جان اسمیت
                            </h1>
                          </div>
                        </div>
                        <div>
                          <p className="mt-30 text-right text-[#908A7A;]">
                            لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی
                            است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان
                            استفاده می شود{" "}
                          </p>
                        </div>
                        <div className="border-t-2 border-[#158B68]">
                          <h1 className="text-xl text-[#807A7A;] leading-10 hover:text-[#296c58] ">
                            مشاهده جزییات
                          </h1>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="w-[98%] h-[100%]">
                    <div className="card bg-base-100 w-[100%] h-[100%] shadow-xl">
                      <div className="w-[100%] h-[100%]">
                        <figure>
                          <img src="./pic1.png" alt="Shoes" />
                        </figure>
                      </div>

                      <div className="card-body" shadow-xl>
                        <h2 className="card-title mb-14">
                          آشنایی با برنامه نویسی با وردپرس
                          <div className="badge badge-secondary">NEW</div>
                        </h2>

                        <div className="card-actions justify-end ">
                        <NavLink to={'/courses'}>
                         <div className="badge badge-outline p-5 ml-14 hover:bg-[#41d3a7] hover:border-none ">

                            وضعیت دوره
                          </div>  
                        </NavLink>
                         
                          <div className="badge badge-outline p-5 hover:bg-[#41d3a7]  hover:border-none">
                            <AiOutlineLike />
                          </div>
                          <div className="badge badge-outline p-5 hover:bg-[#41d3a7]  hover:border-none">
                            <AiOutlineDislike />
                          </div>
                          <div className="badge badge-outline p-5 hover:bg-[#41d3a7]  hover:border-none">
                            <FaRegStar />
                          </div>
                        </div>

                        <div className="mt-10">
                          <div className="avatar ml-52 flex">
                            <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring ring-offset-2">
                              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                            <h1 className="mr-11 leading-10 text-[#809A7A;]">
                              جان اسمیت
                            </h1>
                          </div>
                        </div>
                        <div>
                          <p className="mt-30 text-right text-[#908A7A;]">
                            لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی
                            است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان
                            استفاده می شود{" "}
                          </p>
                        </div>
                        <div className="border-t-2 border-[#158B68]">
                          <h1 className="text-xl text-[#807A7A;] leading-10 hover:text-[#296c58] ">
                            مشاهده جزییات
                          </h1>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="w-[98%] h-[100%]">
                    <div className="card bg-base-100 w-[100%] h-[100%] shadow-xl">
                      <div className="w-[100%] h-[100%]">
                        <figure>
                          <img src="./pic1.png" alt="Shoes" />
                        </figure>
                      </div>

                      <div className="card-body" shadow-xl>
                        <h2 className="card-title mb-14">
                          آشنایی با برنامه نویسی با وردپرس
                          <div className="badge badge-secondary">NEW</div>
                        </h2>

                        <div className="card-actions justify-end ">
                        <NavLink to={'/courses'}>
                         <div className="badge badge-outline p-5 ml-14 hover:bg-[#41d3a7] hover:border-none ">

                            وضعیت دوره
                          </div>  
                        </NavLink>
                         
                          <div className="badge badge-outline p-5 hover:bg-[#41d3a7]  hover:border-none">
                            <AiOutlineLike />
                          </div>
                          <div className="badge badge-outline p-5 hover:bg-[#41d3a7]  hover:border-none">
                            <AiOutlineDislike />
                          </div>
                          <div className="badge badge-outline p-5 hover:bg-[#41d3a7]  hover:border-none">
                            <FaRegStar />
                          </div>
                        </div>

                        <div className="mt-10">
                          <div className="avatar ml-52 flex">
                            <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring ring-offset-2">
                              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                            <h1 className="mr-11 leading-10 text-[#809A7A;]">
                              جان اسمیت
                            </h1>
                          </div>
                        </div>
                        <div>
                          <p className="mt-30 text-right text-[#908A7A;]">
                            لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی
                            است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان
                            استفاده می شود{" "}
                          </p>
                        </div>
                        <div className="border-t-2 border-[#158B68]">
                          <h1 className="text-xl text-[#807A7A;] leading-10 hover:text-[#296c58] ">
                            مشاهده جزییات
                          </h1>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="w-[98%] h-[100%]">
                    <div className="card bg-base-100 w-[100%] h-[100%] shadow-xl">
                      <div className="w-[100%] h-[100%]">
                        <figure>
                          <img src="./pic1.png" alt="Shoes" />
                        </figure>
                      </div>

                      <div className="card-body" shadow-xl>
                        <h2 className="card-title mb-14">
                          آشنایی با برنامه نویسی با وردپرس
                          <div className="badge badge-secondary">NEW</div>
                        </h2>

                        <div className="card-actions justify-end ">
                        <NavLink to={'/courses'}>
                         <div className="badge badge-outline p-5 ml-14 hover:bg-[#41d3a7] hover:border-none ">

                            وضعیت دوره
                          </div>  
                        </NavLink>
                         
                          <div className="badge badge-outline p-5 hover:bg-[#41d3a7]  hover:border-none">
                            <AiOutlineLike />
                          </div>
                          <div className="badge badge-outline p-5 hover:bg-[#41d3a7]  hover:border-none">
                            <AiOutlineDislike />
                          </div>
                          <div className="badge badge-outline p-5 hover:bg-[#41d3a7]  hover:border-none">
                            <FaRegStar />
                          </div>
                        </div>

                        <div className="mt-10">
                          <div className="avatar ml-52 flex">
                            <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring ring-offset-2">
                              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                            <h1 className="mr-11 leading-10 text-[#809A7A;]">
                              جان اسمیت
                            </h1>
                          </div>
                        </div>
                        <div>
                          <p className="mt-30 text-right text-[#908A7A;]">
                            لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی
                            است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان
                            استفاده می شود{" "}
                          </p>
                        </div>
                        <div className="border-t-2 border-[#158B68]">
                          <h1 className="text-xl text-[#807A7A;] leading-10 hover:text-[#296c58] ">
                            مشاهده جزییات
                          </h1>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  ...
                </Swiper>
              </div>
            );
          })}
        </div>
      </div>
      <NavLink to={"/News"}>
        <button className="bg-[#12926C;] w-[350px] h-[90px] relative top-[720px] right-[700px] rounded-full  hover:scale-75 duration-75">
          <h1 className="text-2xl text-[#fff]">مشاهده مقالات بیشتر</h1>
        </button>
      </NavLink>
    </div>
  );
};

export default Article;

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
    {id:1, name:'item 1', title:'آشنایی با برنامه نویسی با وردپرس', price:'300000 تومان', desc:'', pic:'./icons8.png' , icon:'./icons9.png' , star:'./icons10.png'},
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
                    <div className='border-2 border-red-500 w-[100px] h-[100px] mt-[-60px] mr-[70px]'>
                    <img  src={item.pic} alt="" className='icons8.png'/>
                    </div>

                    <div className='h-[28px] w-[90px] bg-[#BFF4E4] rounded-[8px] relative mr-[10px] mt-[20px]'> <span className='text-xs text-justify'>وضعیت دوره </span></div>


                    <div className=' w-[50px] h-[40px] relative mr-[180px] -mt-[30px]'>
                    <img  src={item.icon} alt="" className='icons9.png'/>
                    </div>
                    <div className='h-[32px] w-[259px] text-xl rounded-3xl mb-[80px] mr-[10px]'> آشنایی با برنامه نویسی با وردپرس </div>

                    <div className=' w-[220px] h-[40px] relative -mt-[30px] mr-[10px] '>
                    <img  src={item.star} alt="" className='icons10.png'/>
                    </div>

                    <div className='text-xs text-[#41A789] relative mr-[10px]'> 50 سخنرانی (190 ساعته )</div>

                    <div className='text-xs text-[#6D6767] relative mt-[20px] mr-[10px]'><span>لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود </span></div>
                    <div className='border w-[90%] relative mr-[18px] mt-[10px] border-[#5BE1B9]'></div>
                    
                    <div className='text-[14px] text-[#12926C] relative mt-[10px] mr-[10px]'>: هزینه تمام دوره </div>
                    <div className='text-[14px] text-[#E11818] relative -mt-[10px] mr-[145px]'> 3.000.000 </div>
                    <div className='text-[14px] text-[#E11818] relative -mt-[20px] mr-[210px]'> تومان </div>

                    <button className='border-2 border-[#5BE1B9] h-[40px] w-[100px] bg-[#ffff] rounded-[8px] relative mr-[10px] mt-[20px]'> جزئیات دوره </button>
                    <button className='border-2 border-[#5BE1B9] h-[40px] w-[100px] bg-[#5BE1B9] rounded-[8px] relative mr-[10px] mt-[20px]'>  رزرو دوره </button>

                   

                      {/* <div className="w-[100%] h-[70%] border-2">
                        <div className="border-2 border-black w-[150px] h-[150px]  relative bottom-2 right-36 ">
                        <img src="" alt="" />
                      </div>
                      <div className="border-2 border-black w-[100%] h-[100%] mx-auto">
                        <div className=""></div>
                        <div>{item.name}</div>
                        <div>{item.icon}</div>
                      </div> 
                      </div> */}
                     
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

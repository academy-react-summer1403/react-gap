import React, { useState } from "react";
// Import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// Import swiper styles
import "swiper/css";

//Import swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
//some-inner-component.jsx
import { useSwiper } from "swiper/react";
//Import Swiper styles
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { IoStarOutline } from "react-icons/io5";
import { TbNumber5 } from "react-icons/tb";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { NavLink } from "react-router-dom";

const Articles = () => {
  const [Slider, setSlider] = useState([
    {
      id: 1,
      pic: "pic1.png",
      button: "وضعیت دوره",
      title: "اشنایی با برنامه نویسی با وردپرس",
      star: "./star1.png",
      desc: "لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود ",
      detail: "مشاهده جزئیات",
    },
  ]);


  return (
    <div className='h-[1100px]' >

  <div className="w-[90%] h-[120px] mt-[110px] mr-[310px] animate-bounce ">
  <div className="text-5xl text-center sm:w-3/4 ">
    <h1>اخبار و مقالات مشابه</h1>
  </div>

  <div className="text-3xl text-center mt-[20px] animate-pulse sm:w-3/4">
    <p>ساختن دنیایی بهتر، یک دوره در یک زمان </p>
  </div>
  </div>

  <div className='w-[98%] mx-auto m-10 '>

    {Slider.map((item) =>{
      return(
        <div className=" h-[810px]">
          <Swiper className='w-[95%] h-[700px] relative top-20'

          //install swiper modules
          modules={[Navigation, A11y]}
          spaceBetween={5}
          slidesPerView={3}
          navigation
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          >

            <SwiperSlide className=''>
              <div className='shadow-2xl w-[85%] h-[660px] mr-16 rounded-3xl bg-[#FBF6F6] z-0'>


              <div className=" w-[100%] h-[250px]   ">
                    <img src={item.pic} alt="" />
                  </div>

                  <button className="h-11 w-32 bg-[#BFF4E4] rounded-[8px] relative mr-4 mt-14 animate-pulse">
                    {item.button}
                  </button>

                  <div className=" h-10 w-96 text-start text-2xl font-sans font-normal mt-[20px] mr-[10px] animate-pulse">
                    {item.title}
                  </div>

                  <div className="flex flex-wrap">
                    <AiOutlineLike className=" w-9 h-9  relative mr-[390px] -mt-[106px] animate-bounce" />
                    <BiDislike className="w-9 h-9  relative mr-[350px] -mt-[106px] animate-pulse" />
                    <IoStarOutline className=" w-9 h-9 -mt-[106px] mr-[300px]  " />
                  </div>

                  <div>
                    <div className=" w-[400px] h-[60px] relative mt-[20px] mr-[10px] ">
                      <img src={item.star} alt="" className="star1.png" />
                    </div>

                    <TbNumber5 className="w-8 h-8 mr-[350px] -mt-[50px]" />

                    <IoStarOutline className="w-8 h-8  mr-[390px] -mt-[36px] animate-pulse" />
                  </div>

                  <div className="text-[18px] text-[#6D6767] relative mt-[30px] mr-[10px]">
                    {item.desc}
                  </div>
                  
                  <div className="border w-[90%] relative mr-[18px] mt-[20px] border-[#5BE1B9]"></div>

                  <button className=" text-[24px] text-[#807A7A] relative mr-[140px] mt-[5px]">
                    {item.detail}
                  </button>


   
            

              </div>



                
            </SwiperSlide>

            <SwiperSlide className=''>
              <div className='shadow-2xl w-[85%] h-[660px] mr-16 rounded-3xl bg-[#FBF6F6] z-0'>


              <div className=" w-[100%] h-[250px]   ">
                    <img src={item.pic} alt="" />
                  </div>

                  <button className="h-11 w-32 bg-[#BFF4E4] rounded-[8px] relative mr-4 mt-14 animate-pulse">
                    {item.button}
                  </button>

                  <div className=" h-10 w-96 text-start text-2xl font-sans font-normal mt-[20px] mr-[10px] animate-pulse">
                    {item.title}
                  </div>

                  <div className="flex flex-wrap">
                    <AiOutlineLike className=" w-9 h-9  relative mr-[390px] -mt-[106px] animate-bounce" />
                    <BiDislike className="w-9 h-9  relative mr-[350px] -mt-[106px] animate-pulse" />
                    <IoStarOutline className=" w-9 h-9 -mt-[106px] mr-[300px]  " />
                  </div>

                  <div>
                    <div className=" w-[400px] h-[60px] relative mt-[20px] mr-[10px] ">
                      <img src={item.star} alt="" className="star1.png" />
                    </div>

                    <TbNumber5 className="w-8 h-8 mr-[350px] -mt-[50px]" />

                    <IoStarOutline className="w-8 h-8  mr-[390px] -mt-[36px] animate-pulse" />
                  </div>

                  <div className="text-[18px] text-[#6D6767] relative mt-[30px] mr-[10px]">
                    {item.desc}
                  </div>
                  
                  <div className="border w-[90%] relative mr-[18px] mt-[20px] border-[#5BE1B9]"></div>

                  <button className=" text-[24px] text-[#807A7A] relative mr-[140px] mt-[5px]">
                    {item.detail}
                  </button>

   
            

              </div>



                
            </SwiperSlide>


            <SwiperSlide className=''>
              <div className='shadow-2xl w-[85%] h-[660px] mr-16 rounded-3xl bg-[#FBF6F6] z-0'>


              <div className=" w-[100%] h-[250px]   ">
                    <img src={item.pic} alt="" />
                  </div>

                  <button className="h-11 w-32 bg-[#BFF4E4] rounded-[8px] relative mr-4 mt-14 animate-pulse">
                    {item.button}
                  </button>

                  <div className=" h-10 w-96 text-start text-2xl font-sans font-normal mt-[20px] mr-[10px] animate-pulse">
                    {item.title}
                  </div>

                  <div className="flex flex-wrap">
                    <AiOutlineLike className=" w-9 h-9  relative mr-[390px] -mt-[106px] animate-bounce" />
                    <BiDislike className="w-9 h-9  relative mr-[350px] -mt-[106px] animate-pulse" />
                    <IoStarOutline className=" w-9 h-9 -mt-[106px] mr-[300px]  " />
                  </div>

                  <div>
                    <div className=" w-[400px] h-[60px] relative mt-[20px] mr-[10px] ">
                      <img src={item.star} alt="" className="star1.png" />
                    </div>

                    <TbNumber5 className="w-8 h-8 mr-[350px] -mt-[50px]" />

                    <IoStarOutline className="w-8 h-8  mr-[390px] -mt-[36px] animate-pulse" />
                  </div>

                  <div className="text-[18px] text-[#6D6767] relative mt-[30px] mr-[10px]">
                    {item.desc}
                  </div>
                  
                  <div className="border w-[90%] relative mr-[18px] mt-[20px] border-[#5BE1B9]"></div>

                  <button className=" text-[24px] text-[#807A7A] relative mr-[140px] mt-[5px]">
                    {item.detail}
                  </button>


 
   
            

              </div>



                
            </SwiperSlide>


            <SwiperSlide className=''>
              <div className='shadow-2xl w-[85%] h-[660px] mr-16 rounded-3xl bg-[#FBF6F6] z-0'>


              <div className=" w-[100%] h-[250px]   ">
                    <img src={item.pic} alt="" />
                  </div>

                  <button className="h-11 w-32 bg-[#BFF4E4] rounded-[8px] relative mr-4 mt-14 animate-pulse">
                    {item.button}
                  </button>

                  <div className=" h-10 w-96 text-start text-2xl font-sans font-normal mt-[20px] mr-[10px] animate-pulse">
                    {item.title}
                  </div>

                  <div className="flex flex-wrap">
                    <AiOutlineLike className=" w-9 h-9  relative mr-[390px] -mt-[106px] animate-bounce" />
                    <BiDislike className="w-9 h-9  relative mr-[350px] -mt-[106px] animate-pulse" />
                    <IoStarOutline className=" w-9 h-9 -mt-[106px] mr-[300px]  " />
                  </div>

                  <div>
                    <div className=" w-[400px] h-[60px] relative mt-[20px] mr-[10px] ">
                      <img src={item.star} alt="" className="star1.png" />
                    </div>

                    <TbNumber5 className="w-8 h-8 mr-[350px] -mt-[50px]" />

                    <IoStarOutline className="w-8 h-8  mr-[390px] -mt-[36px] animate-pulse" />
                  </div>

                  <div className="text-[18px] text-[#6D6767] relative mt-[30px] mr-[10px]">
                    {item.desc}
                  </div>
                  
                  <div className="border w-[90%] relative mr-[18px] mt-[20px] border-[#5BE1B9]"></div>

                  <button className=" text-[24px] text-[#807A7A] relative mr-[140px] mt-[5px]">
                    {item.detail}
                  </button>


 
   
            

              </div>



                
            </SwiperSlide>


            <SwiperSlide className=''>
              <div className='shadow-2xl w-[85%] h-[660px] mr-16 rounded-3xl bg-[#FBF6F6] z-0'>


              <div className=" w-[100%] h-[250px]   ">
                    <img src={item.pic} alt="" />
                  </div>

                  <button className="h-11 w-32 bg-[#BFF4E4] rounded-[8px] relative mr-4 mt-14 animate-pulse">
                    {item.button}
                  </button>

                  <div className=" h-10 w-96 text-start text-2xl font-sans font-normal mt-[20px] mr-[10px] animate-pulse">
                    {item.title}
                  </div>

                  <div className="flex flex-wrap">
                    <AiOutlineLike className=" w-9 h-9  relative mr-[390px] -mt-[106px] animate-bounce" />
                    <BiDislike className="w-9 h-9  relative mr-[350px] -mt-[106px] animate-pulse" />
                    <IoStarOutline className=" w-9 h-9 -mt-[106px] mr-[300px]  " />
                  </div>

                  <div>
                    <div className=" w-[400px] h-[60px] relative mt-[20px] mr-[10px] ">
                      <img src={item.star} alt="" className="star1.png" />
                    </div>

                    <TbNumber5 className="w-8 h-8 mr-[350px] -mt-[50px]" />

                    <IoStarOutline className="w-8 h-8  mr-[390px] -mt-[36px] animate-pulse" />
                  </div>

                  <div className="text-[18px] text-[#6D6767] relative mt-[30px] mr-[10px]">
                    {item.desc}
                  </div>
                  
                  <div className="border w-[90%] relative mr-[18px] mt-[20px] border-[#5BE1B9]"></div>

                  <button className=" text-[24px] text-[#807A7A] relative mr-[140px] mt-[5px]">
                    {item.detail}
                  </button>

   
            

              </div>



                
            </SwiperSlide>

            <SwiperSlide className=''>
              <div className='shadow-2xl w-[85%] h-[660px] mr-16 rounded-3xl bg-[#FBF6F6] z-0'>


              <div className=" w-[100%] h-[250px]   ">
                    <img src={item.pic} alt="" />
                  </div>

                  <button className="h-11 w-32 bg-[#BFF4E4] rounded-[8px] relative mr-4 mt-14 animate-pulse">
                    {item.button}
                  </button>

                  <div className=" h-10 w-96 text-start text-2xl font-sans font-normal mt-[20px] mr-[10px] animate-pulse">
                    {item.title}
                  </div>

                  <div className="flex flex-wrap">
                    <AiOutlineLike className=" w-9 h-9  relative mr-[390px] -mt-[106px] animate-bounce" />
                    <BiDislike className="w-9 h-9  relative mr-[350px] -mt-[106px] animate-pulse" />
                    <IoStarOutline className=" w-9 h-9 -mt-[106px] mr-[300px]  " />
                  </div>

                  <div>
                    <div className=" w-[400px] h-[60px] relative mt-[20px] mr-[10px] ">
                      <img src={item.star} alt="" className="star1.png" />
                    </div>

                    <TbNumber5 className="w-8 h-8 mr-[350px] -mt-[50px]" />

                    <IoStarOutline className="w-8 h-8  mr-[390px] -mt-[36px] animate-pulse" />
                  </div>

                  <div className="text-[18px] text-[#6D6767] relative mt-[30px] mr-[10px]">
                    {item.desc}
                  </div>
                  
                  <div className="border w-[90%] relative mr-[18px] mt-[20px] border-[#5BE1B9]"></div>

                  <button className=" text-[24px] text-[#807A7A] relative mr-[140px] mt-[5px]">
                    {item.detail}
                  </button>

   
            

              </div>



                
            </SwiperSlide>


            <SwiperSlide className=''>
              <div className='shadow-2xl w-[85%] h-[660px] mr-16 rounded-3xl bg-[#FBF6F6] z-0'>


              <div className=" w-[100%] h-[250px]   ">
                    <img src={item.pic} alt="" />
                  </div>

                  <button className="h-11 w-32 bg-[#BFF4E4] rounded-[8px] relative mr-4 mt-14 animate-pulse">
                    {item.button}
                  </button>

                  <div className=" h-10 w-96 text-start text-2xl font-sans font-normal mt-[20px] mr-[10px] animate-pulse">
                    {item.title}
                  </div>

                  <div className="flex flex-wrap">
                    <AiOutlineLike className=" w-9 h-9  relative mr-[390px] -mt-[106px] animate-bounce" />
                    <BiDislike className="w-9 h-9  relative mr-[350px] -mt-[106px] animate-pulse" />
                    <IoStarOutline className=" w-9 h-9 -mt-[106px] mr-[300px]  " />
                  </div>

                  <div>
                    <div className=" w-[400px] h-[60px] relative mt-[20px] mr-[10px] ">
                      <img src={item.star} alt="" className="star1.png" />
                    </div>

                    <TbNumber5 className="w-8 h-8 mr-[350px] -mt-[50px]" />

                    <IoStarOutline className="w-8 h-8  mr-[390px] -mt-[36px] animate-pulse" />
                  </div>

                  <div className="text-[18px] text-[#6D6767] relative mt-[30px] mr-[10px]">
                    {item.desc}
                  </div>
                  
                  <div className="border w-[90%] relative mr-[18px] mt-[20px] border-[#5BE1B9]"></div>

                  <button className=" text-[24px] text-[#807A7A] relative mr-[140px] mt-[5px]">
                    {item.detail}
                  </button>
   
            

              </div>



                
            </SwiperSlide>


            <SwiperSlide className=''>
              <div className='shadow-2xl w-[85%] h-[660px] mr-16 rounded-3xl bg-[#FBF6F6] z-0'>


              <div className=" w-[100%] h-[250px]   ">
                    <img src={item.pic} alt="" />
                  </div>

                  <button className="h-11 w-32 bg-[#BFF4E4] rounded-[8px] relative mr-4 mt-14 animate-pulse">
                    {item.button}
                  </button>

                  <div className=" h-10 w-96 text-start text-2xl font-sans font-normal mt-[20px] mr-[10px] animate-pulse">
                    {item.title}
                  </div>

                  <div className="flex flex-wrap">
                    <AiOutlineLike className=" w-9 h-9  relative mr-[390px] -mt-[106px] animate-bounce" />
                    <BiDislike className="w-9 h-9  relative mr-[350px] -mt-[106px] animate-pulse" />
                    <IoStarOutline className=" w-9 h-9 -mt-[106px] mr-[300px]  " />
                  </div>

                  <div>
                    <div className=" w-[400px] h-[60px] relative mt-[20px] mr-[10px] ">
                      <img src={item.star} alt="" className="star1.png" />
                    </div>

                    <TbNumber5 className="w-8 h-8 mr-[350px] -mt-[50px]" />

                    <IoStarOutline className="w-8 h-8  mr-[390px] -mt-[36px] animate-pulse" />
                  </div>

                  <div className="text-[18px] text-[#6D6767] relative mt-[30px] mr-[10px]">
                    {item.desc}
                  </div>
                  
                  <div className="border w-[90%] relative mr-[18px] mt-[20px] border-[#5BE1B9]"></div>

                  <button className=" text-[24px] text-[#807A7A] relative mr-[140px] mt-[5px]">
                    {item.detail}
                  </button>
              </div>



                
            </SwiperSlide>


            <SwiperSlide className=''>
              <div className='shadow-2xl w-[85%] h-[660px] mr-16 rounded-3xl bg-[#FBF6F6] z-0'>


              <div className=" w-[100%] h-[250px]   ">
                    <img src={item.pic} alt="" />
                  </div>

                  <button className="h-11 w-32 bg-[#BFF4E4] rounded-[8px] relative mr-4 mt-14 animate-pulse">
                    {item.button}
                  </button>

                  <div className=" h-10 w-96 text-start text-2xl font-sans font-normal mt-[20px] mr-[10px] animate-pulse">
                    {item.title}
                  </div>

                  <div className="flex flex-wrap">
                    <AiOutlineLike className=" w-9 h-9  relative mr-[390px] -mt-[106px] animate-bounce" />
                    <BiDislike className="w-9 h-9  relative mr-[350px] -mt-[106px] animate-pulse" />
                    <IoStarOutline className=" w-9 h-9 -mt-[106px] mr-[300px]  " />
                  </div>

                  <div>
                    <div className=" w-[400px] h-[60px] relative mt-[20px] mr-[10px] ">
                      <img src={item.star} alt="" className="star1.png" />
                    </div>

                    <TbNumber5 className="w-8 h-8 mr-[350px] -mt-[50px]" />

                    <IoStarOutline className="w-8 h-8  mr-[390px] -mt-[36px] animate-pulse" />
                  </div>

                  <div className="text-[18px] text-[#6D6767] relative mt-[30px] mr-[10px]">
                    {item.desc}
                  </div>
                  
                  <div className="border w-[90%] relative mr-[18px] mt-[20px] border-[#5BE1B9]"></div>

                  <button className=" text-[24px] text-[#807A7A] relative mr-[140px] mt-[5px]">
                    {item.detail}
                  </button>
   
            

              </div>



                
            </SwiperSlide>


            <SwiperSlide className=''>
              <div className='shadow-2xl w-[85%] h-[660px] mr-16 rounded-3xl bg-[#FBF6F6] z-0'>


              <div className=" w-[100%] h-[250px]   ">
                    <img src={item.pic} alt="" />
                  </div>

                  <button className="h-11 w-32 bg-[#BFF4E4] rounded-[8px] relative mr-4 mt-14 animate-pulse">
                    {item.button}
                  </button>

                  <div className=" h-10 w-96 text-start text-2xl font-sans font-normal mt-[20px] mr-[10px] animate-pulse">
                    {item.title}
                  </div>

                  <div className="flex flex-wrap">
                    <AiOutlineLike className=" w-9 h-9  relative mr-[390px] -mt-[106px] animate-bounce" />
                    <BiDislike className="w-9 h-9  relative mr-[350px] -mt-[106px] animate-pulse" />
                    <IoStarOutline className=" w-9 h-9 -mt-[106px] mr-[300px]  " />
                  </div>

                  <div>
                    <div className=" w-[400px] h-[60px] relative mt-[20px] mr-[10px] ">
                      <img src={item.star} alt="" className="star1.png" />
                    </div>

                    <TbNumber5 className="w-8 h-8 mr-[350px] -mt-[50px]" />

                    <IoStarOutline className="w-8 h-8  mr-[390px] -mt-[36px] animate-pulse" />
                  </div>

                  <div className="text-[18px] text-[#6D6767] relative mt-[30px] mr-[10px]">
                    {item.desc}
                  </div>
                  
                  <div className="border w-[90%] relative mr-[18px] mt-[20px] border-[#5BE1B9]"></div>

                  <button className=" text-[24px] text-[#807A7A] relative mr-[140px] mt-[5px]">
                    {item.detail}
                  </button>


                       
   
            

              </div>



                
            </SwiperSlide>

          </Swiper>
        </div>
      )
    })}



  <div className="w-[100%] mt-5 h-32 ">
    
  <div className="relative mr-[690px] w-[40%] h-[100px] ">
        <button className="h-[80px] w-[280px] rounded-full border-color:[#158B68] bg-[#12926C] text-xl text-[#FFFF]  hovrt: animate-pulse">
          {" "}
          مشاهده مقالات بیشتر{" "}
        </button>

        


        
      </div>
      
      
      </div>


  </div>
    

  
</div>
  );
};

export default Articles;

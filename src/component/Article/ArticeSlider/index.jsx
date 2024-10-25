import React, { useState } from 'react'
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

const index = () => {
  const [SliderCourses, setSliderCourses] = useState([
    {id:1, name:'item 1', 
    picture:"./picturecourse.png" ,
    button:'وضعیت دوره ',
    title:'آشنایی با برنامه نویسی با وردپرس' ,
    speech:'50 سخنرانی (190 ساعته )',
    text:'هزینه تمام دوره :' ,
    price:'300000 تومان',
     desc:" در این صفحه آموزشهای برنامه نویسی زبانهای رایج را به صورت کاملا اصولی و پایه ای آموزش می دهیم که با کمک آن می توانید، اپلیکیشن بسازید، وب دیزاین انجام دهید و … به استعداد و علاقه شما بستگی دارد." ,
    detail:'جزئیات دوره' ,
    reservation:"رزرو دوره ",
    pic:'./icons8.png' ,
    icon:'./icons9.png'  } , 

  ]);



  return (
    <div className='h-[1100px] ' >
        <div className=" w-[60%] h-[105px] text-center mr-80 mt-12 ">
          <h1 className="text-[#22445D;] text-4xl"> دوره های ما </h1>

        <p className="text-[#22445D;] text-2xl font-normal mt-2">
          {" "}
          ساختن دنیایی بهتر، یک دوره در یک زمان{" "}
        </p>
      </div>
      <div className='w-[98%] mx-auto m-10 '>

        {SliderCourses.map((item) =>{
          return(
            <div className="h-[900px]">
              <Swiper className=' w-[95%] h-[700px] relative top-20'

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
                  <div className='shadow-2xl w-[85%] h-[660px] mr-16 bg-[bg-[#FBF6F6]] rounded-3xl gap-2'>

                    
                  <div className="rounded-3xl  w-[100%] h-[250px]   ">
                    <img className='rounded-2xl bg-cover ' src={item.picture} alt="./picturecourse.png" />
                  </div>

                  <button className="btn btn-outline btn-accent h-11 w-32 bg-[#BFF4E4] rounded-[8px] relative mr-4 mt-4">

                  {item.button}
                  </button>
                 

                  <div className='flex flex-wrap'>
                  <AiOutlineLike  className=' w-9 h-9  relative mr-[360px] -mt-[40px]'/>
                  <BiDislike   className='w-9 h-9  relative mr-[320px] -mt-[40px]' />
                  <IoStarOutline  className=' w-9 h-9 -mt-[40px] mr-[270px] '/>
                  </div>


                   
                  <div className=" h-10 w-96 text-start text-2xl font-sans font-normal mt-[20px] mr-[15px] animate-pulse">
                    {item.title}

                  </div>

                  <div className="rating relative mr-[290px] mt-4 ">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#5BE1B9]" />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-[#5BE1B9]"
                      defaultChecked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#5BE1B9]" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#5BE1B9]" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#5BE1B9]" />
                    </div>  

                    <div className='text-xl text-[#41A789] relative mr-[15px] -mb-[0px]'>
                    {item.speech}
                       </div>

                  <div className='text-[16px] text-[#6D6767] relative mt-[20px] mr-[10px]'>
                        {item.desc}
                        </div>
                  <div className='border w-[90%] relative mr-[18px] mt-[10px] border-[#5BE1B9]'></div>
                    
                    <div className='text-lg text-[#12926C] relative mt-[10px] mr-[20px]'>
                      {item.text}
                    </div>
                    <div className='text-lg text-[#E11818] relative -mt-[25px] mr-[285px]'>
                      {item.price}
                    </div>
                

                  </div>



                    
                </SwiperSlide> 

                <SwiperSlide className=''>
                  <div className='shadow-2xl w-[85%] h-[660px] bg-[#FBF6F6] mr-16 rounded-3xl gap-2'>

                    
                  <div className="rounded-3xl  w-[100%] h-[250px]   ">
                    <img className='rounded-2xl bg-cover ' src={item.picture} alt="./picturecourse.png" />
                  </div>

                  <button className="btn btn-outline btn-accent h-11 w-32 bg-[#BFF4E4] rounded-[8px] relative mr-4 mt-4">

                  {item.button}
                  </button>
                 

                  <div className='flex flex-wrap'>
                  <AiOutlineLike  className=' w-9 h-9  relative mr-[360px] -mt-[40px]'/>
                  <BiDislike   className='w-9 h-9  relative mr-[320px] -mt-[40px]' />
                  <IoStarOutline  className=' w-9 h-9 -mt-[40px] mr-[270px] '/>
                  </div>


                   
                  <div className=" h-10 w-96 text-start text-2xl font-sans font-normal mt-[20px] mr-[15px] animate-pulse">
                    {item.title}

                  </div>

                  <div className="rating relative mr-[290px] mt-4 ">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#5BE1B9]" />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-[#5BE1B9]"
                      defaultChecked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#5BE1B9]" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#5BE1B9]" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#5BE1B9]" />
                    </div>  

                    <div className='text-xl text-[#41A789] relative mr-[15px] -mb-[0px]'>
                    {item.speech}
                       </div>

                  <div className='text-[16px] text-[#6D6767] relative mt-[20px] mr-[10px]'>
                        {item.desc}
                        </div>
                  <div className='border w-[90%] relative mr-[18px] mt-[10px] border-[#5BE1B9]'></div>
                    
                    <div className='text-lg text-[#12926C] relative mt-[10px] mr-[20px]'>
                      {item.text}
                    </div>
                    <div className='text-lg text-[#E11818] relative -mt-[25px] mr-[285px]'>
                      {item.price}
                    </div>
                

                  </div>



                    
                </SwiperSlide>  

                <SwiperSlide className=''>
                  <div className='shadow-2xl w-[85%] h-[660px] mr-16 bg-[#FBF6F6] rounded-3xl gap-2'>

                    
                  <div className="rounded-3xl  w-[100%] h-[250px]   ">
                    <img className='rounded-2xl bg-cover ' src={item.picture} alt="./picturecourse.png" />
                  </div>

                  <button className="btn btn-outline btn-accent h-11 w-32 bg-[#BFF4E4] rounded-[8px] relative mr-4 mt-4">

                  {item.button}
                  </button>
                 

                  <div className='flex flex-wrap'>
                  <AiOutlineLike  className=' w-9 h-9  relative mr-[360px] -mt-[40px]'/>
                  <BiDislike   className='w-9 h-9  relative mr-[320px] -mt-[40px]' />
                  <IoStarOutline  className=' w-9 h-9 -mt-[40px] mr-[270px] '/>
                  </div>


                   
                  <div className=" h-10 w-96 text-start text-2xl font-sans font-normal mt-[20px] mr-[15px] animate-pulse">
                    {item.title}

                  </div>

                  <div className="rating relative mr-[290px] mt-4 ">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#5BE1B9]" />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-[#5BE1B9]"
                      defaultChecked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#5BE1B9]" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#5BE1B9]" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#5BE1B9]" />
                    </div>  

                    <div className='text-xl text-[#41A789] relative mr-[15px] -mb-[0px]'>
                    {item.speech}
                       </div>

                  <div className='text-[16px] text-[#6D6767] relative mt-[20px] mr-[10px]'>
                        {item.desc}
                        </div>
                  <div className='border w-[90%] relative mr-[18px] mt-[10px] border-[#5BE1B9]'></div>
                    
                    <div className='text-lg text-[#12926C] relative mt-[10px] mr-[20px]'>
                      {item.text}
                    </div>
                    <div className='text-lg text-[#E11818] relative -mt-[25px] mr-[285px]'>
                      {item.price}
                    </div>
                

                  </div>



                    
                </SwiperSlide>   

                <SwiperSlide className=''>
                  <div className='shadow-2xl w-[85%] h-[660px] bg-[#FBF6F6] mr-16 rounded-3xl gap-2'>

                    
                  <div className="rounded-3xl  w-[100%] h-[250px]   ">
                    <img className='rounded-2xl bg-cover ' src={item.picture} alt="./picturecourse.png" />
                  </div>

                  <button className="btn btn-outline btn-accent h-11 w-32 bg-[#BFF4E4] rounded-[8px] relative mr-4 mt-4">

                  {item.button}
                  </button>
                 

                  <div className='flex flex-wrap'>
                  <AiOutlineLike  className=' w-9 h-9  relative mr-[360px] -mt-[40px]'/>
                  <BiDislike   className='w-9 h-9  relative mr-[320px] -mt-[40px]' />
                  <IoStarOutline  className=' w-9 h-9 -mt-[40px] mr-[270px] '/>
                  </div>


                   
                  <div className=" h-10 w-96 text-start text-2xl font-sans font-normal mt-[20px] mr-[15px] animate-pulse">
                    {item.title}

                  </div>

                  <div className="rating relative mr-[290px] mt-4 ">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#5BE1B9]" />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-[#5BE1B9]"
                      defaultChecked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#5BE1B9]" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#5BE1B9]" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#5BE1B9]" />
                    </div>  

                    <div className='text-xl text-[#41A789] relative mr-[15px] -mb-[0px]'>
                    {item.speech}
                       </div>

                  <div className='text-[16px] text-[#6D6767] relative mt-[20px] mr-[10px]'>
                        {item.desc}
                        </div>
                  <div className='border w-[90%] relative mr-[18px] mt-[10px] border-[#5BE1B9]'></div>
                    
                    <div className='text-lg text-[#12926C] relative mt-[10px] mr-[20px]'>
                      {item.text}
                    </div>
                    <div className='text-lg text-[#E11818] relative -mt-[25px] mr-[285px]'>
                      {item.price}
                    </div>
                

                  </div>



                    
                </SwiperSlide> 


                <SwiperSlide className=''>
                  <div className='shadow-2xl w-[85%] h-[660px] bg-[#FBF6F6] mr-16 rounded-3xl gap-2'>

                    
                  <div className="rounded-3xl  w-[100%] h-[250px]   ">
                    <img className='rounded-2xl bg-cover ' src={item.picture} alt="./picturecourse.png" />
                  </div>

                  <button className="btn btn-outline btn-accent h-11 w-32 bg-[#BFF4E4] rounded-[8px] relative mr-4 mt-4">

                  {item.button}
                  </button>
                 

                  <div className='flex flex-wrap'>
                  <AiOutlineLike  className=' w-9 h-9  relative mr-[360px] -mt-[40px]'/>
                  <BiDislike   className='w-9 h-9  relative mr-[320px] -mt-[40px]' />
                  <IoStarOutline  className=' w-9 h-9 -mt-[40px] mr-[270px] '/>
                  </div>


                   
                  <div className=" h-10 w-96 text-start text-2xl font-sans font-normal mt-[20px] mr-[15px] animate-pulse">
                    {item.title}

                  </div>

                  <div className="rating relative mr-[290px] mt-4 ">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#5BE1B9]" />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-[#5BE1B9]"
                      defaultChecked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#5BE1B9]" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#5BE1B9]" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#5BE1B9]" />
                    </div>  

                    <div className='text-xl text-[#41A789] relative mr-[15px] -mb-[0px]'>
                    {item.speech}
                       </div>

                  <div className='text-[16px] text-[#6D6767] relative mt-[20px] mr-[10px]'>
                        {item.desc}
                        </div>
                  <div className='border w-[90%] relative mr-[18px] mt-[10px] border-[#5BE1B9]'></div>
                    
                    <div className='text-lg text-[#12926C] relative mt-[10px] mr-[20px]'>
                      {item.text}
                    </div>
                    <div className='text-lg text-[#E11818] relative -mt-[25px] mr-[285px]'>
                      {item.price}
                    </div>
                

                  </div>



                    
                </SwiperSlide>

                 <SwiperSlide className=''>
                  <div className='shadow-2xl w-[85%] bg-[#FBF6F6] h-[660px] mr-16 rounded-3xl gap-2'>

                    
                  <div className="rounded-3xl  w-[100%] h-[250px]   ">
                    <img className='rounded-2xl bg-cover ' src={item.picture} alt="./picturecourse.png" />
                  </div>

                  <button className="btn btn-outline btn-accent h-11 w-32 bg-[#BFF4E4] rounded-[8px] relative mr-4 mt-4">

                  {item.button}
                  </button>
                 

                  <div className='flex flex-wrap'>
                  <AiOutlineLike  className=' w-9 h-9  relative mr-[360px] -mt-[40px]'/>
                  <BiDislike   className='w-9 h-9  relative mr-[320px] -mt-[40px]' />
                  <IoStarOutline  className=' w-9 h-9 -mt-[40px] mr-[270px] '/>
                  </div>


                   
                  <div className=" h-10 w-96 text-start text-2xl font-sans font-normal mt-[20px] mr-[15px] animate-pulse">
                    {item.title}

                  </div>

                  <div className="rating relative mr-[290px] mt-4 ">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#5BE1B9]" />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-[#5BE1B9]"
                      defaultChecked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#5BE1B9]" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#5BE1B9]" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#5BE1B9]" />
                    </div>  

                    <div className='text-xl text-[#41A789] relative mr-[15px] -mb-[0px]'>
                    {item.speech}
                       </div>

                  <div className='text-[16px] text-[#6D6767] relative mt-[20px] mr-[10px]'>
                        {item.desc}
                        </div>
                  <div className='border w-[90%] relative mr-[18px] mt-[10px] border-[#5BE1B9]'></div>
                    
                    <div className='text-lg text-[#12926C] relative mt-[10px] mr-[20px]'>
                      {item.text}
                    </div>
                    <div className='text-lg text-[#E11818] relative -mt-[25px] mr-[285px]'>
                      {item.price}
                    </div>
                

                  </div>



                    
                </SwiperSlide>

                <SwiperSlide className=''>
                  <div className='shadow-2xl w-[85%] h-[660px] bg-[#FBF6F6] mr-16 rounded-3xl gap-2'>

                    
                  <div className="rounded-3xl  w-[100%] h-[250px]   ">
                    <img className='rounded-2xl bg-cover ' src={item.picture} alt="./picturecourse.png" />
                  </div>

                  <button className="btn btn-outline btn-accent h-11 w-32 bg-[#BFF4E4] rounded-[8px] relative mr-4 mt-4">

                  {item.button}
                  </button>
                 

                  <div className='flex flex-wrap'>
                  <AiOutlineLike  className=' w-9 h-9  relative mr-[360px] -mt-[40px]'/>
                  <BiDislike   className='w-9 h-9  relative mr-[320px] -mt-[40px]' />
                  <IoStarOutline  className=' w-9 h-9 -mt-[40px] mr-[270px] '/>
                  </div>


                   
                  <div className=" h-10 w-96 text-start text-2xl font-sans font-normal mt-[20px] mr-[15px] animate-pulse">
                    {item.title}

                  </div>

                  <div className="rating relative mr-[290px] mt-4 ">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#5BE1B9]" />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-[#5BE1B9]"
                      defaultChecked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#5BE1B9]" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#5BE1B9]" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#5BE1B9]" />
                    </div>  

                    <div className='text-xl text-[#41A789] relative mr-[15px] -mb-[0px]'>
                    {item.speech}
                       </div>

                  <div className='text-[16px] text-[#6D6767] relative mt-[20px] mr-[10px]'>
                        {item.desc}
                        </div>
                  <div className='border w-[90%] relative mr-[18px] mt-[10px] border-[#5BE1B9]'></div>
                    
                    <div className='text-lg text-[#12926C] relative mt-[10px] mr-[20px]'>
                      {item.text}
                    </div>
                    <div className='text-lg text-[#E11818] relative -mt-[25px] mr-[285px]'>
                      {item.price}
                    </div>
                

                  </div>



                    
                </SwiperSlide>

                <SwiperSlide className=''>
                  <div className='shadow-2xl w-[85%] bg-[#FBF6F6] h-[660px] mr-16 rounded-3xl gap-2'>

                    
                  <div className="rounded-3xl  w-[100%] h-[250px]   ">
                    <img className='rounded-2xl bg-cover ' src={item.picture} alt="./picturecourse.png" />
                  </div>

                  <button className="btn btn-outline btn-accent h-11 w-32 bg-[#BFF4E4] rounded-[8px] relative mr-4 mt-4">

                  {item.button}
                  </button>
                 

                  <div className='flex flex-wrap'>
                  <AiOutlineLike  className=' w-9 h-9  relative mr-[360px] -mt-[40px]'/>
                  <BiDislike   className='w-9 h-9  relative mr-[320px] -mt-[40px]' />
                  <IoStarOutline  className=' w-9 h-9 -mt-[40px] mr-[270px] '/>
                  </div>


                   
                  <div className=" h-10 w-96 text-start text-2xl font-sans font-normal mt-[20px] mr-[15px] animate-pulse">
                    {item.title}

                  </div>

                  <div className="rating relative mr-[290px] mt-4 ">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#5BE1B9]" />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-[#5BE1B9]"
                      defaultChecked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#5BE1B9]" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#5BE1B9]" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#5BE1B9]" />
                    </div>  

                    <div className='text-xl text-[#41A789] relative mr-[15px] -mb-[0px]'>
                    {item.speech}
                       </div>

                  <div className='text-[16px] text-[#6D6767] relative mt-[20px] mr-[10px]'>
                        {item.desc}
                        </div>
                  <div className='border w-[90%] relative mr-[18px] mt-[10px] border-[#5BE1B9]'></div>
                    
                    <div className='text-lg text-[#12926C] relative mt-[10px] mr-[20px]'>
                      {item.text}
                    </div>
                    <div className='text-lg text-[#E11818] relative -mt-[25px] mr-[285px]'>
                      {item.price}
                    </div>
                

                  </div>



                    
                </SwiperSlide>

                <SwiperSlide className=''>
                  <div className='shadow-2xl w-[85%] bg-[#FBF6F6] h-[660px] mr-16 rounded-3xl gap-2'>

                    
                  <div className="rounded-3xl  w-[100%] h-[250px]   ">
                    <img className='rounded-2xl bg-cover ' src={item.picture} alt="./picturecourse.png" />
                  </div>

                  <button className="btn btn-outline btn-accent h-11 w-32 bg-[#BFF4E4] rounded-[8px] relative mr-4 mt-4">

                  {item.button}
                  </button>
                 

                  <div className='flex flex-wrap'>
                  <AiOutlineLike  className=' w-9 h-9  relative mr-[360px] -mt-[40px]'/>
                  <BiDislike   className='w-9 h-9  relative mr-[320px] -mt-[40px]' />
                  <IoStarOutline  className=' w-9 h-9 -mt-[40px] mr-[270px] '/>
                  </div>


                   
                  <div className=" h-10 w-96 text-start text-2xl font-sans font-normal mt-[20px] mr-[15px] animate-pulse">
                    {item.title}

                  </div>

                  <div className="rating relative mr-[290px] mt-4 ">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#5BE1B9]" />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-[#5BE1B9]"
                      defaultChecked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#5BE1B9]" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#5BE1B9]" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#5BE1B9]" />
                    </div>  

                    <div className='text-xl text-[#41A789] relative mr-[15px] -mb-[0px]'>
                    {item.speech}
                       </div>

                  <div className='text-[16px] text-[#6D6767] relative mt-[20px] mr-[10px]'>
                        {item.desc}
                        </div>
                  <div className='border w-[90%] relative mr-[18px] mt-[10px] border-[#5BE1B9]'></div>
                    
                    <div className='text-lg text-[#12926C] relative mt-[10px] mr-[20px]'>
                      {item.text}
                    </div>
                    <div className='text-lg text-[#E11818] relative -mt-[25px] mr-[285px]'>
                      {item.price}
                    </div>
                

                  </div>
                </SwiperSlide>  


                


  
               
              

              </Swiper>

             

            </div>
          )
        })}

     
      
      

     
          
         


      </div>
        
      <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg relative bottom-24 right-[700px] bg-[#12926C] hover:bg-[#5BE1B9] ">مشاهده مقالات بیشتر </button>
      
    </div>
  )
}

export default index

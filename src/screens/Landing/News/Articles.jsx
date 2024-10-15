import React, { useState } from 'react'
// Import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import swiper styles
import "swiper/css";

//Import swiper core and required modules
import { Navigation, Pagination, Scrollbar , A11y } from 'swiper/modules';
//some-inner-component.jsx
import {useSwiper} from "swiper/react";
//Import Swiper styles

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { NavLink   } from 'react-router-dom';

const Articles = () => {
  const [Slider, setSlider] = useState([
    {id:1 ,  name:'item 1', button:"وضعیت دوره",pic:'./icons9.png' , title:"اشنایی با برنامه نویسی با وردپرس" , star:'./star1.png' , desc:'لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود ' } ,

  ]);




  return (
    <div>
    <div className='border-2 border-yellow-200 w-[90%] h-[120px] mt-[30px] mr-[90px] '>
        <div className='text-5xl text-center'>
        <h1>اخبار و مقالات مشابه</h1>
        </div>
       
        <div className='text-3xl text-center mt-[20px]'>
        <p>ساختن دنیایی بهتر، یک دوره در یک زمان </p>
        </div>
    </div>

    {Slider.map((item ,index) =>{
      return(
        <div key={index} className='border-2 border-red-600 w-[100%] h-[600px] mt-[30px]'>

        </div>
        
      )

    })}

    <div className='w-[40%] h-[100px] '>
            <button className='border-2 h-[80px] w-[280px] rounded-full border-color:[#158B68] bg-[#12926C] text-xl text-[#FFFF] relative mt-[24px] mr-[550px]'> مشاهده مقالات بیشتر </button>
        </div>
    </div>

    
  )
}

export default Articles

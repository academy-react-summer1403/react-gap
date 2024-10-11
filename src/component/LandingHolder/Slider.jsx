import React from 'react' 
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// some-inner-component.jsx

import { useSwiper } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Slider = () => {
  return (
    <div className='w-screen h-[900px]'>
    <div className="  h-[100px]  text-center m-20">
    <h1 className="text-[#22445D;] text-4xl"> دوره های ما </h1>

    <p className="text-[#22445D;] text-2xl font-normal mt-2">
      {" "}
      ساختن دنیایی بهتر، یک دوره در یک زمان{" "}
    </p>

    <div className='border-2 border-blue-950 w-[98%] h-[600px] mx-auto m-10'>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  




    </div>



  </div>
  </div>
   

 
  )
}

export default Slider

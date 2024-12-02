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

const Article = () => {
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
    // <div className="h-[1100px]">
    //   <div className=" h-[150px]  text-center m-20">
    //     <h1 className="text-[#22445D;] text-4xl dark:text-white"> دوره های ما </h1>

    //     <p className="text-[#22445D;] text-2xl font-normal mt-2 dark:text-white">
    //       {" "}
    //       ساختن دنیایی بهتر، یک دوره در یک زمان{" "}
    //     </p>

    //     <div className=" w-[98%] mx-auto m-10">
    //       <div className=" h-[900px]">
    //         <Swiper
    //           className="h-[700px] relative top-20 "
    //           // install Swiper modules
    //           modules={[Navigation, Pagination, Scrollbar, A11y]}
    //           spaceBetween={50}
    //           slidesPerView={3}
    //           navigation
    //           pagination={{ clickable: true }}
    //           onSwiper={(swiper) => console.log(swiper)}
    //           onSlideChange={() => console.log("slide change")}
    //         >
    //           {TopSliderList?.map((item) => {
    //             return (
    //               <SwiperSlide className="w-[98%] h-[100%]">
    //                 <div className="card bg-base-100 w-[100%] h-[100%] shadow-xl dark:bg-[#1f3c54]">
    //                   <div className="w-[100%] h-[100%]">
    //                     <figure>
    //                       <img
    //                         src={item.tumbImageAddress}
    //                         className="rounded-2xl"
    //                         alt="Shoes"
    //                       />
    //                     </figure>
    //                   </div>

    //                   <div className="card-body" shadow-xl>
    //                     <h2 className="card-title mb-14 dark:text-white">
    //                       آشنایی با    
    //                     {item.title}
    //                       <div className="badge badge-secondary">NEW</div>
    //                     </h2>

    //                     <div className="card-actions justify-end ">
    //                       <NavLink to={"/courses"}>
    //                         <div className="badge badge-outline p-5 ml-14 hover:bg-[#41d3a7] hover:border-none   dark:text-white ">
    //                           {item.statusName}
    //                         </div>
    //                       </NavLink>

    //                       <div className="badge badge-outline p-5 hover:bg-[#41d3a7]  hover:border-none   dark:text-white">
    //                         {item.likeCount}
    //                         <AiOutlineLike />
    //                       </div>
    //                       <div className="badge badge-outline p-5 hover:bg-[#41d3a7]  hover:border-none  dark:text-white">
    //                         {item.dissLikeCount}
    //                         <AiOutlineDislike />
    //                       </div>
    //                     </div>

    //                     <div className="mt-10">
    //                       <div className="avatar  flex">
    //                         <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring ring-offset-2  dark:text-white">
    //                           <img src="" />
    //                         </div>
    //                         <h1 className="mr-11 leading-10 text-[#809A7A;]   dark:text-white">
    //                           {item.teacherName}
    //                         </h1>
    //                       </div>
    //                     </div>
    //                     <div>
    //                       <p className="mt-30 text-right text-[#908A7A;]   dark:text-white">
    //                         {item.describe}
    //                       </p>
    //                     </div>
    //                     <div className="border-t-2 border-[#158B68]">
    //                       <h1 className="text-xl text-[#807A7A;] leading-10 hover:text-[#296c58]   dark:text-white">
    //                         مشاهده جزییات
    //                       </h1>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </SwiperSlide>
    //             );
    //           })}
    //           ...
    //         </Swiper>
    //       </div>
    //     </div>
    //   </div>
    //   <NavLink to={"/News"}></NavLink>
    // </div>
    <></>
  );
};

export default Article;

import React, { useEffect, useState } from "react";
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
// import { landingCourse } from "../../../core/Servises/api/Course/LandingCourse.api";
const index = () => {
  // const [courses, setCourses] = useState([]);
  // const getData = async() =>{
  //   const res = await landingCourse()
  //   setCourses(res)
  //    console.log(res)
  // }
 
  // useEffect(()=>{
  //   getData()
  // },[])

  //  const courntcours = course?course:{}
  //  {courntcours.teacherName}


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

  const [TopCoursesList, setTopCoursesList] = useState(null);

  const getTopCourses = async () =>{
    const res = await axios.get('https://classapi.sepehracademy.ir/api/Home/GetCoursesTop?Count=5')
    setTopCoursesList(res.data)
  }


  useEffect(() => {
    getTopCourses()
  }, []);

  return (
    <div className="h-[1100px]">
      <div className=" h-[150px]  text-center m-20">
        <h1 className="text-[#22445D;] text-4xl"> دوره های ما </h1>

        <p className="text-[#22445D;] text-2xl font-normal mt-2">
          {" "}
          ساختن دنیایی بهتر، یک دوره در یک زمان{" "}
        </p>

        <div className=" w-[98%] mx-auto m-10">

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

                  {TopCoursesList?.map(item=>{
                    return(
                      <SwiperSlide className="w-[98%]">
                      <div className="card bg-base-100 w-[100%] h-[100%] shadow-xl">
                        <figure className="px-10 pt-10">
                          <img
                            src={item.tumbImageAddress}
                            alt="Shoes"
                            className="rounded-xl"
                          />
                        </figure>
  
                        <div className="card-body items-center text-center">
                          <div className="card-actions ml-52">
                            <button className="btn btn-primary bg-[#12926C;] mr-7">
                              {" "}
                              وضعیت دوره{" "}
                            </button>
  
                            <div className="card-actions relative right-52 -top-14">
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
                          </div>
                          <h2 className="card-title text-2xl">
                              {item.title}
                          </h2>
                          <p className="text-right">
                            {" "}
                              {item.describe}
                          </p>
                          <div>
                            <div className="">
 
                            <Rate allowHalf defaultValue={item.courseRate} />
                            </div>
                          </div>
                          <div className="flex flex-wrap justify-between gap- border-t-2 border-green-900 w-[90%]">
                            <h1 className="text-[green]">هزینه تمام دوره</h1>
                            <h2 className="text-[red]">3000000 هزار تومان</h2>
                          </div>
                          <div className="card-actions">
                            <button className="btn btn-primary bg-[#12926C;] w-60 p-7 leading-4">
                              الان ثبت نام کن{" "}
                            </button>
                          </div>
                        </div>
                      </div>
  
                      
                    </SwiperSlide>
                    )
                  })}


                </Swiper>
              </div>

        </div>
      </div>
      <NavLink to={"/News"}>
        <button className="bg-[#12926C;] w-[350px] h-[90px] relative top-[720px] right-[700px] rounded-full  hover:scale-75 duration-75">
          <h1 className="text-2xl text-[#fff]">مشاهده مقالات بیشتر</h1>
        </button>
      </NavLink>
      {/* <Coursslider  course={courses} /> */}
    </div>

  );
};

export default index;

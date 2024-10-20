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
    const Slider = () => {
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
        <div className="h-[1100px]">
        <div className=" h-[150px]  text-center m-20">
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
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                    >
                    <SwiperSlide className="w-[98%]">
                    <div className="card bg-base-100 w-[100%] h-[100%] shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                            src="./tes1.png"
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
                            <h2 className="card-title text-2xl">آشنایی با برنامه نویسی با وردپرس</h2>
                            <p className="text-right"> لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود </p>
                            <div>
                            <div className="rating ml-72">
    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
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
                    <SwiperSlide className="w-[98%]">

                    <div className="card bg-base-100 w-[100%] h-[100%] shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                            src="./tes1.png"
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
                            <h2 className="card-title text-2xl">آشنایی با برنامه نویسی با وردپرس</h2>
                            <p className="text-right"> لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود </p>
                            <div>
                            <div className="rating ml-72">
    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
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
                    <SwiperSlide className="w-[98%]">
                    <div className="card bg-base-100 w-[100%] h-[100%] shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                            src="./tes1.png"
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
                            <h2 className="card-title text-2xl">آشنایی با برنامه نویسی با وردپرس</h2>
                            <p className="text-right"> لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود </p>
                            <div>
                            <div className="rating ml-72">
    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
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
                    <SwiperSlide className="w-[98%]">
                    <div className="card bg-base-100 w-[100%] h-[100%] shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                            src="./tes1.png"
                            alt="Shoes"
                            className="rounded-xl"
                            />
                        </figure>

                        <div className="  card-body items-center text-center">
                            <div className=" card-actions ml-52">
                            <button className="btn btn-primary bg-[#12926C;] mr-7">
                                {" "}
                                وضعیت دوره{" "}
                            </button>

                            <div className=" border-2 border-red-400 card-actions relative right-52 -top-14">
                                <div className="  border-2 border-green-400 badge badge-outline p-5 hover:bg-[#41d3a7]  hover:border-none">
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
                            <h2 className="  border-2 border-yellow-400 card-title text-2xl">آشنایی با برنامه نویسی با وردپرس</h2>
                            <p className="text-right"> لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود </p>

                            <div className=" flex flex-wrap justify-between gap- border-t-2 border-green-900 w-[90%]">
                            <h2 className="text-[#807A7A]  mr-[40%] ">مشاهده جزئیات</h2>

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

    export default Slider;




    
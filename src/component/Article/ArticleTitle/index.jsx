    import React, { useEffect, useState } from 'react'
    import { FaKey } from "react-icons/fa6";
    import { BsPerson } from "react-icons/bs";
    import { MdOutlineRemoveRedEye } from "react-icons/md";
    import { BsCalendarDate } from "react-icons/bs";
    import { SlLike } from "react-icons/sl";
    import { AiOutlineDislike } from "react-icons/ai";
    import { SiAirtransat } from "react-icons/si";

    const index = () => {
    return (
        
        <div className=' flex flex-wrap justify-center w-[85%]  mx-auto mt-32 rounded-[30px] bg-[#FBF6F6;]'>
            <div className='w-[85%] h-[650px] mt-24'>
                <img src="./Mask2.png" alt="" />
            </div>
            <div className='w-[95%] h-[650px] mt-20 rounded-3xl bg-[#ffffff;] shadow-2xl '>

                <div className=''>
                                    <h1 className='text-3xl text-center leading-10 font-bold'>عنوان مقاله</h1>

        

                </div>


                <div className='w-[95%] h-[570px] mx-auto mt-6'>
            
                <h2 className='text-2xl tracking-wide leading-10 font-thin'>لورم ایپسوم محبوب ترین و  متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود. تکه های لاتین متن نشان می دهد که یک پروژه در حال توسعه است. لورم ایپسوم فقط برای توسعه دهندگان وب نیست. طراحان گرافیک نیز از آن با نرم افزارهای مختلفی مانند فوتوشاپ استفاده می کنند. لورم ایپسوم محبوب .  </h2> 

                <br />

                <h2 className='text-2xl tracking-wide leading-10 font-thin'>لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود. تکه های لاتین متن نشان می دهد که یک پروژه در حال توسعه است. لورم ایپسوم فقط برای توسعه دهندگان وب نیست. طراحان گرافیک نیز از آن با نرم افزارهای مختلفی مانند فوتوشاپ استفاده می کنند.</h2>

                <br />

                <h2 className='text-2xl tracking-wide leading-10 font-thin'>لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود. تکه های لاتین متن نشان می دهد که یک پروژه در حال توسعه است. لورم ایپسوم فقط برای توسعه دهندگان وب نیست.  در حال توسعه است.</h2>
                </div>

                <div className='h-[10%] m-7 bottom-24 relative'>
                    <div className=' w-[40%] h-[80%] m-2 flex justify-center gap-20'>
                        <div className='w-14 h-8 m-3'>
                        <BsPerson   className='size-7 mr-2 fill-[#158B68]' />
                        <h1 className='text-sm mr-16 font-thin relative bottom-6  w-16'>نام نویسنده</h1>
                        </div>
                        <div className='w-14 h-8 m-3'> 
                        <MdOutlineRemoveRedEye className='size-7 mr-2 fill-[#158B68]' />
                        <h1 className='text-sm mr-16 font-thin relative bottom-6  w-20 text-[#158B68] '>1124 </h1>
                             </div>
                        <div className=' w-14 h-8 m-3'>
                        <button>

                        
                        <BsCalendarDate className='size-7 mr-2 fill-[#158B68]' />
                        <h1 className='text-sm mr-16 relative bottom-6 font-thin w-20'>1402/مهر/مهر</h1>
                        
                        </button>



                        </div>
                        <div className=' w-14 h-8 m-3'>
                        <FaKey className='size-7 mr-2 fill-[#158B68]'/>
                        <h1 className='text-sm mr-16 relative bottom-6 font-thin w-20'>کلمات کلیدی</h1>
                        </div>
                    </div>

                    <div className=' w-24 h-7 relative right-[1220px] flex bottom-12 '>
        <SiAirtransat className='size-7 mr-2 fill-[#158B68]'/>
        <AiOutlineDislike className='size-7 mr-2 fill-[#158B68]' />
        <SlLike className='size-7 mr-2 fill-[#158B68]' />

        </div>

                                <div className='w-[80%] h-[100%]  relative  flex m-7 right-20'>
                                                            <div className=' w-[50%] h-[80%] m-2 relative right-4 bg-[#A4F6DE]'
                                                            
                                                            ><h1 className='font-thin  text-2xl relative right-44 top-2'>نظارت کاربران</h1>
                                                            
                                                            </div>
                                                            <div className='w-[50%] h-[80%] m-2 relative bg-[#FFFFFF] '>
                                                                
                                                                <h1 className='font-thin  text-2xl relative right-44 top-2' >ثبت نظر</h1>
                                                            
                                                            </div>
                                </div>
       
                </div>
            </div>

      



            <div className=' w-[95%] h-[800px] mt-24'>
    <div className="chat chat-start">
    <div className="chat-image avatar">
        <div className="w-20 rounded-full">
        <img
            alt="Tailwind CSS chat bubble component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
    </div>

    <div className="w-[70%] h-[100px] bg-[#ffffff] rounded-l-xl rounded-t-xl shadow-2xl">
    <div className='w-24 h-7 relative right-[780px] flex'>
        <SiAirtransat className='size-7 mr-2 fill-[#158B68]'/>
        <AiOutlineDislike className='size-7 mr-2 fill-[#158B68]' />
        <SlLike className='size-7 mr-2 fill-[#158B68]' />

        </div>
        <h1 className='relative bottom-6'>عنوان: عنوان نظر</h1>
        <div className='relative bottom-5'><h2>لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.
        تکه های لاتین متن نشان می دهد که یک پروژه در حال توسعه است.</h2></div>
    </div>
    </div>

    <div className="chat chat-start">
    <div className="chat-image avatar">
        <div className="w-20 rounded-full">
        <img
            alt="Tailwind CSS chat bubble component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
    </div>
    <div className="w-[40%] h-[100px] bg-[#ffffff] rounded-l-xl rounded-t-xl shadow-2xl ">
    <div className='w-24 h-7 relative right-[400px] flex'>
        <SiAirtransat className='size-7 mr-2 fill-[#158B68]'/>
        <AiOutlineDislike className='size-7 mr-2 fill-[#158B68]' />
        <SlLike className='size-7 mr-2 fill-[#158B68]' />

        </div>
        <h1 className='relative bottom-6' >عنوان :</h1>
        <div className='relative bottom-6'><h2>لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.
        تکه های لاتین متن نشان می دهد که یک پروژه در حال توسعه است.</h2></div>
    </div>
    </div>

    <div className="chat chat-start">
    <div className="chat-image avatar">
        <div className="w-20 rounded-full">
        <img
            alt="Tailwind CSS chat bubble component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
    </div>
    <div className="w-[40%] h-[100px] bg-[#ffffff] rounded-l-xl rounded-t-xl shadow-2xl ">
    <div className='w-24 h-7 relative right-[400px] flex'>
        <SiAirtransat className='size-7 mr-2 fill-[#158B68]'/>
        <AiOutlineDislike className='size-7 mr-2 fill-[#158B68]' />
        <SlLike className='size-7 mr-2 fill-[#158B68]' />

        </div>
        <h1 className='relative bottom-6'>عنوان :</h1>
        <div className='relative bottom-6'><h2>لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.
        </h2></div>
    </div>
    </div>


    <div className="chat chat-start">
    <div className="chat-image avatar">
        <div className="w-20 rounded-full">
        <img
            alt="Tailwind CSS chat bubble component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
    </div>
    <div className="w-[80%] h-[100px] bg-[#ffffff] rounded-l-xl rounded-t-xl shadow-2xl">
    <div className='w-24 h-7 relative right-[900px] flex'>
        <SiAirtransat className='size-7 mr-2 fill-[#158B68]'/>
        <AiOutlineDislike className='size-7 mr-2 fill-[#158B68]' />
        <SlLike className='size-7 mr-2 fill-[#158B68]' />

        </div>
        <h1 className='relative bottom-6'>عنوان :</h1>
        <div className='relative bottom-6'><h2>لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.
        تکه های لاتین متن نشان می دهد که یک پروژه در حال توسعه است.</h2></div>
    </div>
    </div>

    <div className="chat chat-start">
    <div className="chat-image avatar">
        <div className="w-20 rounded-full">
        <img
            alt="Tailwind CSS chat bubble component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
    </div>
    <div className="w-[50%] h-[100px] bg-[#ffffff] rounded-l-xl rounded-t-xl shadow-2xl ">
    <div className='w-24 h-7 relative right-[530px] flex'>
        <SiAirtransat className='size-7 mr-2 fill-[#158B68]'/>
        <AiOutlineDislike className='size-7 mr-2 fill-[#158B68]' />
        <SlLike className='size-7 mr-2 fill-[#158B68]' />

        </div>
        <h1 className='relative bottom-6'>عنوان :</h1>
        <div className='relative bottom-6'><h2>لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.
        تکه های لاتین متن نشان می دهد که یک پروژه در حال توسعه است.</h2></div>
    </div>
    </div>


    <div className="chat chat-start">
    <div className="chat-image avatar">
        <div className="w-20 rounded-full">
        <img
            alt="Tailwind CSS chat bubble component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
    </div>
    <div className="w-[30%] h-[100px] bg-[#ffffff] rounded-l-xl rounded-t-xl shadow-2xl ">
    <div className='w-24 h-7 relative right-[275px] flex'>
        <SiAirtransat className='size-7 mr-2 fill-[#158B68]'/>
        <AiOutlineDislike className='size-7 mr-2 fill-[#158B68]' />
        <SlLike className='size-7 mr-2 fill-[#158B68]' />

        </div>
        <h1 className='relative bottom-6'>عنوان :</h1>
        <div className='relative bottom-6'><h2>لورم ایپسوم محبوب  توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.</h2></div>
    </div>
    </div>

    <div className="chat chat-start">
    <div className="chat-image avatar">
        <div className="w-20 rounded-full">
        <img
            alt="Tailwind CSS chat bubble component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
    </div>
    <div className="w-[55%] h-[100px] bg-[#ffffff] rounded-l-xl rounded-t-xl shadow-2xl ">
    <div className='w-24 h-7 relative right-[580px] flex '>
        <SiAirtransat className='size-7 mr-2 fill-[#158B68]'/>
        <AiOutlineDislike className='size-7 mr-2 fill-[#158B68]' />
        <SlLike className='size-7 mr-2 fill-[#158B68] ' />

        </div>
        <h1 className='relative bottom-6'>عنوان :</h1>
        <div className='relative bottom-6'><h2>لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.
        تکه های لاتین متن نشان می دهد که یک پروژه در حال توسعه است.</h2></div>
    </div>
    </div>

                </div>





    <div>

    </div>



        </div>
    )
    }

    export default index

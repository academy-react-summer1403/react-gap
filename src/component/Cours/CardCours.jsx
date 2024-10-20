import React, { useState } from 'react'
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { IoStarOutline } from "react-icons/io5";
import { TbNumber5 } from "react-icons/tb";

const CardCours = () => {
     const [List, setList] = useState([
        
      {id:1, name:'item 1', button:'وضعیت دوره ', title:'آشنایی با برنامه نویسی با وردپرس' , star:'../star1.png' , speech:'50 سخنرانی (190 ساعته )',text:'هزینه تمام دوره :' , price:'300000 تومان', desc:'لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود ', detail:'جزئیات دوره' , reservation:"رزرو دوره ", pic:'./icons8.png' , icon:'./icons9.png'  } , 
      {id:1, name:'item 1', button:'وضعیت دوره ', title:'آشنایی با برنامه نویسی با وردپرس' , star:'../star1.png' ,  speech:'50 سخنرانی (190 ساعته )', text:'هزینه تمام دوره :' , price:'300000 تومان', desc:'لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود ', detail:'جزئیات دوره' , reservation:"رزرو دوره ", pic:'./icons8.png' , icon:'./icons9.png'  } , 
      {id:1, name:'item 1', button:'وضعیت دوره ', title:'آشنایی با برنامه نویسی با وردپرس' , star:'../star1.png' ,  speech:'50 سخنرانی (190 ساعته )', text:'هزینه تمام دوره :' , price:'300000 تومان', desc:'لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود ', detail:'جزئیات دوره' , reservation:"رزرو دوره ", pic:'./icons8.png' , icon:'./icons9.png'  } , 
      {id:1, name:'item 1', button:'وضعیت دوره ', title:'آشنایی با برنامه نویسی با وردپرس' , star:'../star1.png' ,  speech:'50 سخنرانی (190 ساعته )', text:'هزینه تمام دوره :' , price:'300000 تومان', desc:'لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود ', detail:'جزئیات دوره' , reservation:"رزرو دوره ", pic:'./icons8.png' , icon:'./icons9.png'  } , 
      {id:1, name:'item 1', button:'وضعیت دوره ', title:'آشنایی با برنامه نویسی با وردپرس' , star:'../star1.png' ,  speech:'50 سخنرانی (190 ساعته )', text:'هزینه تمام دوره :' , price:'300000 تومان', desc:'لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود ', detail:'جزئیات دوره' , reservation:"رزرو دوره ", pic:'./icons8.png' , icon:'./icons9.png'  } , 
      {id:1, name:'item 1', button:'وضعیت دوره ', title:'آشنایی با برنامه نویسی با وردپرس' , star:'../star1.png' ,  speech:'50 سخنرانی (190 ساعته )', text:'هزینه تمام دوره :' , price:'300000 تومان', desc:'لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود ', detail:'جزئیات دوره' , reservation:"رزرو دوره ", pic:'./icons8.png' , icon:'./icons9.png'  } , 
      {id:1, name:'item 1', button:'وضعیت دوره ', title:'آشنایی با برنامه نویسی با وردپرس' , star:'../star1.png' ,  speech:'50 سخنرانی (190 ساعته )', text:'هزینه تمام دوره :' , price:'300000 تومان', desc:'لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود ', detail:'جزئیات دوره' , reservation:"رزرو دوره ", pic:'./icons8.png' , icon:'./icons9.png'  } , 
      {id:1, name:'item 1', button:'وضعیت دوره ', title:'آشنایی با برنامه نویسی با وردپرس' , star:'../star1.png' ,  speech:'50 سخنرانی (190 ساعته )', text:'هزینه تمام دوره :' , price:'300000 تومان', desc:'لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود ', detail:'جزئیات دوره' , reservation:"رزرو دوره ", pic:'./icons8.png' , icon:'./icons9.png'  } , 
      {id:1, name:'item 1', button:'وضعیت دوره ', title:'آشنایی با برنامه نویسی با وردپرس' , star:'../star1.png' ,  speech:'50 سخنرانی (190 ساعته )', text:'هزینه تمام دوره :' , price:'300000 تومان', desc:'لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود ', detail:'جزئیات دوره' , reservation:"رزرو دوره ", pic:'./icons8.png' , icon:'./icons9.png'  } , 
      
      
    ]);
    
  return (
    <div className='flex  justify-center flex-wrap  w-[1260px] mr-[370px] -mt-[42%] rounded-3xl shadow-xl '>
        <div className=' w-[100%] flex flex-wrap-reverse justify-center gap-[50px] mt-[80px]'> 
        {List.map((item, index)=>{
            return(
                 
                <div key={index} className=' h-[510px] w-[345px] bg-[#FBF6F6] rounded-3xl  mb-20 '>

                    

                 
                    <div className='w-[100px] h-[100px] mt-[-60px] mr-[120px] animate-pulse'>
                    <img  src={item.pic} alt="" className='icons8.png'/>
                    </div>

                    <button className="h-11 w-32 bg-[#BFF4E4] rounded-[8px] relative mr-4 mt-14 ">
                    {item.button}
                  </button>

                  <div className='flex flex-wrap'>
                  <AiOutlineLike  className=' w-9 h-9  relative mr-[290px] -mt-[40px]'/>
                  <BiDislike   className='w-9 h-9  relative mr-[255px] -mt-[40px]' />
                  <IoStarOutline  className=' w-9 h-9 -mt-[40px] mr-[210px] '/>
                  </div>


                   
                  <div className=" h-10 w-96 text-start text-2xl font-sans font-normal mt-[20px] mr-[10px] animate-pulse">
                    {item.title}
                  </div>
                  <div className=' w-[380px] h-[40px] relative mt-[20px] mr-[10px] '>
                    <img  src={item.star} alt="" className='./star1.png'/>
                    </div>

                <div>
                <TbNumber5 className='w-8 h-8 mr-[260px] -mt-[30px]' />
                < IoStarOutline className='w-8 h-8  mr-[300px] -mt-[36px]'/>
               </div>

                    <div className='text-xs text-[#41A789] relative mr-[10px] mt-[20px]'>
                    {item.speech}
                       </div>

                       <div className='text-[16px] text-[#6D6767] relative mt-[20px] mr-[10px]'>
                        {item.desc}
                        </div>
                  <div className='border w-[90%] relative mr-[18px] mt-[10px] border-[#5BE1B9]'></div>
                    
                    <div className='text-[14px] text-[#12926C] relative mt-[10px] mr-[10px]'>
                      {item.text}
                    </div>
                    <div className='text-[14px] text-[#E11818] relative -mt-[17px] mr-[225px]'>
                      {item.price}
                    </div>
                    

                    <button className='border-2 border-[#5BE1B9] h-[40px] w-[100px] bg-[#ffff] rounded-[8px] relative mr-[60px] mt-[20px]'>
                      {item.detail}
                    </button>
                    <button className='border-2 border-[#5BE1B9] h-[40px] w-[100px] bg-[#5BE1B9] rounded-[8px] relative mr-[10px] mt-[20px]'>
                      {item.reservation}         
                    </button>

                    

                        </div>

                
              )
          })}
    </div>

                  <div className='mr-[420px] mb-[100px]'>

                    <div className="join">
                  <button className="join-item btn btn-xs bg-[#5BE1B9] w-[70px] h-[70px]">1</button>
                  <button className="join-item btn btn-xs btn-active bg-[#FBF6F6] w-[70px] h-[70px]">2</button>
                  <button className="join-item btn btn-xs bg-[#5BE1B9] w-[70px] h-[70px]">3</button>
                  <button className="join-item btn btn-xs bg-[#FBF6F6] w-[70px] h-[70px]">4</button>

                  </div>
                    </div>
      
    </div>
  )
}


export default CardCours

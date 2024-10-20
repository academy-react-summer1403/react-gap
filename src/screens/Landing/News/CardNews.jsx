import React, { useState } from 'react'
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { IoStarOutline } from "react-icons/io5";
import { TbNumber5 } from "react-icons/tb";


const CardNews = () => {
  const [List, setList] = useState([
      {id:1 , pic:'pic1.png', button:"وضعیت دوره" , title:"اشنایی با برنامه نویسی با وردپرس" , star:'./star1.png' , desc:'لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود ' , detail:'مشاهده جزئیات' } ,
      {id:1 , pic:'pic1.png', button:"وضعیت دوره" , title:"اشنایی با برنامه نویسی با وردپرس" , star:'./star1.png' , desc:'لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود ' , detail:'مشاهده جزئیات' } ,
      {id:1 , pic:'pic1.png', button:"وضعیت دوره" , title:"اشنایی با برنامه نویسی با وردپرس" , star:'./star1.png' , desc:'لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود ' , detail:'مشاهده جزئیات' } ,
      {id:1 , pic:'pic1.png', button:"وضعیت دوره" , title:"اشنایی با برنامه نویسی با وردپرس" , star:'./star1.png' , desc:'لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود ' , detail:'مشاهده جزئیات' } ,
      {id:1 , pic:'pic1.png', button:"وضعیت دوره" , title:"اشنایی با برنامه نویسی با وردپرس" , star:'./star1.png' , desc:'لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود ' , detail:'مشاهده جزئیات' } ,
      {id:1 , pic:'pic1.png', button:"وضعیت دوره" , title:"اشنایی با برنامه نویسی با وردپرس" , star:'./star1.png' , desc:'لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود ' , detail:'مشاهده جزئیات' } ,
      {id:1 , pic:'pic1.png', button:"وضعیت دوره" , title:"اشنایی با برنامه نویسی با وردپرس" , star:'./star1.png' , desc:'لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود ' , detail:'مشاهده جزئیات' } ,
      {id:1 , pic:'pic1.png', button:"وضعیت دوره" , title:"اشنایی با برنامه نویسی با وردپرس" , star:'./star1.png' , desc:'لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود ' , detail:'مشاهده جزئیات' } ,
      {id:1 , pic:'pic1.png', button:"وضعیت دوره" , title:"اشنایی با برنامه نویسی با وردپرس" , star:'./star1.png' , desc:'لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود ' , detail:'مشاهده جزئیات' } ,
      
    
]);

return (
<div>
    <div className=' w-11/12 mt-8 mr-16 rounded-3xl shadow-2xl'>
      <div className='   w-12/12 flex flex-wrap justify-center gap-9 mt-11 mx-auto'>
    {List.map((item, index)=>{
          return(
             
            <div key={index} className='h-[41%] w-[29%] bg-[#FBF6F6] rounded-3xl  mb-24'>
                  
                  <div className='w-[100%] h-64   '>
              <img  
              src={item.pic} alt="" />
                
              </div>

              <button className='h-11 w-32 bg-[#BFF4E4] rounded-[8px]  mr-4 mt-14 '> 
                {item.button}
              </button>

              <div className=' h-10 w-96 text-start text-2xl font-sans font-normal mt-5 mr-3'>
              {item.title}
                
                 </div>

                  <div className='flex flex-wrap'>
                  <AiOutlineLike  className=' w-9 h-9   mr-96 -mt-28'/>
                  <BiDislike   className='w-9 h-9  mr-[350px] -mt-28' />
                  <IoStarOutline  className=' w-9 h-9 -mt-[106px] mr-[300px] '/>
                  </div>
                    
                  <div>
                    <div className=' w-96 h-16  mt-[20px] mr-[10px] '>
                    <img  src={item.star} alt="" className='star1.png'/>
                    </div>

                    <TbNumber5 className='w-8 h-8 mr-[350px] -mt-12' />

                   < IoStarOutline className='w-8 h-8  mr-[390px] -mt-9'/>
              </div>

              <div className='text-2xl text-[#6D6767]  mt-8 mr-3'>
              {item.desc}
              </div>
                    <div className='border w-[90%] mr-5 mt-5 border-[#5BE1B9]'></div>

                    <button className=' text-2xl text-[#807A7A] mr-[140px] mt-[5px]'>
                    {item.detail}
                      </button>  




            </div>  
        )
})}
    </div>

    <div className=' mr-[620px] mb-16 '>

  <div className="join rounded-full relative mb-[60px]">
  <button className="join-item btn btn-xs bg-[#5BE1B9] w-[80px] h-[70px]">1</button>
  <button className="join-item btn btn-xs btn-active bg-[#FBF6F6] w-[80px] h-[70px]">2</button>
  <button className="join-item btn btn-xs bg-[#5BE1B9] w-[80px] h-[70px]">3</button>
  <button className="join-item btn btn-xs bg-[#FBF6F6] w-[80px] h-[70px]">4</button>

  </div>

    </div>
    </div>
</div>
)
}


export default CardNews

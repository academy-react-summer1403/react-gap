import React, { useState } from 'react'

const CardNews = () => {
  const [List, setList] = useState([
    {id:1 ,  name:'item 1', status:"" , icon:'./pic1.png' , title:'' , star:'./star1.png', pic:'./icons9.png' ,rate:'rate.png', desc:'' , img:'star2.png'} ,
    {id:1 ,  name:'item 1', status:"" , icon:'./pic1.png' , title:'' , star:'./star1.png' ,pic:'./icons9.png' ,rate:'rate.png', desc:'' , img:'star2.png'} ,
    {id:1 ,  name:'item 1', status:"" , icon:'./pic1.png' , title:'' , star:'./star1.png' ,pic:'./icons9.png' ,rate:'rate.png', desc:'' , img:'star2.png'} ,
    {id:1 ,  name:'item 1', status:"" , icon:'./pic1.png' , title:'' , star:'./star1.png' ,pic:'./icons9.png' ,rate:'rate.png', desc:'' , img:'star2.png'} ,
    {id:1 ,  name:'item 1', status:"" , icon:'./pic1.png' , title:'' , star:'./star1.png' ,pic:'./icons9.png' ,rate:'rate.png', desc:'' , img:'star2.png'} ,
    {id:1 ,  name:'item 1', status:"" , icon:'./pic1.png' , title:'' , star:'./star1.png' ,pic:'./icons9.png' ,rate:'rate.png', desc:'', img:'star2.png'} ,
    {id:1 ,  name:'item 1', status:"" , icon:'./pic1.png' , title:'' , star:'./star1.png' ,pic:'./icons9.png' ,rate:'rate.png', desc:'', img:'star2.png'} ,
    {id:1 ,  name:'item 1', status:"" , icon:'./pic1.png' , title:'' , star:'./star1.png' ,pic:'./icons9.png' ,rate:'rate.png', desc:'' , img:'star2.png'} ,
    {id:1 ,  name:'item 1', status:"" , icon:'./pic1.png' , title:'' , star:'./star1.png' ,pic:'./icons9.png' ,rate:'rate.png', desc:'', img:'star2.png'} ,
    
]);

return (
<div class>
    <div className='border-2 w-[90%]  mt-[30px] mr-[90px] rounded-3xl shadow-xl'>
      <div className='w-[90%] flex flex-wrap justify-center gap-[40px] mt-[80px] mx-auto'>
    {List.map((item, index)=>{
          return(
             
            <div key={index} className='border-2 h-[530px] w-[380px] bg-[#ffff] rounded-3xl  mb-20'>
              <div className='h-[250px] w-[100%]'>
              <img  src={item.icon} alt="" className='pic1.png'/>

              </div>
              <div className=' relative -mt-[19px]'>

              <div className='h-[38px] w-[110px] bg-[#BFF4E4] rounded-[8px] relative mr-[10px] mt-[10px]'> <span className='text-xs text-[#158B68] text-justify'>وضعیت دوره </span></div>
              <div className='h-[32px] w-[259px] text-lg font-bold rounded-3xl mb-[80px] mr-[10px]'> آشنایی با برنامه نویسی با وردپرس </div>

              <div className=' w-[100px] h-[40px] relative mr-[270px] -mt-[140px]'>
                    <img  src={item.pic} alt="" className='icons9.png'/>
                    </div>

              <div>
                    <div className=' w-[400px] h-[60px] relative mt-[20px] mr-[10px] '>
                    <img  src={item.star} alt="" className='star1.png'/>
                    </div>

                    <div className=' w-[30px] h-[10px] bg-cover relative -mt-[45px] mr-[290px] '>
                          <img  src={item.rate} alt="" className='rate.png'/>
                    </div>

                    <div className=' w-[30px] h-[10px] bg-cover relative -mt-[18px] mr-[335px] '>
                          <img  src={item.img} alt="" className='star1.png'/>
                    </div>
              </div>

              <div className='text-[14px] text-[#6D6767] relative mt-[60px] mr-[10px]'><span>لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود </span></div>
                    <div className='border w-[90%] relative mr-[18px] mt-[10px] border-[#5BE1B9]'></div>

                    <h1 className='text-center'>مشاهده جزئیات</h1>

             
              


               

            </div>
            </div>

            

          
        )
       



})}
    </div>
    
    </div>
</div>
)
}


export default CardNews

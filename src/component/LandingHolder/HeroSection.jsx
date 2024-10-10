import React from 'react'

const HeroSection = () => {
  return (
    

<div className='flex justify-start  w-screen h-[700px] bg-gradient-to-r from-[#A4F6DE] to-[#FFFFFF]'>
   
      <div className='  w-[800px] h-[400px] relative top-32 left-1 '>
      <h1 className=' font-inter text-5xl text-[#21394B] mx-14 ;'>آموزشگاه اچ وان </h1>
      <h3 className='m-16 text-[#22445D;] text-xl'>


لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط 
توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود. تکه های
 لاتین متن نشان می دهد که یک پروژه در حال توسعه است. لورم اپسوم فقط برای توسعه دهندگان وب نیست.
  طراحان گرافیک نیز از آن با نرم افزارهای مختلفی مانند فوتوشاپ استفاده می کنند.
      </h3>
      <button className='w-[174px] h-[74px] rounded-[50px] text-[#22445D;] font-inter bg-[#12926C;] text-[#ffffff] mx-14 '> شروع یادگیری </button>
    </div>

    <div className=' w-[600px] h-[500px] m-20'>
      <img src='./ImgHero.png' alt='Img'/>

    </div>
  
        
    </div>
  )
}

export default HeroSection

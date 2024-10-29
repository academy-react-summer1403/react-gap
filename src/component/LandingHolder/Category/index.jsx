import React from 'react'

const index = () => {
  return (
    <div className=' h-[230px] mt-[85px]'> 

    <div className="border-2 w-[70%] h-[170px] bg-[#5751E1] relative top-6 rounded-2xl mx-auto  ">

      <div className='hidden w-[200px] h-[410px] mr-[1000px] mt-  lg:block'>
        <img src='./line.png'/>
      </div>
      
      <div className='hidden w-[250px] h-[410px] mr-20 -mt-[325px] lg:block'>
        <img src='./shape.png'/>
      </div>

      
      <div className='hidden w-[200px] h-[410px] mr-[80px] -mt-[520px]  lg:block'>
        <img src='./usershape.png'/>
      </div>

      <div className='relative bottom-80 mr-80 '>
        <h1 className='text-xl text-white sm:w-44 sm:text-wrap lg:text-nowrap sm:text-'>ما هر روز کلی مطالب آموزشی جالب در اینستاگراممون منتشر می‌کنیم!</h1>
      </div>
      <button className="btn btn-primary text-black bg-[#FFC224] hover:bg-[#FFC224]  relative bottom-[305px] 
      right-[70%] md:hidden sm:mt-80 sm:w-36   ">مشاهده پست های اینستاگرام </button>

      


      

    </div>

      
    </div>
  )
}

export default index

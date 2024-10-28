import React from 'react'

const index = () => {
  return (
    <div className=' flex flex-wrap W-[100%] h-[230px] mt-[85px]'> 

    <div className="border-2 w-[89%] h-[170px] bg-[#5751E1] relative top-6 right-[82px] rounded-2xl">

      <div className='hidden w-[200px] h-[410px] mr-[1000px] mt-  lg:block'>
        <img src='./line.png'/>
      </div>
      
      <div className='hidden w-[250px] h-[410px] mr-20 -mt-[325px] lg:block'>
        <img src='./shape.png'/>
      </div>

      
      <div className='hidden w-[200px] h-[410px] mr-[80px] -mt-[520px]  lg:block'>
        <img src='./usershape.png'/>
      </div>

      <div className='relative bottom-80 right-[25%] '>
        <h1 className='text-xl text-white'>ما هر روز کلی مطالب آموزشی جالب در اینستاگراممون منتشر می‌کنیم!</h1>
      </div>
      <button className="btn btn-primary text-black bg-[#FFC224] hover:bg-[#FFC224]  relative bottom-[305px] right-[70%]">مشاهده پست های اینستاگرام </button>
      {/* <button className="btn btn-wide ">مشاهده پست های اینستاگرام </button> */}

      


      

    </div>

      
    </div>
  )
}

export default index

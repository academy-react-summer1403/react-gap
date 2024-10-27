import React from 'react'

const index = () => {
  return (
    <div className=' border-2 flex flex-wrap W-[100%] h-[200px] mt-[85px]'> 

    <div className="border-2 w-[89%] h-[150px] bg-gradient-to-r from-[#4f83c4]  to-[rgb(209,218,232)] relative top-6 right-[82px] rounded-2xl">

      <div className='hidden  h-[500px] mr-8 -mt-16  lg:block'>
        <img src='./phone.png'/>
      </div>
      <div className='relative bottom-96 right-[25%]'>
        <h1 className='text-xl'>ما هر روز کلی مطالب آموزشی جالب در اینستاگراممون منتشر می‌کنیم!</h1>
      </div>

      <button className="btn btn-wide bg-[#ffff] relative bottom-[410px] right-[75%]">مشاهده پست های اینستاگرام </button>

      


      

    </div>

      
    </div>
  )
}

export default index

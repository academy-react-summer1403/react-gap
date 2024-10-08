import React from 'react'

const Footer = () => {
  return (
    <div className='w-screen h-[442px] bg-[#A4F6DE;]'>

      <div className='border-t-2 border-t-[#807A7A]  w-[1460px] h-[100px] relative top-[341px] -left-[20px] '></div>

      <div className='flex justify-start gap-[80px] h-[342px] relative -top-[100px]'>
        <div className='w-[327px] h-[252px] mt-20 mr-36'>
          <h1 className='font-inter text-3xl text-[#444444;]'> خدمات </h1>
          <div className='w-[327px] h-[200px]  mt-5 ' >

          <h2 className='text-2xl text-[#444444;] m-2'>آموزش رایگان </h2>
          <h2 className='text-2xl text-[#444444;] m-2'> مشاوره رایگان </h2>
          <h3 className='text-2xl text-[#444444;] m-2'> فرصت های شغلی </h3>

          </div>
        </div>


        <div className='w-[300px] h-[142px] mt-20'>
          <h1 className='font-inter text-3xl text-[#444444;]'>آموزشگاه  </h1>
          <div className='w-[327px] h-[200px]  mt-5 ' >
          <h2 className='text-2xl text-[#444444;] m-2'> درباره ما </h2>
          <h2 className='text-2xl text-[#444444;] m-2'> ارتباط با ما </h2>
          <h3 className='text-2xl text-[#444444;] m-2'>  قوانین پژوهشگاه  </h3>

          </div>


        </div>


        <div className='flex justify-center flex-wrap w-[700px] h-[142px] mt-20'>
        <h1 className='text-2xl text-[#444444;] m-2'> اخبار آموزشگاه </h1>
        <h2 className='text-2xl text-[#444444;] m-2'> برای دریافت اخبار بروز آموزشگاه ایمیل خود را وارد کنید. </h2>

        <input className='w-[339px] h-[20px ]rounded-lg relative top-3' type="text" name="" id="" placeholder=' example@gmail.com' />

        <button className=' bg-[#41A789;] relative top-3 text-[#ffffff] w-24 rounded-lg'> ثبت  </button>


        </div>



       
      </div>

       
      
    </div>
  )
}

export default Footer

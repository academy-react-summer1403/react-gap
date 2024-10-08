import React from 'react'
import Filter from '../../../component/Cours/Filter'

const cours = () => {
  return (
    <div>
        <div className='flex-auto w-screen  flex-wrap-reverse'>
            <div className=' not-italic	 text-xl my-24 text-center '> لیست دوره ها </div>
            <div className=' border-2 h-[150px] w-[90%] bg-[#FBF6F6]  rounded-3xl mr-[80px] -mt-[80px] '>
              <button className='border-2 h-[60px] w-[140px] rounded-3xl border-color:[#158B68] bg-[#ffff] relative mt-[60px] mr-[80px]'>  </button>
              <button className='border-2 border-color:[#158B68] h-[60px] w-[140px] rounded-3xl bg-[#ffff] relative '> مرتب سازی</button>
              <input className='border-2 h-[40px] w-[440px] border-color:[#158B68] bg-[#ffff] relative mr-[80px] ms-[490px]' />
            </div>
<Filter/>
            <div className='flex  gap-5 flex-wrap-reverse mx-0'>
            <div className='border-2 h-[506px] w-[299px] bg-[#ffff]  rounded-3xl  mr-[90px] mb-[890px] shadow-md'></div>
            <div className='border-2 h-[1400px] w-[1036px] bg-[#ffff] flex  flex-wrap-reverse justify-center gap-[20px]  mb-[90px]rounded-3xl shadow mr-[10px] mt-[10px]'>
              <div className='flex  flex-wrap-reverse justify-center gap-[20px]  mb-[50px]'>
              <div className='border-2 h-[406px] w-[259px] bg-[#ffff]  rounded-3xl'></div>
              <div className='border-2 h-[406px] w-[259px] bg-[#ffff]  rounded-3xl'></div>
              <div className='border-2 h-[406px] w-[259px] bg-[#ffff]  rounded-3xl'></div>
              <div className='border-2 h-[406px] w-[259px] bg-[#ffff]  rounded-3xl'></div>
              <div className='border-2 h-[406px] w-[259px] bg-[#ffff]  rounded-3xl'></div>
              <div className='border-2 h-[406px] w-[259px] bg-[#ffff]  rounded-3xl'></div>
              <div className='border-2 h-[406px] w-[259px] bg-[#ffff]  rounded-3xl'></div>
              <div className='border-2 h-[406px] w-[259px] bg-[#ffff]  rounded-3xl'></div>
              <div className='border-2 h-[406px] w-[259px] bg-[#ffff]  rounded-3xl'></div>
              </div>

            </div>
            </div>
            <div className=' not-italic	 text-xl my-24 text-center '> دوره های برتر
              <h1> ساختن دنیایی بهتر، یک دوره در یک زمان </h1>
            </div>
            <div className='border-2 h-[506px] w-[90%] bg-[#ffff] rounded-3xl flex flex-wrap-reverse justify-center shadow-md -mt-[70px] mr-[55px]'>

            </div>
            <button className='border-2 h-[60px] w-[240px] rounded-3xl border-color:[#158B68] bg-[#12926C] relative mt-[24px] mr-[630px]'>مشاهده دوره های بیشتر </button>
            



    

          


        </div>
    </div>
  )
}

export default cours
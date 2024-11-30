import React from 'react'
import QuestionUsual from "../../../component/DetailCourseHolder/QuestionUsual"

const index = () => {
  return (
    <div className='w-[80%] mx-auto mt-10 shadow-2xl'>
        <div className=''>
          <div className="div">
            <img src="../xxx222.png" className=''/>
          </div>
            <h1 className='text-2xl'>
            سوالات متداول 
            </h1>
    
            <h2 className='mt-3 mr-3 text-[rgb(121,137,158)] text-lg'>
            برای شروع مسیر یادگیری یک زبان یا فریمورک برنامه نویسی ممکن است سوالات مختلفی در ذهن شما شکل گرفته باشد، در اینجا ما سعی کرده‌ایم به تعدادی از این سوالات پاسخ دهیم. 
            </h2>
            <QuestionUsual/>
           
        </div>
     
    </div>
  )
}

export default index

import React from 'react'
import QuestionUsual from "../../../component/DetailCourseHolder/QuestionUsual"
const index = () => {
  return (
    <div className='w-[80%] h-[560px] mx-auto bg-white rounded-lg shadow-2xl'>
        <div className='w-[90%] h-[380px] mx-auto bg-white'>
            <h1 className='text-2xl'>
            سوالات متداول 
            </h1>
            <QuestionUsual/>
        </div>
     
    </div>
  )
}

export default index

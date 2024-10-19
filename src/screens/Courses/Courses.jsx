import React from 'react'

import CardCours from '../../component/Cours/CardCours'
import Filter from '../../component/Cours/Filter'

import BarCourses from './BarCourses'
import SliderCourses from './SliderCourses'



const Courses = () => {
  return (
    <div>
      <BarCourses/>

  
      
      <div className=''>
        <div className=' flex  gap-5 flex-wrap-reverse '>
          <div className=' h-[506px] w-[300px] bg-[#FBF6F6]  rounded-3xl  mr-[50px] mb-[2090px] shadow-md'>
            <Filter />
          </div>
          <div>
            <CardCours/>
            <SliderCourses/>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Courses
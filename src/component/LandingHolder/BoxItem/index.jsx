import React from 'react'

const index = () => {
  return (
    <div className='h-[600px] bg-white '>
      <div className="border-transparent  w-[70%] h-[380px] flex justify-center flex-wrap mt-16 mr-[15%] gap-4">
        <div className="w-[35%] h-[300px] mt-28">
          <img src="./about us.png" alt="Img"/>
        <div className="w-[25%] h-[120px] relative bottom-[380px] right-[220px]">
        <img src="./live.png" alt="Img"/>
        </div>
          
        </div>
        <div className="w-[40%] h-[400px]">
          <button className=' shadow w-[160px] h-[28px] relative top-3 right-8 rounded-lg bg-[#EFEEFE]'> درباره ما بیشتر بدانید</button>
          <div className="div">
          <h1 className=' text-2xl font-bold relative top-8 right-8'>هزاران</h1>
            <img className='w-[100px] relative right-28 top- ' src='./Vector.png' alt='img'/>
            <h1 className='text-white font-bold relative right-32 bottom-8'>دوره های</h1>
            <h1 className='text-2xl font-bold relative right-8 bottom-6'>برتر اکنون در یک مکان</h1>
            <div className="div">
            <p className='w-[90%] h-[70px] text-xs relative right-8 bottom-3'>صندوق ورودی مشترک بصری Groove این کار را برای اعضای تیم آسان می کند
سازماندهی، اولویت بندی و. در این قسمت از Smashing Pod ما هستیم
صحبت در مورد پایه پلتفرم وب.</p>
            </div>

            <div className=""> 
            <p className='text-[12px] font-bold relative bottom-4 right-14'>بهترین مربیان</p>
            <button className='border-2 border-black w-6 h-6 rounded-full bg-[#FFC224] relative bottom-10 right-6 shadow'></button>
             </div>

             <div className=""> 
            <p className='text-[12px] font-bold relative bottom-6 right-14'> از هر کجا به کلاس خود دسترسی داشته باشید</p>
            <button className='border-2 border-black w-6 h-6 rounded-full bg-[#FFC224] relative bottom-12 right-6 shadow'></button>
             </div>

             <div className=""> 
            <p className='text-[12px] font-bold relative bottom-6 right-14'> برنامه دوره ای انعطاف پذیر</p>
            <button className='border-2 border-black w-6 h-6 rounded-full bg-[#FFC224] relative bottom-12 right-6 shadow'></button>
             </div>
            
            <button className='border-2 border-black  w-[208px] h-[33px] shadow rounded-lg bg-[#5751E1] relative bottom-8 right-6'> <span className='text-[#FFFFFF]'> رایگان آزمایش کنید </span></button>
            </div>
            
            
         
          
        </div>
      </div>
      
      
    </div>
  )
}

export default index

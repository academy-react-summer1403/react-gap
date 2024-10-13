import React, { useState } from 'react'

const CardCours = () => {
     const [List, setList] = useState([
        
        {id:1, name:'item 1', title:'آشنایی با برنامه نویسی با وردپرس', price:'300000 تومان', desc:'', pic:'./icons8.png' , icon:'./icons9.png' , star:'./icons10.png'},
        {id:2, name:'item 2', title:'آشنایی با برنامه نویسی با وردپرس', price:'300000 تومان', desc:'' , pic:'./icons8.png' , icon:'./icons9.png' ,star:'./icons10.png'},
        {id:3, name:'item 3', title:'آشنایی با برنامه نویسی با وردپرس', price:'300000 تومان', desc:'' , pic:'./icons8.png' , icon:'./icons9.png' , star:'./icons10.png'},
        {id:4, name:'item 4', title:'آشنایی با برنامه نویسی با وردپرس', price:'300000 تومان', desc:'' , pic:'./icons8.png' , icon:'./icons9.png' , star:'./icons10.png'},
        {id:5, name:'item 5', title:'آشنایی با برنامه نویسی با وردپرس', price:'300000 تومان', desc:'' , pic:'./icons8.png' , icon:'./icons9.png' , star:'./icons10.png'},
        {id:6, name:'item 6', title:'آشنایی با برنامه نویسی با وردپرس', price:'300000 تومان', desc:'' , pic:'./icons8.png' , icon:'./icons9.png' , star:'./icons10.png'},
        {id:7, name:'item 6', title:'آشنایی با برنامه نویسی با وردپرس', price:'300000 تومان', desc:'' , pic:'./icons8.png' , icon:'./icons9.png' , star:'./icons10.png'},
        {id:8, name:'item 6', title:'آشنایی با برنامه نویسی با وردپرس', price:'300000 تومان', desc:'' , pic:'./icons8.png' , icon:'./icons9.png' , star:'./icons10.png'},
        {id:9, name:'item 6', title:'آشنایی با برنامه نویسی با وردپرس', price:'300000 تومان', desc:'' , pic:'./icons8.png' , icon:'./icons9.png' , star:'./icons10.png'},
        
    ]);
    
  return (
    <div className='border-2 w-[1000px]  mt-[60px] rounded-3xl shadow-xl '>
        <div className='w-[1000px] flex flex-wrap-reverse justify-center gap-[20px] mt-[80px]'> 
        {List.map((item, index)=>{
            return(
                 
                <div key={index} className='border-2 h-[435px] w-[250px] bg-[#FBF6F6] rounded-3xl  mb-20'>

                   

                 
                    <div className='w-[100px] h-[100px] mt-[-60px] mr-[70px]'>
                    <img  src={item.pic} alt="" className='icons8.png'/>
                    </div>

                    <div className='h-[28px] w-[90px] bg-[#BFF4E4] rounded-[8px] relative mr-[10px] mt-[20px]'> <span className='text-xs text-justify'>وضعیت دوره </span></div>


                    <div className=' w-[50px] h-[40px] relative mr-[180px] -mt-[30px]'>
                    <img  src={item.icon} alt="" className='icons9.png'/>
                    </div>
                    <div className='h-[32px] w-[259px] text-xl rounded-3xl mb-[80px] mr-[10px]'> آشنایی با برنامه نویسی با وردپرس </div>

                    <div className=' w-[220px] h-[40px] relative -mt-[30px] mr-[10px] '>
                    <img  src={item.star} alt="" className='icons10.png'/>
                    </div>

                    <div className='text-xs text-[#41A789] relative mr-[10px]'> 50 سخنرانی (190 ساعته )</div>

                    <div className='text-xs text-[#6D6767] relative mt-[20px] mr-[10px]'><span>لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود </span></div>
                    <div className='border w-[90%] relative mr-[18px] mt-[10px] border-[#5BE1B9]'></div>
                    
                    <div className='text-[14px] text-[#12926C] relative mt-[10px] mr-[10px]'>: هزینه تمام دوره </div>
                    <div className='text-[14px] text-[#E11818] relative -mt-[10px] mr-[145px]'> 3.000.000 </div>
                    <div className='text-[14px] text-[#E11818] relative -mt-[20px] mr-[210px]'> تومان </div>

                    <button className='border-2 border-[#5BE1B9] h-[40px] w-[100px] bg-[#ffff] rounded-[8px] relative mr-[10px] mt-[20px]'> جزئیات دوره </button>
                    <button className='border-2 border-[#5BE1B9] h-[40px] w-[100px] bg-[#5BE1B9] rounded-[8px] relative mr-[10px] mt-[20px]'>  رزرو دوره </button>

                   

                       </div>

              
            )
        })}
  </div>
      
    </div>
  )
}


export default CardCours

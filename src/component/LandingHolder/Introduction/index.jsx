import React, { useState } from "react";

const index = () => {
  const [Introduction, setIntroduction] = useState([
    {id:1, name:' اولیا میا', 
      picture:"./user1.png" ,
      title:'طراحی وب سایت ' ,
      iconinstagram:'./instagram.png',
      iconwhatsup:'./whatsup.png',
      icontwitter:'./twitter.png',
      iconfacebook:'./facebook.png',
      },

      {id:2, name:' اولیا میا', 
        picture:"./user1.png" ,
        title:'طراحی وب سایت ' ,
        iconinstagram:'./instagram.png',
        iconwhatsup:'./whatsup.png',
        icontwitter:'./twitter.png',
        iconfacebook:'./facebook.png',
        },


        {id:3, name:' اولیا میا', 
          picture:"./user1.png" ,
          title:'طراحی وب سایت ' ,
          iconinstagram:'./instagram.png',
          iconwhatsup:'./whatsup.png',
          icontwitter:'./twitter.png',
          iconfacebook:'./facebook.png',
          },

          {id:4, name:' اولیا میا', 
            picture:"./user1.png" ,
            title:'طراحی وب سایت ' ,
            iconinstagram:'./instagram.png',
            iconwhatsup:'./whatsup.png',
            icontwitter:'./twitter.png',
            iconfacebook:'./facebook.png',
            },
  ]);
  return (
    <div className="border-2 w-auto h-[450px] flex flex-wrap justify-center gap-1 bg-[#FFFF] mt-8">
    <div className=" w-[25%] h-[450px] relative left-28 mt-10">
    <button className="btn no-animation bg-[#EFEEFE] text-[#5751E1] relative top-6 right-6 rounded-3xl hover:bg-[#5751E1] hover:text-[#ffff]">اساتید حرفه ای کد دات    </button>
    <h1 className="relative top-10 right-6 font-bold text-2xl">کلاس برتر ما </h1>
    <h1 className="relative top-10 right-6 font-bold text-2xl">و مربیان خبره در یک مکان</h1>
    <div className="div">
    <p className="w-[80%] h-[10%] relative top-16 right-6 text-xs">
    نوشتن کار جالبیه که از هزاران سال همراه ما بوده و کمک کرده تا همیشه به روز باشیم، ما در راکت فضای رو به شکلی آماده کردیم تا شما بتونید ایده‌ها و مطالب جالب حوزه برنامه‌نویسی رو در اختیار هزاران برنامه‌نویس عضو کد دات قرار بدید.

  </p>
    </div>
    <button className="btn no-animation  w-48 h-8 hover:bg-[#2b2a44] bg-[#5751E1] text-white relative top-24 right-6 rounded-3xl">همه مربیان را ببینید</button>
    
    </div>
    <div className="border- flex flex-wrap justify-center w-[45%] h-[450px] relative left-10 mt-5">
      {Introduction.map((item) =>{
        return(
          <div className="  w-1/2 h-1/2">
            <div className=" w-1/2 h-40 rounded-full bg-[#F7F7F9] ">
            <img src="./user3.png" alt='img' />
            </div>
            <h1 className=" text-xs font-bold relative bottom-24 right-48">
              {item.name}
            </h1>

            <h1 className=" text-xs relative bottom-24 right-48 text-[#5751E1]">
              {item.title}
            </h1>
            <div className=" shadow border-2 w-8 h-8 rounded-full relative bottom-20 right-44 ">
            <img className="relative top-1 right-[5px]" src="./instagram.png" alt='img' />
            </div>

            <div className=" shadow border-2 w-8 h-8 rounded-full relative bottom-28 right-[210px] ">
            <img className="relative top-1 right-[5px]" src="./whatsup.png" alt='img' />
            </div>

            <div className=" shadow border-2 w-8 h-8 rounded-full relative bottom-36 right-[248px] ">
            <img className="relative top-1 right-[5px]" src="./twitter.png" alt='img' />
            </div>

            <div className=" shadow border-2 w-8 h-8 rounded-full relative bottom-44 right-[285px] ">
            <img className="relative top-1 right-[5px]" src="./facebook.png" alt='img' />
            </div>

          </div>
        )
      })}
      
    </div>
     
    </div>
  );
};

export default index;

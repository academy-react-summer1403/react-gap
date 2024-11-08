import React from "react";

const index = () => {
  return (
    <div className="flex flex-wrap justify-center max-sm:mt-10">
      <div>
        <div className="text-center m-20 mr-[300px]max-sm:w-[100%] max-sm:m-auto">
          <h1 className="text-[#22445D] text-4xl dark:text-white max-sm:text-2xl "> 
          چیزی که ما ارائه میدیم   </h1>
          <p className="text-[#22445D] text-2xl font-normal mt-2  dark:text-white  max-sm:text-2xl">
            {" "}
              یادگیری مهارت های جدید {" "}
          </p>
          <p className="text-[#22445D] text-2xl font-normal mt-2 dark:text-white max-sm:text-2xl">
            {" "}
            در زمان و مکانی که تو دوست داری  {" "}
          </p>

          <p className="text-2xl max-sm:text-2xl max-sm:text-orange-500"> داستان برنامه نویس شدنت از اینجا شروع میشه </p>
        </div>
      </div>
      <div className="w-44 h-8 relative left-[800px] top-[200px] max-sm:hidden">
        <img src="./flash4.png"/>
      </div>

      <div className="flex flex-wrap gap-1 w-[75%] h-[250px] justify-center md:justify-around mx-auto mb-10">
     

        <div className="border-2 w-[350px] h-[170px] rounded-2xl bg-[#C9E4E9] max-sm:mt-9">
          <img className="relative right-[277px] top-3 w-10 h-8 max-sm:hidden" src="./starbox.png" alt="img"/>
          <img className="relative right-[27px] top-3 w-14 h-14 " src="./vector1.png" alt="img"/>
          <h1 className="relative bottom-7 right-24 dark:text-black"> اساتید با تجربه </h1>
          <p className="text-xs relative right-4 dark:text-black"> معلمان متخصص با دانش و تجربه خود، راهنمایی‌های موثری برای دانش‌آموزان ارائه می‌دهند. </p>
        </div>
          <div className="border-2 w-[350px] h-[170px] rounded-2xl bg-[#C8C1ED] max-sm:mt-4">
          <img className="relative right-[277px] top-3 w-10 h-8 max-sm:hidden" src="./starbox.png" alt="img"/>
          <img className="relative right-[27px] top-3 w-14 h-14 " src="./vector2.png" alt="img"/>
          <h1 className="relative bottom-7 right-24 dark:text-black">   دوره های موثر </h1>
          <p className="text-xs relative right-4 dark:text-black"> دوره‌های مؤثر، توانمندی‌های یادگیرندگان را به‌طرز چشم‌گیری بهبود می‌بخشند. </p>
          </div>
          <div className="border-2 w-[350px] h-[170px] rounded-2xl bg-[#FFF7E2] max-sm:mt-4">
          <img className="relative right-[277px] top-3 w-10 h-8 max-sm:hidden" src="./starbox.png" alt="img"/>
          <img className="relative right-[27px] top-3 w-14 h-14" src="./vector3.png" alt="img"/>
          <h1 className="relative bottom-7 right-24 dark:text-black">  دریافت گواهینامه </h1>
          <p className="text-xs relative right-4 dark:text-black">  دریافت گواهینامه نشان‌دهنده توانایی و تخصص فرد در یک حوزه خاص است. </p>
          </div>
    
      
      </div>
    </div>
  );
};

export default index;

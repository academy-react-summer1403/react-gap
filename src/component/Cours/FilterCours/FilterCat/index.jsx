import React from "react";
import SourtBy from "./Sortby/SourtBy";
import CatCourses from "./CatCourses/CatCourses";

const App = () => (
  <div className=" -mr-3 w-[100%]  h-[200px] mx-auto">
    <div className=" flex flex-wrap justify-center border-2 bg-[#fff]  w-[90%] h-24 mr-5 ">
      <h1 className=" mt-7 ml-6 font-bold"> دوره‌های جاری </h1>
      <input type="checkbox" className="toggle mt-7" defaultChecked />
      <h2 className="mt-7 mr-6 font-bold text-[#ccc]">آرشیو شده </h2>
    </div>

    <div className="w-[90%] h-[200px] flex flex-wrap  mr-5 mt-5 bg-[#fff]">
      <h1 className=" mt-7 mr-8 font-bold text-xl "> نوع دوره </h1>
      {/* <div className="border w-[80%] relative mr-[18px] mb-[10px] border-[#5BE1B9]"></div> */}

      <div className=" join join-vertical w-full -mt-2">
          <div className=" collapse collapse-arrow join-item">
            <input className="-mt-24"  type="radio" name="my-accordion-4" defaultChecked />
            
            <div className="collapse-content ">
              
                <div className="text-right mr-[30px]">
                  <input type="radio" name="ca" />
                  <lable className="text-center text-[14px] indent-1 inline-block">
                    <span className="mr-[10px] font-normal ">  رایگان </span>
                  </lable>
                </div>

                <div className="text-right mr-[30px]">
                  <input type="radio" name="ca" />
                  <lable className="text-center text-[14px] inline-block ">
                    <span className="mr-[10px] font-normal "> فقط نقدی  </span>
                  </lable>
                </div>

                <div className="text-right mr-[30px]">
                  <input type="radio" name="ca" />
                  <lable className="text-center text-[14px] inline-block ">
                    <span className="mr-[10px] font-normal ">
                      {" "}
                      نقدی و اعضای ویژه {" "}
                    </span>
                  </lable>
                </div>
            </div>
          </div>
          </div>      
    </div>
    <SourtBy/>
    <CatCourses/>





    




  </div>
);
export default App;

import React from "react";
import { LuFilterX } from "react-icons/lu";

const Filter = () => {

  

  return (
    <div className=" border-2 h-[686px] w-[310px] bg-[#FBF6F6]  rounded-3xl  mr-[40px] mt-20 shadow-md">
      <div className=" text-center text-xl mt-8">
        <h1 className=" ">فیلترها</h1>
      </div>

      <ul className="mt-9 transition list-none">
        <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow join-item">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium ">
              {" "}
              دسته بندی
            </div>
            <div className="border w-[80%] relative mr-[18px] mb-[10px] border-[#5BE1B9]"></div>
            <div className="collapse-content ">
              <li className="relative m-[15px 0] overflow-hidden transition flex flex-col border border-[#5BE1B9] h-[100px] w-[95%] -mr-[1px] mt-[10px] rounded-2xl">
                <div className="text-right mr-[30px]">
                  <input type="radio" name="ca" />
                  <lable className="text-center text-[14px] indent-1 inline-block">
                    <span className="mr-[10px] font-normal "> فرانا اند </span>
                  </lable>
                </div>

                <div className="text-right mr-[30px]">
                  <input type="radio" name="ca" />
                  <lable className="text-center text-[14px] inline-block ">
                    <span className="mr-[10px] font-normal "> بک اند </span>
                  </lable>
                </div>

                <div className="text-right mr-[30px]">
                  <input type="radio" name="ca" />
                  <lable className="text-center text-[14px] inline-block ">
                    <span className="mr-[10px] font-normal ">
                      {" "}
                      جاوا اسکریپت{" "}
                    </span>
                  </lable>
                </div>
              </li>
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border-base-300 ">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              نوع برگزاری
            </div>
            <div className="border w-[80%] relative mr-[18px] mb-[10px] border-[#5BE1B9]"></div>
            <div className="collapse-content">
              <div className=" flex flex-col border border-[#5BE1B9] h-[100px] w-[95%] -mr-[1px] mt-[10px] rounded-2xl">
                <div className="text-right mr-[30px]">
                  <input type="radio" name="ca" />
                  <lable className="text-center text-[14px] indent-1 inline-block">
                    <span className="mr-[10px] font-normal "> حضوری </span>
                  </lable>
                </div>

                <div className="text-right mr-[30px]">
                  <input type="radio" name="ca" />
                  <lable className="text-center text-[14px] inline-block ">
                    <span className="mr-[10px] font-normal "> آنلاین </span>
                  </lable>
                </div>

                <div className="text-right mr-[30px]">
                  <input type="radio" name="ca" />
                  <lable className="text-center text-[14px] inline-block ">
                    <span className="mr-[10px] font-normal ">
                      {" "}
                      آنلاین-حضوری
                    </span>
                  </lable>
                </div>
              </div>
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border-base-300 ">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium ">سطح دوره</div>
            <div className="border w-[80%] relative mr-[18px] mb-[10px] border-[#5BE1B9]"></div>
            <div className="collapse-content">
              <li className="relative m-[15px 0] overflow-hidden transition flex flex-col border border-[#5BE1B9] h-[100px] w-[95%] -mr-[1px] mt-[10px] rounded-2xl">
                <div className="text-right mr-[30px]">
                  <input type="radio" name="ca" />
                  <lable className="text-center text-[14px] indent-1 inline-block">
                    <span className="mr-[10px] font-normal ">مبتدی </span>
                  </lable>
                </div>

                <div className="text-right mr-[30px]">
                  <input type="radio" name="ca" />
                  <lable className="text-center text-[14px] inline-block ">
                    <span className="mr-[10px] font-normal "> پیشرفته </span>
                  </lable>
                </div>
              </li>
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border-base-300 ">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">قیمت</div>
            <div className="collapse-content">
              <input
                type="range"
                min={0}
                max="100"
                value="40"
                className="range range-accent"
              />
            </div>
          </div>
        </div>

        <div className="border w-[80%] relative mr-[18px] mb-[10px] border-[#5BE1B9]"></div>

        <button className="">
          <spn className="font-sans my-0.5 text-xs font-normal py-px-[20px] "></spn>
        </button>
        <button className="btn btn-outline btn-accent h-[30px] w-36 relative mr-[80px] mt-[20px] hover:animate-bounce">
          {" "}
          پاک کردن فیلترها{" "}
        </button>
      </ul>
    </div>
  );
};

export default Filter;



<div className=" border-2 w-[90%] h-[200px] flex flex-wrap  mr-5 mt-5 bg-[#fff]">
<h1 className=" mt-7 mr-8 font-bold text-xl ">  مرتب سازی بر اساس </h1>
{/* <div className="border w-[80%] relative mr-[18px] mb-[10px] border-[#5BE1B9]"></div> */}

<div className=" join join-vertical w-full -mt-2">
    <div className=" collapse collapse-arrow join-item">
      <input className="-mt-24"  type="radio" name="my-accordion-4" defaultChecked />
      
      <div className="collapse-content ">
        
          <div className="text-right mr-[30px]">
            <input type="radio" name="ca" />
            <lable className="text-center text-[14px] indent-1 inline-block">
              <span className="mr-[10px] font-normal ">  جدیدترین </span>
            </lable>
          </div>

          <div className="text-right mr-[30px]">
            <input type="radio" name="ca" />
            <lable className="text-center text-[14px] inline-block ">
              <span className="mr-[10px] font-normal ">  در حال برگزاری  </span>
            </lable>
          </div>

          <div className="text-right mr-[30px]">
            <input type="radio" name="ca" />
            <lable className="text-center text-[14px] inline-block ">
              <span className="mr-[10px] font-normal ">
                {" "}
                 تکمیل ظبط شده ها   = {" "}
              </span>
            </lable>
          </div>


          <div className="text-right mr-[30px]">
            <input type="radio" name="ca" />
            <lable className="text-center text-[14px] inline-block ">
              <span className="mr-[10px] font-normal ">
                {" "}
                   مخصوص ناشنوایان     = {" "}
              </span>
            </lable>
          </div>


          <div className="text-right mr-[30px]">
            <input type="radio" name="ca" />
            <lable className="text-center text-[14px] inline-block ">
              <span className="mr-[10px] font-normal ">
                {" "}
                  قدیمی ترین      = {" "}
              </span>
            </lable>
          </div>
      </div>
    </div>
    </div>



    
</div>
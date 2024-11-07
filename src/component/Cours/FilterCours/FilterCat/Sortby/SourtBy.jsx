import axios from 'axios';
import React, { useEffect, useState } from 'react'

const SourtBy = () => {

 


      
      return (
        <div>
        <div className=" w-[90%] h-[390px] flex flex-wrap  mr-5 mt-5 bg-[#fff]">

        <h1 className=" mt-7 mr-8 font-bold text-xl ">  حضوری یا غیر حضوری </h1>


        <div className='w-28 h-[210px] flex flex-wrap justify-start -mr-44 mt-16 '>
        <div className="form-control ">
      <label className="label cursor-pointer">
        <input type="radio"
         
        name="radio-10" className="radio checked:bg-black" defaultChecked />
        <span className="label-text mr-2"> حضوری </span>
      </label>
    </div>

    <div className="form-control">
      <label className="label cursor-pointer">
        <input type="radio" name="radio-10" className="radio checked:bg-black" defaultChecked />
        <span className="label-text mr-2"> آنلاین  </span>
      </label>
    </div>

    <div className="form-control">
      <label className="label cursor-pointer">
        <input type="radio" name="radio-10" className="radio checked:bg-black" defaultChecked />
        <span className="label-text mr-2 ">  حضوری - آنلاین</span>
      </label>
    </div>

    {/* <div className="form-control">
      <label className="label cursor-pointer">
        <input type="radio" name="radio-10" className="radio checked:bg-black" defaultChecked />
        <span className="label-text mr-2">   مخصوص ناشنوایان </span>
      </label>
    </div> */}

        </div>

          {/* <div className="div">
          <h1 className=" mt-80 -mr-28 font-bold text-xl ">  سطح دوره </h1>
          <div className='w-28 h-[210px] flex flex-wrap justify-start -mr-28 mt-5 '>
        <div className="form-control ">
      <label className="label cursor-pointer">
        <input type="radio"
         
        name="radio-10" className="radio checked:bg-black" defaultChecked />
        <span className="label-text mr-2"> مبتدی </span>
      </label>
    </div>

    <div className="form-control">
      <label className="label cursor-pointer">
        <input type="radio" name="radio-10" className="radio checked:bg-black" defaultChecked />
        <span className="label-text mr-2"> متوسط </span>
      </label>
    </div>

    <div className="form-control">
      <label className="label cursor-pointer">
        <input type="radio" name="radio-10" className="radio checked:bg-black" defaultChecked />
        <span className="label-text mr-2 ">   پیشرفته </span>
      </label>
    </div>

    <div className="form-control">
      <label className="label cursor-pointer">
        <input type="radio" name="radio-10" className="radio checked:bg-black" defaultChecked />
        <span className="label-text mr-2">   مخصوص ناشنوایان </span>
      </label>
    </div>

        </div>

          </div> */}

          
          

       








        

        

        </div>
          
        </div>
      )
    }

    export default SourtBy

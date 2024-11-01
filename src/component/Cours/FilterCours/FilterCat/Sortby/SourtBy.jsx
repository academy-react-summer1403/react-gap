import React from 'react'

const SourtBy = () => {
  return (
    <div>
    <div className=" w-[90%] h-[290px] flex flex-wrap  mr-5 mt-5 bg-[#fff]">
    <h1 className=" mt-7 mr-8 font-bold text-xl ">  مرتب سازی بر اساس </h1>


    <div className='w-28 h-[210px] flex flex-wrap justify-start -mr-44 mt-16 '>
    <div className="form-control ">
  <label className="label cursor-pointer">
    <input type="radio" name="radio-10" className="radio checked:bg-black" defaultChecked />
    <span className="label-text mr-2"> جدیدترین </span>
  </label>
</div>

<div className="form-control">
  <label className="label cursor-pointer">
    <input type="radio" name="radio-10" className="radio checked:bg-black" defaultChecked />
    <span className="label-text mr-2"> در حال برگزاری </span>
  </label>
</div>

<div className="form-control">
  <label className="label cursor-pointer">
    <input type="radio" name="radio-10" className="radio checked:bg-black" defaultChecked />
    <span className="label-text mr-2 ">   تکمیل ظبط شده ها </span>
  </label>
</div>

<div className="form-control">
  <label className="label cursor-pointer">
    <input type="radio" name="radio-10" className="radio checked:bg-black" defaultChecked />
    <span className="label-text mr-2">   مخصوص ناشنوایان </span>
  </label>
</div>

    </div>






    

    

    </div>
      
    </div>
  )
}

export default SourtBy

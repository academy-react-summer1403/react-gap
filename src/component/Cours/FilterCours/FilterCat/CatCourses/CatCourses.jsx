import React from 'react'

const CatCourses = () => {
  return (
    <div className="border-2 w-[90%] h-[510px] flex flex-wrap  mr-5 justify-start mt-5 bg-[#fff]">
            <h1 className=" mt-7 mr-8 font-bold text-xl ">  دسته بندی دوره ها </h1>
            <div className='w-28 h-[420px] flex flex-wrap justify-start -mr-40 mt-16 '>

            <div className="form-control ">
        <label className="label cursor-pointer">
            <input type="radio" name="radio-10" className="radio checked:bg-black" defaultChecked />
            <span className="label-text mr-2"> وردپرس </span>
        </label>
        </div>

        <div className="form-control">
        <label className="label cursor-pointer">
            <input type="radio" name="radio-10" className="radio checked:bg-black" defaultChecked />
            <span className="label-text mr-2">  فرانت اند </span>
        </label>
        </div>

        <div className="form-control">
        <label className="label cursor-pointer">
            <input type="radio" name="radio-10" className="radio checked:bg-black" defaultChecked />
            <span className="label-text mr-2 ">  بک اند </span>
        </label>
        </div>

        <div className="form-control">
        <label className="label cursor-pointer">
            <input type="radio" name="radio-10" className="radio checked:bg-black" defaultChecked />
            <span className="label-text mr-2">   ریکت  </span>
        </label>
        </div>


        <div className="form-control ">
        <label className="label cursor-pointer">
            <input type="radio" name="radio-10" className="radio checked:bg-black" defaultChecked />
            <span className="label-text mr-2">   ویو  </span>
        </label>
        </div>


        <div className="form-control">
        <label className="label cursor-pointer">
            <input type="radio" name="radio-10" className="radio checked:bg-black" defaultChecked />
            <span className="label-text mr-2">   PhP  </span>
        </label>
        </div>


        <div className="form-control">
        <label className="label cursor-pointer">
            <input type="radio" name="radio-10" className="radio checked:bg-black" defaultChecked />
            <span className="label-text mr-2">   java  </span>
        </label>
        </div>


        <div className="form-control">
        <label className="label cursor-pointer">
            <input type="radio" name="radio-10" className="radio checked:bg-black" defaultChecked />
            <span className="label-text mr-2">   پایتون  </span>
        </label>
        </div>


        <div className="form-control ">
        <label className="label cursor-pointer">
            <input type="radio" name="radio-10" className="radio checked:bg-black" defaultChecked />
            <span className="label-text mr-2">   سی شارپ  </span>
        </label>
        </div>


        <div className="form-control">
        <label className="label cursor-pointer">
            <input type="radio" name="radio-10" className="radio checked:bg-black" defaultChecked />
            <span className="label-text mr-2">   سی پلاس پلاس  </span>
        </label>
        </div>

                

            </div>
            




    

    

    </div>
      
  )
}

export default CatCourses
import React from 'react'


const Filter = () => {
  return (
    <div className=''>
      <h1 className='border-2 h-[20px] w-[90%] bg-[#FBF6F6] not-italic	 text-xl  text-center'>فیلترها</h1>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title text-xl font-medium">تکنولوژی</div>
        <div className="collapse-content">
        <div className=" text-xl font-medium">نوع برگذاری
          <div className='border-2 h-[120px] w-[90%] bg-[#FBF6F6] not-italic	 text-xl  text-center'>
            <lable className=''>حضوری</lable>
            <lable> آنلاین</lable>
            <lable>آنلاین-حضوری </lable>
          </div>
        </div>
        </div>
      </div>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">سطح دوره</div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse ">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">قیمت</div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
    </div>
  )
}

export default Filter

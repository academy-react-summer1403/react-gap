import React from "react";

const index = () => {
  return (
    <div className=" w-[61%] h-[600px] mr-24 bg-white mt-10 rounded-xl">
      <div role="tablist" className="tabs tabs-lifted w-96 mx-auto">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="نظرات کاربران"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <div>
            
            <div className="alert alert-info bg-slate-200 border-none w-[100%]">
              <span>New mail arrived.</span>
            </div>
            <div className="alert alert-success">
              <span>Message sent successfully.</span>
            </div>
          
          </div>
         
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="ثبت نظر"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          Tab content 2
        </div>
      </div>
    </div>
  );
};

export default index;

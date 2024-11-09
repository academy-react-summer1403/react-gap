import React, { useEffect, useState } from "react";
import SourtBy from "./Sortby/SourtBy";
import CatCourses from "./CatCourses/CatCourses";
import axios from "axios";

const arr =[
  {
      "id": 1,
      "levelName": "مبتدی"
  },
  {
      "id": 2,
      "levelName": "متوسط"
  },
  {
      "id": 3,
      "levelName": "پیشرفته"
  }
]

const index = ({ setSearchQuery, setLevelId ,setCourseTypeId }) => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://classapi.sepehracademy.ir/api/CourseLevel/GetAllCourseLevel"
      )
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (e) => {
    if (e.target.value) {
      setSearchQuery(`&Query=${e.target.value}`);
    }
  };

  return (
    <div className=" -mr-3 w-[100%]  h-[200px] mx-auto ">
      <input
        type="text"
        className="form-control border-2 w-[90%] h-10 mr-5 max-sm:hidden"
        placeholder="search"
        onChange={handleSearch}
      />
      <div className=" flex flex-wrap justify-center border-2 bg-[#fff]  w-[90%] h-24 mr-5  max-sm:hidden ">
        <h1 className=" mt-7 ml-6 font-bold "> دوره‌های جاری </h1>
        <input type="checkbox" className="toggle mt-7" defaultChecked />
        <h2 className="mt-7 mr-6 font-bold text-[#ccc]">آرشیو شده </h2>
      </div>

      <div className="w-[90%] h-[200px]   mr-5 mt-5 bg-[#fff] max-sm:hidden">
        <h1 className=" mt-7 mr-8 font-bold text-xl "> نوع دوره </h1>
        {/* <div className="border w-[80%] relative mr-[18px] mb-[10px] border-[#5BE1B9]"></div> */}

        {data?.map((item, index) => {
          return (
            <div>
              <input
              className="mr-8 mt-4"
                type="radio"
                name="level"
                value={item.id}
                id={item.id}
                onChange={(e) => setLevelId(e.target.value)}
              />
              <label htmlFor={item.id}> {item.levelName}</label>
            </div>
          );
        })}
        <div>
          <input
            className="mr-8 mt-4"
            type="radio"
            name="level"
            value=''
            id='d1'
            onChange={(e) => setLevelId(e.target.value)}
          />
          <label htmlFor='d1'> none</label>
        </div>
      </div>

      <SourtBy setCourseTypeId={setCourseTypeId} />
      <CatCourses />
    </div>
  );
};

export default index;

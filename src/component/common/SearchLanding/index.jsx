import React, { useEffect, useState } from "react";
import axios from "axios";

const index = () => {
  const [CourseList, setCourseList] = useState(null);
  const [SearchQuery, setSearchQuery] = useState("");
  const getList = async () => {
    const res = await axios.get(
      `https://classapi.sepehracademy.ir/api/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&SortingCol=Active&SortType=DESC&TechCount=0${SearchQuery}`
    );
    console.log(res.data.courseFilterDtos);
    setCourseList(res.data);
  };

  useEffect(() => {
    getList();
  }, [SearchQuery]);

  const handleSearch = (e) => {
    if (e.target.value) {
      setSearchQuery(`&Query=${e.target.value}`);
    } else {
      setSearchQuery("");
    }
  };

  return (
    <div className="max-sm:mt-3 m-10 max-sm:m-0 ">
      <label className="input input-bordered flex items-center w-96 gap-2  
      bottom-1 max-sm:w-[280px]  bg-slate-200 border-none ">
        <input
          type="text"
          className="grow"
          placeholder="دنبال چی میگردی؟"
          onChange={handleSearch}
        />
    
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"

          className="h-6 w-6 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
    </div>
  );
};

export default index;

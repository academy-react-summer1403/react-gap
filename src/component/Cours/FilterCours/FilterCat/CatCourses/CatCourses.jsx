import React, { useEffect, useState } from "react";
import http from '../../../../../core/Servises/interceptor';
const CatCourses = ({ handleTech }) => {
  const [CourseTech, setCourseTech] = useState(null);

  const getCourseTech = async () => {
    const res = await http.get("/Home/GetTechnologies");
    setCourseTech(res);
  };

  useEffect(() => {
    getCourseTech();
  }, []);

  return (
    <div className="border-2 w-[90%] h-[300px] flex flex-wrap  mr-5 justify-start mt-5 rounded-xl bg-[#fff] max-sm:hidden">
      <h1 className=" mt-7 mr-8 font-bold text-xl "> دسته بندی دوره ها </h1>
      <div className="w-28 h-32 flex flex-wrap justify-start -mr-40 mt-16 ">
        {CourseTech?.map((item, index) => {
          return (
            <div>
              <input
                className="mr-8 mt-6"
                type="radio"
                name="catcourses"
                value={item.id}
                id={item.id}
                onChange={(e) => handleTech(e.target.value)}
              />
              <label htmlFor={item.id}> {item.techName}</label>
            </div>
          );
        })}
        <div>
          <input
            className="mr-8 mt-4"
            type="radio"
            name="catcourses"
            value="0"
            id="d1"
            onChange={(e) => handleTech(e.target.value)}
          />
          <label htmlFor="d1"> none</label>
        </div>
      </div>
    </div>
  );
};

export default CatCourses;

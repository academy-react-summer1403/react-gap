
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from '../../core/Servises/interceptor';

const index = () => {
  const{id} = useParams()
  const [DetailCourses, setDetailCourses] = useState(null);
  const getCoursesDetail = async () => {
    const res = await http.get(`/Home/GetCourseDetails?CourseId= ${id} `);
    console.log(res)
    setDetailCourses(res);
  };

  useEffect(() => {
    getCoursesDetail();
  }, []);

  return (
    <div className="w-[100%] ">
      <div className="w-[80%] h-[400px] mx-auto mt-10 bg-white rounded-lg shadow-xl">
        <div className="w-[100%] h-[340px] rounded-lg flex">
          <div className=" w-[60%] h-[95%]">
            <div className="w-[95%] h-[50%] mt-8 mx-auto">
              <h1 className="text-3xl font-bold text-slate-700">{DetailCourses?.title}</h1>
              <br />
              <p className="text-gray-400">
                {DetailCourses?.describe}
              </p>
            </div>
            <div className="w-[100%] h-[30%] ">
            <h1 className="text-blue-600 mr-6">قیمت دوره: {DetailCourses?.cost}</h1>
            <h1 className="text-blue-600 mr-6">استاد دوره: {DetailCourses?.teacherName}</h1>
       

            </div>
          </div>
          <div className="w-[40%] h-[90%] mt-4 border-r-2">
           {DetailCourses?.imageAddress}
          </div>
        </div>
        <div className="w-[100%] h-[60px]">
        <button className="btn btn-info text-white w-[100%] h-[100%]">خرید دوره</button>
        </div>
      </div>






    </div>
  );
};

export default index;

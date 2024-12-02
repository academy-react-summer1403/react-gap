import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import http from "../../../../core/Servises/interceptor";
const index = () => {
  console.log(1)
  const [ReserveCourse, setReserveCourse] = useState(null);

  const getReserveCourse = async () => {
    const res = await http.get("/SharePanel/GetMyCoursesReserve");
    // console.log('reserve',res)
    setReserveCourse(res);
  };

  useEffect(() => {
    getReserveCourse();
  }, []);
  return (
    <div className="bg-white w-[1200px] h-[500px] rounded-xl mt-10 dark:bg-slate-900">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="dark:text-white text-lg">ردیف</th>
              <th className="dark:text-white text-lg">نام دوره</th>
              <th className="dark:text-white text-lg">نام استاد </th>
              <th className="dark:text-white text-lg"> نام ترم</th>
              <th className="dark:text-white text-lg"> حذف</th>
            </tr>
          </thead>
          <tbody>
            {ReserveCourse?.map(item => {
              return (
                <tr>
                  <th className="dark:text-white text-lg">1</th>
                  <td className="dark:text-white text-lg"> {item.courseName}</td>
                  <td className="dark:text-white text-lg">
                    {" "}
                    استاد مهدی اصغری{" "}
                  </td>
                  <td className="dark:text-white text-lg"></td>
                  <td className="dark:text-white text-lg">
                    <MdDelete size={30} className="relative right-16" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="join mt-14 mr-[50%]">
          <button className="join-item btn">1</button>
          <button className="join-item btn btn-active">2</button>
          <button className="join-item btn">3</button>
          <button className="join-item btn">4</button>
        </div>
      </div>
    </div>
  );
};

export default index;

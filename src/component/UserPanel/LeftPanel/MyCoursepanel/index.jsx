import React from "react";
import MiniSlider from "../../../../component/LandingHolder/MiniSlider"
const index = () => {
  return (
    <div className="bg-slate-200 w-[1300px] h-[100px] rounded-xl dark:bg-slate-900">
        <MiniSlider/>
        <div className="bg-white w-[1200px] h-[500px] rounded-xl mt-10 dark:bg-slate-900">

       
      <div className="overflow-x-auto mt-10 dark:bg-slate-900 rounded-3xl">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="dark:text-white text-lg">ردیف</th>
              <th className="dark:text-white text-lg">نام دوره</th>
              <th className="dark:text-white text-lg">نام استاد </th>
              <th className="dark:text-white text-lg"> نام ترم</th>
              <th className="dark:text-white text-lg">  جزییات دوره</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th className="dark:text-white text-lg">1</th>
              <td className="dark:text-white text-lg"> دوره ریکت نیتیو</td>
              <td className="dark:text-white text-lg"> استاد مهدی اصغری </td>
              <td className="dark:text-white text-lg"></td>
              <td><button>مشاهده</button></td>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th className="dark:text-white text-lg">2</th>
              <td className="dark:text-white text-lg"> دوره ریکت</td>
              <td className="dark:text-white text-lg"> محسن اسفندیاری</td>
              <td className="dark:text-white text-lg"></td>
              <td className="dark:text-white text-lg"><button>مشاهده</button></td>
            </tr>
            {/* row 3 */}
            <tr>
              <th className="dark:text-white text-lg">3</th>
              <td className="dark:text-white text-lg">دوره جاوا اسکریپت</td>
              <td className="dark:text-white text-lg"> محمد حسین بحرالعلومی</td>
              <td className="dark:text-white text-lg"></td>
              <td className="dark:text-white text-lg"><button>مشاهده</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
};

export default index;

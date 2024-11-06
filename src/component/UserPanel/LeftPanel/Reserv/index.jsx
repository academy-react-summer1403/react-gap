import React from 'react'
import { MdDelete } from "react-icons/md";
const index = () => {
  return (
    <div className='bg-white w-[1200px] h-[500px] rounded-xl mt-10 dark:bg-slate-900'>
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
            {/* row 1 */}
            <tr>
              <th className="dark:text-white text-lg">1</th>
              <td className="dark:text-white text-lg"> دوره ریکت نیتیو</td>
              <td className="dark:text-white text-lg"> استاد مهدی اصغری </td>
              <td className="dark:text-white text-lg"></td>
              <td className='dark:text-white text-lg'><MdDelete size={30} className='relative right-16' /></td>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th className="dark:text-white text-lg">2</th>
              <td className="dark:text-white text-lg"> دوره ریکت</td>
              <td className="dark:text-white text-lg"> محسن اسفندیاری</td>
              <td className="dark:text-white text-lg"></td>
              <td className="dark:text-white text-lg"><MdDelete size={30} className='relative right-16' /></td>
            </tr>
            {/* row 3 */}
            <tr>
              <th className="dark:text-white text-lg">3</th>
              <td className="dark:text-white text-lg">دوره جاوا اسکریپت</td>
              <td className="dark:text-white text-lg"> محمد حسین بحرالعلومی</td>
              <td className="dark:text-white text-lg"></td>
              <td className="dark:text-white text-lg"><MdDelete size={30} className='relative right-16' /></td>
            </tr>
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
  )
}

export default index

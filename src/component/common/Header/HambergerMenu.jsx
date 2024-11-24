import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { IoVideocam } from "react-icons/io5";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { IoIosLink } from "react-icons/io";
import { list } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';
const HambergerMenu = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  };


  return (
    <div className="z-50 max-sm:-mr-64 max-sm:mt-12 md:hidden max-md:-mr-56 max-md:mt-12">
          <button>
          <IoMenu size={35} className='text-5xl cursor-pointer'  onClick={toggleMenu}  />
        {isOpen && (



        <div className="-mt-32 absolute right-0 w-72 h-[800px] bg-white shadow-lg rounded-md border-b-2 dark:bg-slate-900">

          <IoMdClose size={35} className=' text-5xl cursor-pointer mr-6 mt-5'  onClick={toggleMenu}/>
          <div className=' w-[250px] h-[60px] m-auto'>
                    <input type="search" placeholder='هر چیزی میخای اینجا بنویس؟' className='w-[100%] h-[80%] rounded-xl mt-16  
                      input input-bordered items-center bg-gray-200' />
            </div>
            <div>
              
            </div>
          <ul className="py-2">

              <div className='border-t-2 w-[90%] mx-auto mt-56'>
                <li  className="px-4 hover:bg-gray-100 hover:text-slate-900
            border-"><IoHome size={25} className='relative top-7'/> 
            <NavLink
            to={"/"}
            className={({ isActive }) =>
              `${
                isActive &&
                "text-gray-600 border-2 bg-slate-300 h-14 relative bottom-2 leading-9 rounded-md "
              } whitespace-normal hover:text-blue-600 text-xl font-sans text-black dark:text-white`
            }
          >
            صفحه اصلی{" "}
          </NavLink>
            </li>  
  <li  className="px-4  hover:bg-gray-100 hover:text-slate-900"><IoVideocam size={25} className='relative top-8'/>
            <NavLink
            to={"/courses"}
            className={({ isActive }) =>
              `${
                isActive &&
                "text-gray-600 border-2 bg-slate-300 h-14 relative bottom-2 leading-9 rounded-md "
              } whitespace-normal hover:text-blue-600 text-xl font-sans text-black dark:text-white`
            }
          >
            دوره های آموزشی{" "}
          </NavLink>
            </li>

 <li  className="px-4  hover:bg-gray-100 hover:text-slate-900 "> <HiOutlineNewspaper size={25} className='relative top-7' />
            <NavLink
            to={"/News"}
            className={({ isActive }) =>
              `${
                isActive &&
                "text-gray-600 border-2 bg-slate-300 h-14 relative bottom-2 leading-9 rounded-md "
              } whitespace-normal hover:text-blue-600 text-xl font-sans text-black dark:text-white`
            }
          >
  
            مقالات{" "}
          </NavLink>
            </li>

              </div>
            
          

          
           
            {/* <li  className="px-4 py- hover:bg-gray-100 hover:text-slate-900"> <IoIosLink size={25} className='relative top-4'/>لینک های مفید
           
            </li>  */}
          </ul>
        </div>
      )}
          </button>
          

    </div>
  )
}

export default HambergerMenu

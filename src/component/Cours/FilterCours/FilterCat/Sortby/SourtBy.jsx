import axios from "axios";
import React, { useEffect, useState } from "react";

const arr = [
  {
    id: 1,
    typeName: "حضوری",
    insertDate: "2024-05-13T11:03:15.087",
  },
  {
    id: 2,
    typeName: "آنلاین",
    insertDate: "2024-05-13T11:03:20.957",
  },
  {
    id: 3,
    typeName: "حضوری آنلاین",
    insertDate: "2024-05-13T11:03:29.137",
  },
];

const SourtBy = () => {
  const [SourtList, setSourtList] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://classapi.sepehracademy.ir/api/CourseType/GetCourseTypes"
      )
      .then((res) => setSourtList(res.SourtList))
      .catch((err) => console.log(err));
      console.log(SourtList)
  }, []);

  return (
   
      <div className=" border-2 w-[90%] h-[390px] mr-5 mt-5 bg-[#fff] max-sm:hidden">
        <h1 className=" mt-7 mr-8 font-bold text-xl "> حضوری یا غیر حضوری </h1>
     {SourtList?.map((item, index)=>{
      return(
        <div key={index}>
          nnnnnnnnnnnnnnnn
        </div>
      )

     })}

      </div>
    
  );
};

export default SourtBy;

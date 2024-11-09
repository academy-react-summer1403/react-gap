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



const SourtBy = ({setCourseTypeId}) => {
  const [data, setSortList] = useState(null);
  useEffect(() =>{
    axios.get("https://classapi.sepehracademy.ir/api/CourseType/GetCourseTypes")
    .then((res) => setSortList(res.data))
    .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://classapi.sepehracademy.ir/api/CourseType/GetCourseTypes"
      )
      .then((res) => setSourtList(res.SourtList))
      .catch((err) => console.log(err));
  }, []);

      return (
        <div>
          
        <div className=" w-[90%] h-[290px]   mr-5 mt-5 bg-[#fff]">
        
        <h1 className=" mt-7 mr-8 font-bold text-xl ">  حضوری یا غیر حضوری </h1>

        {data?.map((item, index) =>{
          return(
            <div key={index} className='mr-5 flex flex-wrap '>


              <div >
              <input
                type="radio"
                name="type"
                value={item.id}
                id={item.id}
                onChange={(e) => setCourseTypeId(e.target.value)}
              />
              <label className="mr-5" htmlFor={item.id}> {item.typeName}</label>
            </div>
    
              
    
            </div>
          )

        })}

          <div>
          <input
            type="radio"
            name="type"
            value=''
            id='d1'
            
          />
          <label htmlFor='d1'> هیچ کدام </label>
        </div>


          
          

       








        

        

        </div>
          
        </div>

    
  );
};

export default SourtBy;

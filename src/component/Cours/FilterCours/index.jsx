import React from "react";
import { Checkbox } from "antd";
import FilterCat from "../../../component/Cours/FilterCours/FilterCat";

const App = ({setSearchQuery , setLevelId}) => (
  <div className="w-[25%] h-[1000px]">
  
    

    <FilterCat setSearchQuery={setSearchQuery} setLevelId={setLevelId}/>
  </div>
);
export default App;

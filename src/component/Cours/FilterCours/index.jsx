import React from "react";
import { Checkbox } from "antd";
import FilterCat from "../../../component/Cours/FilterCours/FilterCat";

const onChange = (checkedValues) => {
  console.log("checked = ", checkedValues);
};
const plainOptions = ["بک اند", "فرانت اند", "ریکت"];
const options = [
  {
    label: "بک اند",
    value: " بک اند",
  },
  {
    label: "وردپرس",
    value: "وردپرس",
  },
  {
    label: "فرانت اند",
    value: "فرانت اند",
  },
];
const optionsWithDisabled = [
  {
    label: "جاوا اسکریپت",
    value: "جاوا اسکریپت",
    disabled: false,
  },
];
const App = () => (
  <div className="w-[25%] h-[500px] ">
    <div>
      <div className="join">
        <div className="">
          <div>
            <input
              className="input input-bordered join-item w-32 border-2 border-[#c0470a] shadow-2xl shadow-[#7e5d52]"
              placeholder="Search"
            />
          </div>
        </div>
        <select className="select select-bordered join-item border-[#c0470a] shadow-2xl shadow-[#7e5d52]">
          <option disabled selected className="relative right-3">
            فیلتر
          </option>
          <option>بک اند</option>
          <option>فرانت اند</option>
          <option>وردپرسرس</option>
        </select>
        <div className="indicator border-2 border-[#c0470a] hover:bg-[#c0470a] shadow-2xl shadow-[#7e5d52]">
          <span className="indicator-item badge badge-secondary bg-[#c0470a]  ">new</span>
          <button className="btn join-item">Search</button>
        </div>
      </div>
    </div>
    <div className="w-[90%] h-[200px] mt-10 mx-auto shadow-2xl shadow-[#7e5d52] ">
      <div className="w-[90%] mx-auto">
        <h1 className=" text-xl font-bold">نوع دوره</h1>
        <br />
        <Checkbox.Group
          options={plainOptions}
          defaultValue={["بک اند"]}
          onChange={onChange}
        />
        <br />
        <br />
        <Checkbox.Group
          options={options}
          defaultValue={["فرانت اند"]}
          onChange={onChange}
        />
        <br />
        <br />
        <Checkbox.Group
          options={optionsWithDisabled}
          disabled
          defaultValue={["وردپرس"]}
          onChange={onChange}
        />
      </div>
    </div>

    <FilterCat />
  </div>
);
export default App;

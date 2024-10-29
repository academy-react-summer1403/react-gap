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
  <div className="w-[25%] h-[500px]  ">
    <div>
      <div className="join mr-5">
        <div className="dark:bg-slate-300 bg-slate-400">
          <div className="">
            <input
              className="input input-bordered join-item w-32"
              placeholder="چی میخوای؟"
            />
          </div>
        </div>
        <select className="select select-bordered join-item dark:bg-slate-200">
          <option disabled selected className="relative right-6">
            فیلتر
          </option>
          <option>بک اند</option>
          <option>فرانت اند</option>
          <option>وردپرسرس</option>
        </select>
        <div className="indicator dark:bg-slate-300">
          
          <button className="btn join-item bg-orange-700 text-white">بگرد</button>
        </div>
      </div>
    </div>
    <div className="w-[90%] h-[200px] mt-10  mx-auto bg-slate-200 rounded-md">
      <div className="w-[90%] mx-auto">
        <h1 className="text-xl font-bold dark:text-orange-600">نوع دوره</h1>
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

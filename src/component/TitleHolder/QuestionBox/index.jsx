import React from "react";
import { Collapse } from "antd";
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const items = [
  {
    key: "1",
    label: "مخاطبین این دوره چه کسانی هستند؟ ",
    children: (
      <p>
        این دوره آموزشی برای علاقمندان برنامه نوییسی و مفاهیم آن و کسانی که دوست
        دارند تا بصورت پیشرفته در این حوزه فعالیت کنند طراحی شده است.
      </p>
    ),
  },
  {
    key: "2",
    label: "سطح این دوره آموزشی چیست؟",
    children: (
      <p>
        سطح این دوره آموزشی پیشرفته است و برای شروع آن باید پیش نیاز های این
        دوره را گذرانده باشید.
      </p>
    ),
  },
  {
    key: "3",
    label: "آیا این دوره پروژه محور است؟",
    children: (
      <p>
        بله، این دوره آموزشی کاملا پروژه محور است. و این قابلیت را در اختیار
        دانشجویان دوره قرار می دهد تا همه مفاهیم را به صورت عملی پیاده سازی
        کنند.
      </p>
    ),
  },
];
const App = () => {
  const onChange = (key) => {};

  return (
    <div className="">
      <div className="flex mt-10 w-[70%]">
        {" "}  <div >
        <img src="qus.png" alt="" />
      </div>
        <h1 className="text-xl h-12 dark:text-white">سوالات متداول</h1>
        <Collapse className=" dark:text-white" items={items} defaultActiveKey={["1"]} onChange={onChange} />
      </div>
    
    </div>
  );
};
export default App;

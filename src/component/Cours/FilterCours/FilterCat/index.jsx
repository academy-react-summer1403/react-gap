import React from "react";
import { Checkbox, Col, Row } from "antd";
const onChange = (checkedValues) => {
  console.log("checked = ", checkedValues);
};
const App = () => (
  <div className="w-[90%] h-[200px] mt-10  mx-auto  bg-slate-200 rounded-md">
    <div className="w-[90%] mx-auto">
      {" "}
      <h1 className=" text-xl font-bold dark:text-orange-600"> مرتب سازی بر اساس</h1>
      <br />
      <Checkbox.Group
        style={{
          width: "100%",
        }}
        onChange={onChange}
      >
        <Row className="flex flex-wrap gap-9">
          <Col span={8}>
            <Checkbox  value="A">جدید  </Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="B">قدیمی </Checkbox>
          </Col>
          
          <Col span={8}>
            <Checkbox value="C">رزروشده</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="d">همه</Checkbox>
          </Col>
        </Row>
      </Checkbox.Group>
    </div>
  </div>
);
export default App;

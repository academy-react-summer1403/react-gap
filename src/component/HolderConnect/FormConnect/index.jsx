import React, { useState } from "react";

import { Button, DatePicker, Form, Input, Rate } from "antd";
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const FormDisabledDemo = () => {
  const [componentDisabled, setComponentDisabled] = useState(true);
  return (
    <div className="w-[40%] h-[70%] mr-[50%] dark:text-white">
    
       <div className="w-[70%]">

       
        <Form.Item label= "پیام" className="dark:text-white">
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item label="ایمیل" className="dark:text-white">
          <Input />
        </Form.Item>

        <Form.Item label="امتیاز" className="dark:text-white">
          <Rate />
        </Form.Item>

        
   
      <Form.Item label="">
        <Button className="bg-blue-400 text-white mr-16">ارسال</Button>
      </Form.Item></div>
    </div>
  );
};
export default () => <FormDisabledDemo />;

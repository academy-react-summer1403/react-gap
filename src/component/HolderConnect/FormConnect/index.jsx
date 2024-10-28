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
    <div className="+w-[40%] mr-[50%]">
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        disabled={componentDisabled}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item label="پیام">
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item label="ایمیل">
          <Input />
        </Form.Item>

        <Form.Item label="امتیاز">
          <Rate />
        </Form.Item>
      </Form>
      <Form.Item label="">
        <Button className="bg-blue-400 text-white mr-16">ارسال</Button>
      </Form.Item>
    </div>
  );
};
export default () => <FormDisabledDemo />;

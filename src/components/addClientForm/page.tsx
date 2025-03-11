import React from "react";
import { Button, Checkbox, Form, FormProps, Input, Popover, Space } from "antd";
import { IClient } from "@/providers/clientProvider/context";
import type { CheckboxProps } from "antd";

const onFinish: FormProps<IClient>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<IClient>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const onChange: CheckboxProps["onChange"] = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const content = (
  <div>
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<IClient>
        label="Full Name"
        name="fullName"
        rules={[{ required: true, message: "Please input your full Name!" }]}
      >
        <Input placeholder="full name" />
      </Form.Item>

      <Form.Item<IClient>
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input type="email" placeholder="email" />
      </Form.Item>

      <Form.Item<IClient>
        label="Contact"
        name="contactNumber"
        rules={[
          { required: true, message: "Please input your Contact Number!" },
        ]}
      >
        <Input placeholder="contact number" />
      </Form.Item>

      <Form.Item<IClient>
        label="Gender"
        name="sex"
        rules={[{ required: true, message: "Please input your Gender!" }]}
      >
        <Input placeholder="gender" />
      </Form.Item>
      <Form.Item<IClient>
        label="DOB"
        name="DateOfBirth"
        rules={[
          { required: true, message: "Please input your Contact Number!" },
        ]}
      >
        <Input placeholder="date of birth" />
      </Form.Item>

      <Form.Item<IClient>
        label="Trainer ID"
        name="trainerId"
        rules={[{ required: true, message: "Please input your Trainer ID!" }]}
      >
        <Input placeholder="trainer id" />
      </Form.Item>

      <Checkbox name="activeState" onChange={onChange}>
        Activate Client
      </Checkbox>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Create client
        </Button>
      </Form.Item>
    </Form>
  </div>
);

const AddClinet: React.FC = () => (
  <Space wrap>
    <Popover content={content} title="Create Client" trigger="click">
      <Button>Add Client</Button>
    </Popover>
  </Space>
);

export default AddClinet;

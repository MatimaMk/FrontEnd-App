"use client";

import { Button, Checkbox, Form, Input, Popover, Space } from "antd";
import type { CheckboxProps } from "antd";

import { IClient } from "@/providers/ClientManProvider/context";
import { ClientActionState } from "@/providers/ClientManProvider";

// Checkbox state handler
const onChange: CheckboxProps["onChange"] = (e) => {
  console.log(`Checked = ${e.target.checked}`);
};

const AddClientForm: React.FC = () => {
  const { createClient } = ClientActionState(); // Get the createClient function from context

  const onFinish = (values: IClient) => {
    console.log("Form Values Submitted:", values);

    // Post the form data using the createClient function
    createClient({
      ...values,
      activeState: values.activeState || false, // Ensure activeState is boolean
    });
  };


  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item<IClient>
        label="Full Name"
        name="fullName"
        rules={[{ required: true, message: "Please input your full name!" }]}
      >
        <Input placeholder="Full Name" />
      </Form.Item>

      <Form.Item<IClient>
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input type="email" placeholder="Email" />
      </Form.Item>

      <Form.Item<IClient>
        label="Contact"
        name="contactNumber"
        rules={[
          { required: true, message: "Please input your contact number!" },
        ]}
      >
        <Input placeholder="Contact Number" />
      </Form.Item>

      <Form.Item<IClient>
        label="Gender"
        name="sex"
        rules={[{ required: true, message: "Please select your gender!" }]}
      >
        <Input placeholder="Gender" />
      </Form.Item>

      <Form.Item<IClient>
        label="DOB"
        name="DateOfBirth"
        rules={[
          { required: true, message: "Please input your date of birth!" },
        ]}
      >
        <Input placeholder="Date of Birth" />
      </Form.Item>

      <Form.Item<IClient>
        label="Trainer ID"
        name="trainerId"
        rules={[{ required: true, message: "Please input your Trainer ID!" }]}
      >
        <Input placeholder="Trainer ID" />
      </Form.Item>

      <Form.Item name="activeState" valuePropName="checked">
        <Checkbox onChange={onChange}>Activate Client</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Create Client
        </Button>
      </Form.Item>
    </Form>
  );
};

const AddClient: React.FC = () => (
  <Space wrap>
    <Popover content={<AddClientForm />} title="Create Client" trigger="click">
      <Button type="primary">Add Client</Button>
    </Popover>
  </Space>
);

export default AddClient;

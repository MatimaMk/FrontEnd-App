"use client";

import { useFoodItems } from "@/providers/foodItemProvider";
import { IFood } from "@/providers/foodItemProvider/context";
import {  Button, Form, Input, InputNumber, Popover } from "antd";
import { useRouter } from "next/navigation";

const AddFoodItemForm: React.FC = () => {
  const { isSuccess, createFoodItem } = useFoodItems();
  const router = useRouter();

  const onFinish = async (foodItemInfo: IFood) => {
    await createFoodItem(foodItemInfo);
    if (isSuccess) {
      alert("Food Item Successfully Created");
      router.refresh(); // Refresh the page after alert
    }
  };

  const content = (
    <Form
      name="foodItemForm"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item<IFood> label="Name" name="name" rules={[{ required: true, message: "Please enter food name!" }]}>
        <Input placeholder="Food Name" />
      </Form.Item>
      <Form.Item<IFood> label="Category" name="category" rules={[{ required: true, message: "Please enter category!" }]}>
        <Input placeholder="Category" />
      </Form.Item>
      <Form.Item<IFood> label="Serving Size" name="servingsize" rules={[{ required: true, message: "Please enter serving size!" }]}>
        <Input placeholder="Serving Size" />
      </Form.Item>
      <Form.Item<IFood> label="Protein (g)" name="protein">
        <InputNumber min={0} />
      </Form.Item>
      <Form.Item<IFood> label="Carbs (g)" name="carbs">
        <InputNumber min={0} />
      </Form.Item>
      <Form.Item<IFood> label="Sugar (g)" name="sugar">
        <InputNumber min={0} />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Create Food Item
        </Button>
      </Form.Item>
    </Form>
  );

  return (
    <Popover placement="bottomRight" title="Add Food Item" content={content} trigger="click">
      <Button type="primary" size="large" target="_blank" style={{ backgroundColor: "#1e3e06", borderColor: "#1e3e06", color: "#e0ffdb", transition: "all 0.3s ease", }} >
        Add Food Item
      </Button>
    </Popover>
  );
};

export default AddFoodItemForm;
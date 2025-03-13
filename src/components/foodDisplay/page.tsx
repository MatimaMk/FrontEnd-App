"use client";

import React, { useEffect, useState } from "react";
import { Alert, Spin, Table } from "antd";
import { useFoodItems } from "@/providers/foodItemProvider";

const DisplayFood: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);
  const { getFoodItems, foodItems, isError, isPending, isSuccess } =
    useFoodItems();

  const primaryColour = { color: "green" };
  useEffect(() => {
    if (typeof window !== "undefined") {
      setToken(sessionStorage.getItem("token"));
    }
  }, []);

  useEffect(() => {
    if (token) {
      getFoodItems();
    }
  }, [token]);

  if (isPending) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Spin tip="Loading..." size="large">
          <Alert message="Please wait" description="Loading..." type="info" />
        </Spin>
      </div>
    );
  }

  if (isError) {
    return <div>Failed to load data...</div>;
  }

  if (isSuccess && (!foodItems || foodItems.length === 0)) {
    return <div>No food items available</div>;
  }

  const columns = [
    {
      title: <span style={primaryColour}>Name</span>,
      dataIndex: "name",
      key: "name",
    },
    {
      title: <span style={primaryColour}>Category</span>,
      dataIndex: "category",
      key: "category",
    },
    {
      title: <span style={primaryColour}>Serving Size</span>,
      dataIndex: "servingsize",
      key: "servingsize",
    },
    {
      title: <span style={primaryColour}>Protein</span>,
      dataIndex: "protein",
      key: "protein",
    },
    {
      title: <span style={primaryColour}>Carbs</span>,
      dataIndex: "carbs",
      key: "carbs",
    },
    {
      title: <span style={primaryColour}>Sugar</span>,
      dataIndex: "sugar",
      key: "sugar",
    },
    {
      title: <span style={primaryColour}>Fat</span>,
      dataIndex: "fat",
      key: "fat",
    },
    {
      title: <span style={primaryColour}>Fiber</span>,
      dataIndex: "fiber",
      key: "fiber",
    },
    {
      title: <span style={primaryColour}>Sodium</span>,
      dataIndex: "sodium",
      key: "sodium",
    },
    {
      title: <span style={primaryColour}>Potassium</span>,
      dataIndex: "potassium",
      key: "potassium",
    },
    {
      title: <span style={primaryColour}>Cholesterol</span>,
      dataIndex: "cholesterol",
      key: "cholesterol",
    },
    {
      title: <span style={primaryColour}>Energy</span>,
      dataIndex: "energy",
      key: "energy",
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={foodItems}
      style={{
        border: "1px solid green",
        backgroundColor: "green",
        color: "white",
      }}
    />
  );
};

export default DisplayFood;

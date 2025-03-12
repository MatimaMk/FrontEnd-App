"use clinet"
import React, { useEffect, useState } from 'react';
import { Alert, Spin, Table } from 'antd';
import { useFoodItems } from '@/providers/foodItemProvider';

const DisplayFood: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);
  const { getFoodItems, foodItems, isError, isPending, isSuccess } = useFoodItems();

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
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
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
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Serving Size',
      dataIndex: 'servingsize',
      key: 'servingsize',
    },
    {
      title: 'Protein',
      dataIndex: 'protein',
      key: 'protein',
    },
    {
      title: 'Carbs',
      dataIndex: 'carbs',
      key: 'carbs',
    },
    {
      title: 'Sugar',
      dataIndex: 'sugar',
      key: 'sugar',
    },
    {
      title: 'Fat',
      dataIndex: 'fat',
      key: 'fat',
    },
    {
      title: 'Fiber',
      dataIndex: 'fiber',
      key: 'fiber',
    },
    {
      title: 'Sodium',
      dataIndex: 'sodium',
      key: 'sodium',
    },
    {
      title: 'Potassium',
      dataIndex: 'potassium',
      key: 'potassium',
    },
    {
      title: 'Cholesterol',
      dataIndex: 'cholesterol',
      key: 'cholesterol',
    },
    {
      title: 'Energy',
      dataIndex: 'energy',
      key: 'energy',
    },
  ];

  return (
    <Table columns={columns} dataSource={foodItems} />
  );
};

export default DisplayFood;
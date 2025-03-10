"use client"
import { Alert,  Spin } from 'antd';
import React, { useEffect, useState } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { useFoodItemState, useFoodItemsActions } from '@/providers/foodItemProvider';

const { Header, Sider, Content } = Layout;

const Dashboard: React.FC = () => {

  const [collapsed, setCollapsed] = useState(false);
  const { foodItems, isPending, isError } = useFoodItemState();
   const { getFoodItems } = useFoodItemsActions();  

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    getFoodItems();
  }, []);
  

  if (isPending) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', }}>
        <Spin tip="Loading..." size="large">
          <Alert message="Fetching all the Food Items" description="Please wait, fetching all the items." type="info" />
        </Spin>
      </div>
    );
  }
  
  // error status
  if (isError) {
    return <div>Error loading products!</div>;
  }

  // if there are no product
  if (!foodItems || Object.keys(foodItems).length === 0) {
    return <div>No products found</div>;
  }
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
 

        </Content>
        
      </Layout>
    </Layout>
  );
};

export default Dashboard;




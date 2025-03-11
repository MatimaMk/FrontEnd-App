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
import { CurrentUserAction, CurrentUserState } from '@/providers/currUserProvider';
import AddClinet from '@/components/dashboardLayout/page';

const { Header, Sider, Content } = Layout;

const Dashboard: React.FC = () => {

  const [collapsed, setCollapsed] = useState(false);
  const { foodItems, isPending, isError } = useFoodItemState();
   const { getFoodItems } = useFoodItemsActions();  
   const { currentUser, iscurrPending, iscurrSuccess, iscurrError } = CurrentUserState();
   const {getCurrentUser} = CurrentUserAction(); 

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
  

 // for currentUser
  if (iscurrPending) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', }}>
        <Spin tip="Loading..." size="large">
          <Alert message="please wait" description="loading..." type="info" />
        </Spin>
      </div>
    );
  }

  if (iscurrError) {
    return <div>Error occurred, could not fetch the user</div>;
  }

  if(iscurrSuccess){
    getCurrentUser();
  }

  // error status for food itms
  if (isError) {
    return <div>Error loading food Items!</div>;
  }

  // if there are no food items 
  if (!foodItems || Object.keys(foodItems).length === 0) {
    return <div>No Food items found</div>;
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
              label: 'List of users',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'Food Items',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'Meal Plans',
              
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
    <AddClinet/>

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
          {/* <div>
      <h1>Welcome, {currentUser.name}!</h1>
      <p>ID: {currentUser}</p>
      <p>Email: {currentUser.email}</p>
    </div> */}

<div>
      {Object.keys(foodItems).length > 0 ? (
        Object.values(foodItems).map((item: any) => (
          <div key={item._id}>
            <h1>Food Item: {item.name}</h1>
            <p><strong>Category:</strong> {item.category}</p>
            <p><strong>Serving Size:</strong> {item.servingSize}g</p>
            <p><strong>Protein:</strong> {item.protein}g</p>
            <p><strong>Carbs:</strong> {item.carbs}g</p>
            <p><strong>Sugar:</strong> {item.sugar}g</p>
            <p><strong>Fat:</strong> {item.fat}g</p>
            <p><strong>Fiber:</strong> {item.fiber}g</p>
            <p><strong>Sodium:</strong> {item.sodium}mg</p>
            <p><strong>Potassium:</strong> {item.potassium}mg</p>
            <p><strong>Cholesterol:</strong> {item.cholesterol}mg</p>
            <p><strong>Energy:</strong> {item.energy}kcal</p>
            <hr />
          </div>
        ))
      ) : (
        <p>No food items available.</p>
      )}
    </div>


        </Content>
        
      </Layout>
    </Layout>
  );
};

export default Dashboard;




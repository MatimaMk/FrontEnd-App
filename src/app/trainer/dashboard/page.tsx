"use client";
import { Alert, Spin } from "antd";
import React, { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import {
  useFoodItemState,
  useFoodItemsActions,
} from "@/providers/foodItemProvider";
import {
  CurrentUserAction,
  CurrentUserState,
} from "@/providers/currUserProvider";
import FoodItemsDisplay from "@/components/foodDisplay/page";
import UserDetails from "@/components/currUser/page";

const { Header, Sider, Content } = Layout;

const Dashboard: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenuKey, setSelectedMenuKey] = useState("1"); // Track the selected menu item

  const { foodItems, isPending, isError } = useFoodItemState();
  const { getFoodItems } = useFoodItemsActions();
  const { currentUser, iscurrPending, iscurrSuccess, iscurrError } =
    CurrentUserState();
  const { getCurrentUser } = CurrentUserAction();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    getFoodItems();
    getCurrentUser();
  }, []);

  const renderContent = () => {
    switch (selectedMenuKey) {
      case "1":
        return (
          <div>
            <h1>List of Users</h1>
            {currentUser ? (
              <div>
                <UserDetails/>
              </div>
            ) : (
              <p>No user data available.</p>
            )}
          </div>
        );
      case "2":
        return (
         <FoodItemsDisplay/>
        );
      case "3":
        return <h1>Meal Plans</h1>;
      default:
        return <p>Select a menu item to display content.</p>;
    }
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={({ key }) => setSelectedMenuKey(key)} // Update selected menu item
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "List of users",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "Food Items",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "Meal Plans",
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
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          {/* <AddClinet /> */}
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;

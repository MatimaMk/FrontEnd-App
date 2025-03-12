"use client";
import React, { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import { useFoodItemsActions } from "@/providers/foodItemProvider";
import {
  CurrentUserAction,
  
} from "@/providers/currUserProvider";
import FoodItemsDisplay from "@/components/foodDisplay/page";
import UserDetails from "@/components/currUser/page";
import AddClient from "@/components/addClientForm/page";

const { Header, Sider, Content } = Layout;

const Dashboard: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenuKey, setSelectedMenuKey] = useState("1");

  const { getFoodItems } = useFoodItemsActions();
  //const { currentUser } = CurrentUserState();
  const { getCurrentUser } = CurrentUserAction();

  useEffect(() => {
    getFoodItems();
    getCurrentUser();
  }, []);

  const renderContent = () => {
    switch (selectedMenuKey) {
      case "1":
        return <UserDetails />;
      case "2":
        return <FoodItemsDisplay />;
      case "3":
        return <h1>Meal Plans</h1>;
      default:
        return <p>Select a menu item to display content.</p>;
    }
  };

  return (
    <Layout style={{ minHeight: "100vh", background: "#F5F7E6" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ background: "#1E3A08" }}
      >
        <div style={{ color: "#fff", padding: "16px", textAlign: "center" }}>
          DietCoach
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={({ key }) => setSelectedMenuKey(key)}
          style={{ background: "#1E3A08" }}
          items={[
            { key: "1", icon: <UserOutlined />, label: "List of users" },
            { key: "2", icon: <VideoCameraOutlined />, label: "Food Items" },
            { key: "3", icon: <UploadOutlined />, label: "Meal Plans" },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: "0 16px",
            background: "#DDECC8",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              color: "#1E3A08",
            }}
          />
          <AddClient />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: "#FFFFFF",
            borderRadius: "12px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;

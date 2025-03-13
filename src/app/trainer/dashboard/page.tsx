"use client";
import React, { useState } from "react";
import {
  AppstoreOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ShoppingCartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import UserDetails from "@/components/currUser/page";
import DispayFood from "@/components/foodDisplay/page";
import AddClientForm from "@/components/addClientForm/page";
import AddFoodItemForm from "@/components/foodItem/page";

const { Header, Sider, Content } = Layout;

const Dashboard: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenuKey, setSelectedMenuKey] = useState("1");

  const renderContent = () => {
    switch (selectedMenuKey) {
      case "1":
        return <UserDetails />;
      case "2":
        return <h1>List of Users</h1>;
      case "3":
        return <DispayFood />;
      case "4":
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
            { key: "1", icon: <UserOutlined />, label: "Profile" },
            { key: "2", icon: <TeamOutlined />, label: "List of Users" },
            { key: "3", icon: <ShoppingCartOutlined />, label: "Food Items" },
            { key: "4", icon: <AppstoreOutlined />, label: "Meal Plans" },
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
          <AddClientForm />
          <AddFoodItemForm />
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

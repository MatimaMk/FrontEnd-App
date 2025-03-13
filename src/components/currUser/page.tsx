import React, { JSX } from "react";
import { Card, Typography, Image, Space } from "antd";
import {
  IdcardOutlined,
  MailOutlined,
  UserOutlined,
  PhoneOutlined,
  CheckCircleOutlined,
  TagsOutlined,
} from "@ant-design/icons";
import { USECurrentuser } from "@/providers/currUserProvider";
import { useStyles } from "./styles/style";
import { useEffect } from "react";

const Desc: React.FC<
  Readonly<{ label: string; text?: string | number; icon: JSX.Element }>
> = ({ label, text, icon }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "8px",
    }}
  >
    <Space size="small" style={{ display: "flex", alignItems: "center" }}>
      {icon}
      <Typography.Text strong>{label}:</Typography.Text>
    </Space>
    <Typography.Text>{text || "-"}</Typography.Text>
  </div>
);

const UserDetails: React.FC = () => {
  const { styles } = useStyles();
  const { currentUser, iscurrError, getCurrentUser } = USECurrentuser();

  const token =
    typeof window !== "undefined" ? sessionStorage.getItem("token") : null;

  useEffect(() => {
    if (token) {
      getCurrentUser();
    }
  }, []);

  if (iscurrError) {
    return (
      <div className={styles.noItemsMessage}>
        Failed to load user details. Please try again later.
      </div>
    );
  }

  if (!currentUser) {
    return (
      <div className={styles.noItemsMessage}>No user details available.</div>
    );
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      <Card
        style={{
          width: "100%",
          maxWidth: "450px",
          padding: "20px",
          borderRadius: "12px",
          border: "3px solid #28a745", // Green border
          background: "#ffffff",
        }}
        cover={
          <Image
            width={120}
            height={120}
            src="https://domf5oio6qrcr.cloudfront.net/medialibrary/4954/4965bf45-98cc-4d16-bae5-9f4b8503c5ed.jpg"
            alt="User"
            style={{
              borderRadius: "50%",
              margin: "20px auto",
              display: "block",
            }}
          />
        }
      >
        <Typography.Title
          level={4}
          style={{ textAlign: "center", color: "#28a745" }}
        >
          User Details
        </Typography.Title>
        <Desc
          label="ID"
          text={currentUser.data?.id || "9883989489"}
          icon={<IdcardOutlined style={{ color: "#28a745" }} />}
        />
        <Desc
          label="Email"
          text={currentUser.data?.email}
          icon={<MailOutlined style={{ color: "#28a745" }} />}
        />
        <Desc
          label="Role"
          text={currentUser.data?.role}
          icon={<UserOutlined style={{ color: "#28a745" }} />}
        />
        <Desc
          label="Contact Number"
          text={currentUser.data?.contactNumber}
          icon={<PhoneOutlined style={{ color: "#28a745" }} />}
        />
        <Desc
          label="Status"
          text={currentUser.data?.activeState ? "Active" : "Inactive"}
          icon={<CheckCircleOutlined style={{ color: "#28a745" }} />}
        />
        <Desc
          label="Plan Type"
          text={currentUser.data?.planType}
          icon={<TagsOutlined style={{ color: "#28a745" }} />}
        />
      </Card>
    </div>
  );
};

export default UserDetails;

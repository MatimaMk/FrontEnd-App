"use client";

import { Button, Card, Form, Input, Spin } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "@ant-design/v5-patch-for-react-19";
import { useStyles } from "../registration/style/style";
import {
  useTrainerAuthState,
  useAuthActionState,
} from "@/providers/authProvider/trainer";
import { ILogins } from "@/providers/authProvider/trainer/context";
import { useRouter } from "next/navigation";
import Alert from "antd/es/alert/Alert";
import Image from "next/image";

const Login = () => {
  const { isPending, isError } = useTrainerAuthState();
  const { login } = useAuthActionState();
  const { styles } = useStyles();
  const router = useRouter();

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
          <Alert message="please wait" description="loading..." type="info" />
        </Spin>
      </div>
    );
  }

  if (isError) {
    return <div>failed...</div>;
  }

  const onFinish = async (payload: ILogins) => {
    if (login) {
      await login(payload);
      alert("successfully logged in");
      router.push("/trainer/dashboard");
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh", alignItems: "center" }}>
      {/* Left Section: Image */}
      <div style={{ flex: 1, position: "relative" }}>
        <Image
          src="https://www.dyln.co/cdn/shop/articles/Alkaline-Header_1024x1024.jpg?v=1496339504"
          alt=""
          width={800}
          height={700}
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      {/* Right Section: Login Form */}
      <div className={styles.card_div}>
        <Card className={styles.card}>
          <h1 className={styles.title}>Login</h1>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 800 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input
                type="email"
                placeholder="Email"
                prefix={<UserOutlined />}
                className={styles.input}
                allowClear
              />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                placeholder="password"
                prefix={<LockOutlined />}
                className={styles.input}
                allowClear
              />
            </Form.Item>
            <Button type="primary" htmlType="submit" className={styles.button}>
              Login
            </Button>
          </Form>
          <p className={styles.paragraph}>
            Don&apos;t have an account?{" "}
            <a href="/trainer/register" className={styles.link}>
              Register
            </a>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Login;

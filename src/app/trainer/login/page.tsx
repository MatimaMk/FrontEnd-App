"use client";
import { Button, Card, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "@ant-design/v5-patch-for-react-19";
import { useStyles } from "../registration/style/style";
import {
  useTrainerAuthState,
  useAuthActionState,
} from "@/providers/authProvider/trainer";
import { ILogins } from "@/providers/authProvider/trainer/context";
import { redirect } from "next/navigation";

const Login = () => {
  const { isSuccess, isPending, isError } = useTrainerAuthState();
  const { login } = useAuthActionState();
  const { styles } = useStyles();

  if (isPending) {
    return <div>loading...</div>;
  }

  if (isError) {
    return <div>failed...</div>;
  }

  const onFinish = async (payload: ILogins) => {
    if (login) {
      try {
        await login(payload);
        if (isSuccess) {
          redirect("trainer/dashboard");
        }
      } catch (error) {
       console.log(error)
        alert("Login failed");
      }
    }
  };
  return (
    <div style={{ display: "flex", height: "100vh", alignItems: "center" }}>
      {/* Left Section: Image */}
      <div
        style={{
          flex: 1,
          backgroundImage: `url('https://media.istockphoto.com/photos/food-backgrounds-table-filled-with-large-variety-of-food-picture-id1155240452?k=20&m=1155240452&s=170667a&w=0&h=bduOZzahxHhXORVnjovY7SWTSdLh6nzrZAKdJtPzia4=')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
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
                { required: true, message: "Please input your email!" },
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
                { required: true, message: "Please input your password!" },
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
          Don&apos;t have an account?{" "}<a href="/trainer/register" className={styles.link}>
              Register
            </a>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Login;

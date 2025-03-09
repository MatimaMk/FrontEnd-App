"use client";
import { Button, Card, Form, FormProps, Input } from "antd";
import { ITrainerRegis } from "@/providers/authProvider/trainer/context";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import {
  useRegisterState,
  useRegisterActionState,
} from "@/providers/authProvider/trainer";
import "@ant-design/v5-patch-for-react-19";
import { useStyles } from "./registration/style/style";

const Register = () => {
  const { isSuccess, isPending, isError } = useRegisterState();
  const { RegisterTrainer } = useRegisterActionState();
  const { styles } = useStyles();

  if (isPending) {
    <div>loading...</div>;
  }

  if (isError) {
    <div>failed...</div>;
  }

  const onFinish: FormProps<ITrainerRegis>["onFinish"] = async (
    values: ITrainerRegis
  ) => {
    if (RegisterTrainer) {
      RegisterTrainer(values);
      if (isSuccess) {
        alert("Registration successful");
      }
    }
  };

  return (
    
    <div style={{ display: "flex", height: "100vh", alignItems: "center" }}>
      {/* Left Section: Image */}
      <div
        style={{
          flex: 1,
          backgroundImage: `url('')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Right Section: Register Form */}

      <div className={styles.card_div}>
        <Card className={styles.card}>
          <h1 className={styles.title}>Register</h1>

          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 800 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item<ITrainerRegis>
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                minLength={6}
                placeholder="username"
                prefix={<UserOutlined />}
                className={styles.input} /* Applied the input style */
                allowClear
              />
            </Form.Item>

            <Form.Item<ITrainerRegis>
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                  type: "email",
                },
              ]}
            >
              <Input
                placeholder="email"
                prefix={<MailOutlined />}
                className={styles.input} /* Applied the input style */
                allowClear
              />
            </Form.Item>

            <Form.Item<ITrainerRegis>
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                placeholder="password"
                minLength={8}
                prefix={<LockOutlined />}
                className={styles.input} /* Applied the input style */
                allowClear
              />
            </Form.Item>

            <Button type="primary" htmlType="submit" className={styles.button}>
              Register
            </Button>
          </Form>

          <p className={styles.paragraph}>
            Already have an account?{" "}
            <a href="#" className={styles.link}>
              Login
            </a>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Register;

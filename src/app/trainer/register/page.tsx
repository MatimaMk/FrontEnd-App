"use client";

import {
  Button,
  Card,
  Checkbox,
  CheckboxProps,
  Form,
  FormProps,
  Input,
  message,
} from "antd";
import { ITrainerRegis } from "@/providers/authProvider/trainer/context";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import {
  useTrainerAuthState,
  useAuthActionState,
} from "@/providers/authProvider/trainer";
import "@ant-design/v5-patch-for-react-19";
import { useStyles } from "../registration/style/style";
import bcrypt from "bcryptjs";

const Register = () => {
  const { isSuccess, isPending, isError } = useTrainerAuthState();
  const { RegisterTrainer } = useAuthActionState();
  const { styles } = useStyles();

  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  if (isPending) {
    return <div>loading...</div>;
  }

  if (isError) {
    return <div>failed...</div>;
  }

  const onFinish: FormProps<ITrainerRegis>["onFinish"] = async (
    values: ITrainerRegis
  ) => {
    if (RegisterTrainer) {
      const hashedPassword = await bcrypt.hash(values.password, 12);
      const trainerData: ITrainerRegis = {
        name: values.name,
        email: values.email,
        password: hashedPassword,
        confirmPassword: "",
        role: "admin",
        playType: "base",
        activeState: true,
        trial: false,
        policiesAccepted: values.policiesAccepted,
      };
      RegisterTrainer(trainerData);
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
              label="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                name="name"
                minLength={2}
                maxLength={30}
                placeholder="username"
                prefix={<UserOutlined />}
                className={styles.input}
                /* Applied the input style */ allowClear
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
                className={styles.input}
                /* Applied the input style */ allowClear
              />
            </Form.Item>
            <Form.Item<ITrainerRegis>
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value) {
                      return Promise.resolve();
                    }
                    if (value.length < 8) {
                      return Promise.reject(
                        new Error("Password must be at least 8 characters")
                      );
                    }
                    return Promise.resolve();
                  },
                }),
              ]}
            >
              <Input.Password
                placeholder="password"
                prefix={<LockOutlined />}
                className={styles.input}
                /* Applied the input style */ allowClear
              />
            </Form.Item>
            <Form.Item<ITrainerRegis>
              label="confirm Password"
              name="confirmPassword"
              rules={[
                { required: true, message: "Please confirm your password!" },
              ]}
            >
              <Input.Password
                placeholder="confirm Password"
                prefix={<LockOutlined />}
                className={styles.input}
                /* Applied the input style */ allowClear
              />
            </Form.Item>
            <Form.Item
              name="policiesAccepted"
              valuePropName="checked"
              rules={[
                { required: true, message: "Please accept the policies!" },
              ]}
            >
              <Checkbox onChange={onChange}>Accept Policies</Checkbox>
            </Form.Item>
            <Button type="primary" htmlType="submit" className={styles.button}>
              Register
            </Button>
          </Form>
          <p className={styles.paragraph}>
            Already have an account?{" "}
            <a href="/trainer/login" className={styles.link}>
              Login
            </a>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Register;

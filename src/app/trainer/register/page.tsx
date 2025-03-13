"use client";

import {
  Button,
  Card,
  Checkbox,
  CheckboxProps,
  Form,
  FormProps,
  Input,
  Spin,
} from "antd";
import { ITrainerRegis } from "@/providers/authProvider/trainer/context";
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import {
  useTrainerAuthState,
  useAuthActionState,
} from "@/providers/authProvider/trainer";
import "@ant-design/v5-patch-for-react-19";
import { useStyles } from "../registration/style/style";
import Alert from "antd/es/alert/Alert";
import { useRouter } from "next/navigation";
//import bcrypt from "bcryptjs";

const Register = () => {
  const { isSuccess, isPending, isError } = useTrainerAuthState();
  const { RegisterTrainer } = useAuthActionState();
  const { styles } = useStyles();
  const router = useRouter();

  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

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
    return <div>failed to register the user, try registering again</div>;
  }

  const onFinish: FormProps<ITrainerRegis>["onFinish"] = async (
    values: ITrainerRegis
  ) => {
    if (RegisterTrainer) {
      //  const hashedPassword = await bcrypt.hash(values.password, 12);
      const trainerData: ITrainerRegis = {
        name: values.name,
        email: values.email,
        password: values.password,
        contactNumber: values.contactNumber,
        confirmPassword: values.confirmPassword,
        role: "admin",
        planType: "base",
        activeState: true,
        trial: false,
        policiesAccepted: values.policiesAccepted,
      };
      RegisterTrainer(trainerData);
      if (isSuccess) {
        <Alert
          message="Successfully Registered"
          description="You are registered as a trainer with the role Admin, Please login ."
          type="success"
          showIcon
        />;
        router.push("/trainer/login");
      }
    }
  };

  return (
    // must take this style to ts file later
    <div style={{ display: "flex", height: "100vh", alignItems: "center" }}>
      {/* Left Section: Image */}
      <div
  style={{
    flex: 1,
    backgroundImage: `url('https://diyglow.in/wp-content/uploads/2023/08/healthy-food.jpg')`,
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
              label="name"
              name="name"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                minLength={2}
                maxLength={30}
                placeholder="name"
                prefix={<UserOutlined />}
                className={styles.input}
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
                className={styles.input}
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
                minLength={6}
                placeholder="password"
                prefix={<LockOutlined />}
                className={styles.input}
                allowClear
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
                allowClear
              />
            </Form.Item>
            <Form.Item<ITrainerRegis>
              label="Contact Number"
              name="contactNumber"
              rules={[
                {
                  required: true,
                  message: "Please input your contact number!",
                },
              ]}
            >
              <Input
                placeholder="Contact Number"
                prefix={<PhoneOutlined />}
                className={styles.input}
                allowClear
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

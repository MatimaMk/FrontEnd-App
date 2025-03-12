"use client";
import {
  Button,
  Card,
  Checkbox,
  CheckboxProps,
  Form,
  Input,
  Spin,
} from "antd";
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import Alert from "antd/es/alert/Alert";
import { useRouter } from "next/navigation";
import { IClientRegistration } from "@/providers/authProvider/client/context";
import { useStyles } from "./style/stlye";
import { ClientResActions, useClientAuthState } from "@/providers/authProvider/client";


const ClientRegister = () => {
  const { isSuccess, isPending, isError } = useClientAuthState();
  const { ClientReg} = ClientResActions();
  const { styles } = useStyles();
  const router = useRouter();

  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  if (isPending) {
    return (
      <div className={styles.container}>
        <Spin tip="Loading..." size="large">
          <Alert message="Please wait" description="Loading..." type="info" />
        </Spin>
      </div>
    );
  }

  if (isError) {
    router.push("/Client/registration");
    return <div>Failed to register the client, please try again.</div>;
  }

  const onFinish = async (clientData: IClientRegistration) => {
    if (ClientReg) {
      ClientReg(clientData);
      if (isSuccess) {
        <Alert
          message="Successfully Registered"
          description="Client has been successfully registered. Please log in."
          type="success"
          showIcon
        />;
        router.push("/trainer/login"); // Redirect to  login
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}></div>
      <div className={styles.formContainer}>
        <Card className={styles.card}>
          <h1 className={styles.title}>Client Registration</h1>
          <Form
            name="clientRegistration"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item<IClientRegistration>
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input
                placeholder="Name"
                prefix={<UserOutlined />}
                className={styles.input}
              />
            </Form.Item>
            <Form.Item<IClientRegistration>
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
                placeholder="Email"
                prefix={<MailOutlined />}
                className={styles.input}
              />
            </Form.Item>
            <Form.Item<IClientRegistration>
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                placeholder="Password"
                prefix={<LockOutlined />}
                className={styles.input}
              />
            </Form.Item>
            <Form.Item<IClientRegistration>
              label="Confirm Password"
              name="confirmPassowrd"
              rules={[
                { required: true, message: "Please confirm your password!" },
              ]}
            >
              <Input.Password
                placeholder="Confirm Password"
                prefix={<LockOutlined />}
                className={styles.input}
              />
            </Form.Item>
            <Form.Item<IClientRegistration>
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
              />
            </Form.Item>
            <Form.Item<IClientRegistration>
              label="Date of Birth"
              name="DateOfBirth"
              rules={[
                { required: true, message: "Please input your date of birth!" },
              ]}
            >
              <Input placeholder="Date of Birth" className={styles.input} />
            </Form.Item>
            <Form.Item
              name="PoliciesAccepted"
              valuePropName="checked"
              rules={[
                { required: true, message: "You must accept the policies!" },
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
            <a href="/client/login" className={styles.link}>
              Login
            </a>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default ClientRegister;

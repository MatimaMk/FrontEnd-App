"use client";

import { Button, Card, Checkbox, CheckboxProps, Form, Input, Spin } from "antd";
import { UserOutlined, MailOutlined, LockOutlined, PhoneOutlined } from "@ant-design/icons";
import Alert from "antd/es/alert/Alert";
import { useRouter } from "next/navigation";
import { IClientRegistration } from "@/providers/authProvider/client/context";
import { useStyles } from "./style/stlye";
import { ClientResActions, useClientAuthState } from "@/providers/authProvider/client";

const ClientRegister = () => {
  const { isSuccess, isPending, isError } = useClientAuthState();
  const { ClientReg } = ClientResActions();
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
        alert("Registration successful!");
        router.push("/trainer/login");
      }
    }
  };

  return (
    <div className={styles.container} style={{ paddingTop: 50 }}>
      <div className={styles.formContainer}>
        <Card
          className={styles.card}
          style={{
            maxWidth: 600,
            margin: "0 auto",
            border: "2px solid green",
            borderRadius: 10,
          }}
        >
          <div style={{ textAlign: "center", marginBottom: 20 }}>
            <h1 className={styles.title}>Client Registration</h1>
          </div>
          <Form
            name="clientRegistration"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item<IClientRegistration> label="Name" name="name" rules={[{ required: true, message: "Please input your name!" }]} >
              <Input placeholder="Name" prefix={<UserOutlined />} size="small" />
            </Form.Item>
            <Form.Item<IClientRegistration> label="Email" name="email" rules={[{ required: true, message: "Please input your email!", type: "email" }]} >
              <Input placeholder="Email" prefix={<MailOutlined />} size="small" />
            </Form.Item>
            <Form.Item<IClientRegistration> label="Password" name="password" rules={[{ required: true, message: "Please input your password!" }]} >
              <Input.Password placeholder="Password" prefix={<LockOutlined />} size="small" />
            </Form.Item>
            <Form.Item<IClientRegistration> label="Confirm Password" name="confirmPassword" rules={[{ required: true, message: "Please confirm your password!" }]} >
              <Input.Password placeholder="Confirm Password" prefix={<LockOutlined />} size="small" />
            </Form.Item>
            <Form.Item<IClientRegistration> label="Contact Number" name="contactNumber" rules={[{ required: true, message: "Please input your contact number!" }]} >
              <Input placeholder="Contact Number" prefix={<PhoneOutlined />} size="small" />
            </Form.Item>
            <Form.Item<IClientRegistration> label="Date of Birth" name="dateOfBirth" rules={[{ required: true, message: "Please input your date of birth!" }]} >
              <Input placeholder="Date of Birth" size="small" />
            </Form.Item>
            <Form.Item name="policiesAccepted" valuePropName="checked" rules={[{ required: true, message: "You must accept the policies!" }]} >
              <Checkbox onChange={onChange}>Accept Policies</Checkbox>
            </Form.Item>
            <div style={{ textAlign: "center" }}>
              <Button type="primary" htmlType="submit" size="small">
                Register
              </Button>
            </div>
            <div style={{ textAlign: "center", marginTop: 10 }}>
              <p className={styles.paragraph}>
                Already have an account?{" "}
                <a href="/client/login" className={styles.link}>
                  Login
                </a>
              </p>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default ClientRegister;
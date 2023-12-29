import { Form, Input, Button, Layout, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../service/axiosService";

interface LoginType {
  username: string;
  password: string;
}

const LoginForm = () => {
  let navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const onFinish = async (values: LoginType) => {
    console.log("Received values:", values);

    try {
      const { data } = await axiosInstance.post("/login", {
        ...values,
      });

      if (!data.isSuccess) {
        throw new Error("Login Failed");
      }
      const storeToken = new Promise<void>((resolve, _) => {
        localStorage.setItem("token", data.data.token);
        resolve();
      });

      storeToken.then((_) => navigate("/workflow"));
    } catch (err) {
      messageApi.open({
        key: "updatable",
        type: "error",
        content: "Login Failed",
        duration: 2,
      });
      console.log(err);
    }
  };

  return (
    <Layout style={{ height: "100vh" }}>
      {contextHolder}
      <Layout>
        <Form
          name="login"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          style={{ width: 400, margin: "auto" }}
        >
          {" "}
          <h1 style={{ textAlign: "center", margin: "1rem" }}>Customer Abandoned Cart</h1>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Layout>
    </Layout>
  );
};

export default LoginForm;

import { Layout, Menu, Button, theme } from "antd";
import {
  DiffOutlined,
  LogoutOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ApartmentOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import Workflow from "./workflow/Workflow";
import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const ComponentLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div
          className="demo-logo-vertical"
          style={{ margin: "2rem", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <ApartmentOutlined style={{ fontSize: "5rem", color: "#08c" }} />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <DiffOutlined />,
              label: <Link to="/workflow">Workflow</Link>,
            },
            {
              key: "2",
              icon: <LogoutOutlined />,
              label: <Link to="/">Logout</Link>,
              onClick: () => localStorage.clear(),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Workflow />
        </Content>
      </Layout>
    </Layout>
  );
};

export default ComponentLayout;

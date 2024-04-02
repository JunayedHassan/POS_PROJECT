import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
  MenuFoldOutlined,
  HomeOutlined,
  UnorderedListOutlined,
  CopyOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import "../Styles/Defaultlayout.css";
const { Header, Sider, Content } = Layout;
const Defaultlayout = ({items}) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical">
          <h1 className="text-center text-light font-weight-bold mt-4">POS</h1>  
        </div> 
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={window.location.pathname}
         
          
          items={[
            {
              key: "/",
              icon: <HomeOutlined />,
              label: <Link to="/">Home</Link>,
            },
            {
              key: "/bills",
              icon: <CopyOutlined />,
              label: <Link to="/bills">Bills</Link>,
            },
            {
              key: "/items",
              icon: <UnorderedListOutlined />,
              label: <Link to="/items">Items</Link>,
            },
            {
              key: "/customers",
              icon: <UserOutlined />,
              label: <Link to="/customers">Customers</Link>,
            },
            {
              key: "/logout",
              icon: <LogoutOutlined />,
              label: "Logout",
            },
          ]}


        >
         
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {items}
        </Content>
      </Layout>
    </Layout>
  );
};
export default Defaultlayout;
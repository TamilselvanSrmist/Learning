import { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    DashboardOutlined,
    UserAddOutlined,
  } from '@ant-design/icons';
  import { Button, Layout, Menu, theme } from 'antd';
  import { useNavigate } from 'react-router-dom';
  const { Header, Sider, Content } = Layout;
export const SiderBar = ({collapsed,onCollapse}) => {
    const navigate = useNavigate();
    const handleMenuItemClick = (key) => {
        navigate(`/${key}`);
       
      };
    return (
        <Sider trigger={null} collapsible collapsed={collapsed} onCollapse={onCollapse}  style={{
            backgroundColor: "#001529",
            minHeight: '100vh',
            transition: 'all 0.2s',
          }}>
        <div className="flex h-10 m-4 bg-gray-200 rounded-lg text-center" >
           {/* <h1 className='px-16 py-2'>ERP</h1> */}
            </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['home/admin/dashboard']}
          items={[
            {
              key: 'home/admin/dashboard',
              icon: <DashboardOutlined />,
              label: 'Dashboard',
            },
            {
              key: 'home/admin/profile',
              icon: <UserOutlined />,
              label: 'Profile',
            },
            {
              key: 'home/admin/student/create',
              icon: <UserAddOutlined />,
              label: 'Students',
            },
          ]}
           onClick={({key}) => handleMenuItemClick(key)}

        />
      </Sider>
    );
}
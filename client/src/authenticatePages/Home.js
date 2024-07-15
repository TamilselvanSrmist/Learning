import { Menu, Image, Layout, Col, Row, Divider, Card, Space,Statistic,Modal } from "antd";
import { Login } from "./Login";
import {useState,useEffect} from 'react';
import SRMlogo from "../images/srmlogo.jpeg";
import homeSrm from "../images/overviewSRM.jpg";

import {
  SettingTwoTone,
  EditOutlined,
  PropertySafetyOutlined,
  MailOutlined,
  CheckCircleOutlined,
  DashboardOutlined,
  FilePdfOutlined
} from "@ant-design/icons";
const { Header, Content, Footer } = Layout;

export const Home = () => {

    const items = [
        {
          label: "Home",
          key: "home",
        },
       
        {
          label: "Trainings & Development",
          key: "trainings",
        },
        {
          label: "Activities",
          key: "activities",
        },
        {
          label: "Team",
          key: "team",
        },
        {
          label: "Contact",
          key: "contact",
        },
        {
            label: "Login",
            key: "login",
          },
        
        {
          label: <SettingTwoTone />,
          key: "settings",
        },
      ];

      const [isModalOpen, setIsModalOpen] = useState(false);

      const showModal = () => {
        setIsModalOpen(true);
      }

      const handleCancel =() => {
        setIsModalOpen(false);
      }

    return <>
    <Layout>
     <Header className="bg-white flex flex-row w-screen">
          <Col className="gutter-row" span={12}>
            <div className="flex content-center">
              <img src={SRMlogo} alt="srmlogo" className="w-52 h-12" />
              {/* <h1 className="ml-5 font-semibold text-blue-500 text-xl content-center mt-4">
                Directorate of Learning and Development
              </h1> */}
            </div>
          </Col>
          <Col className="gutter-row" span={12}>
            <div className=" justify-end pl-64">
              <Menu  mode="horizontal">
                <Menu.Item key='home'>
                    <h1>Home</h1>
                </Menu.Item>
                <Menu.Item key='trainings'>
                    <h1>Trainings & Development</h1>
                </Menu.Item>
                <Menu.Item key='activities'>
                    <h1>Activities</h1>
                </Menu.Item>
                <Menu.Item key='team'>
                    <h1>Team</h1>
                </Menu.Item>
                <Menu.Item key='contact'>
                    <h1>Contact</h1>
                </Menu.Item>
                <Menu.Item key='login'>
                    <h1 onClick={showModal}>Login</h1>
                </Menu.Item>
                <Menu.Item >
                <SettingTwoTone />
                </Menu.Item>
              </Menu>
              
            </div>
          </Col>
        </Header>
        <Content className="w-full h-full" >
           <div  className="bg-home-bg bg-cover bg-center h-screen">
           <Modal open={isModalOpen}
           footer={null}
           onCancel={handleCancel}
           style={{ width: '80vw', maxWidth: '800px' }} 
           className="flex items-center top-20 mt-36 justify-center w-screen">
            <Login />
           </Modal>
           </div>
       
        
        </Content>
        <Footer>

        </Footer>
        </Layout>
    
    </>
}
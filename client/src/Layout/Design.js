import {Layout,Affix} from 'antd';
import { HeaderBar } from './HeaderBar';
import { ContentPage } from './ContentPage';
import { SiderBar } from './SideBar';
import { FooterBar } from './FooterBar';
import { useState } from 'react';

export const Design = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [selected, setSelected] = useState([1])
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    return <section>
        <Layout>
        <Affix offsetTop={0}>
        <SiderBar collapsed={collapsed} onCollapse={toggleCollapsed} />
        </Affix>
        <Layout>
        <Affix offsetTop={0}>
            <HeaderBar collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
            </Affix>
            <ContentPage />
            <FooterBar />
        </Layout>
        
        </Layout>
    </section>
}
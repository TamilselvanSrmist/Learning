import { Layout } from "antd";
import { AppRoutes } from "../route/AppRoutes";
const {Content} = Layout;
export const ContentPage = () => {

    return (
        <Content className="h-screen ">
        <AppRoutes />
        </Content>
    )
}
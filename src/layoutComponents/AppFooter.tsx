import { theme } from "antd";
import { Footer } from "antd/es/layout/layout";

export const AppFooter = () => {
  const { token } = theme.useToken();

  return (
    <Footer style={{ textAlign: "center", background: token.colorBgContainer }}>
      The Cloud World ©{new Date().getFullYear()}
    </Footer>
  );
};

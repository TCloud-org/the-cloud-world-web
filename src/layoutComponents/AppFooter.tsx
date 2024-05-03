import { Footer } from "antd/es/layout/layout";

export const AppFooter = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      The Cloud World ©{new Date().getFullYear()}
    </Footer>
  );
};

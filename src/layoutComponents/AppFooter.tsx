import { Flex, Typography, theme } from "antd";
import { Footer } from "antd/es/layout/layout";
import { AppLogo } from "../dataDisplayComponents/AppLogo";

export const AppFooter = () => {
  const { token } = theme.useToken();

  return (
    <Footer style={{ textAlign: "center", background: "black" }}>
      <Flex align="center" gap={8} justify="center">
        <AppLogo />
        <Typography.Text strong style={{ color: token.colorWhite }}>
          The Cloud World ©{new Date().getFullYear()}
        </Typography.Text>
      </Flex>
    </Footer>
  );
};

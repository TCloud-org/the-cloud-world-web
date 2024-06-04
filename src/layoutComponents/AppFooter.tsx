import { Flex, Typography, theme } from "antd";
import { Footer } from "antd/es/layout/layout";
import { AppLogo } from "../dataDisplayComponents/AppLogo";
import { JoinNewspaper } from "../dataEntryComponents/JoinNewspaper";

export const AppFooter = () => {
  const { token } = theme.useToken();

  return (
    <Footer className="bg-dark text-center border-t border-t-neutral-12">
      <Flex
        vertical
        gap={32}
        className="max-w-screen-2xl ml-auto mr-auto px-4 lg:px-12"
      >
        <JoinNewspaper />
        <Flex align="center" gap={8} justify="center">
          <AppLogo />
          <Typography.Text strong style={{ color: token.colorWhite }}>
            The Cloud World ©{new Date().getFullYear()}
          </Typography.Text>
        </Flex>
      </Flex>
    </Footer>
  );
};

import { Flex, Typography, theme } from "antd";
import { LandingImage } from "../dataDisplayComponents/LandingImage";

export const LandingPage = () => {
  const { token } = theme.useToken();

  return (
    <Flex vertical>
      <Flex style={{ backgroundColor: token.colorPrimary, padding: 64 }}>
        <Flex vertical gap={32} flex={1}>
          <Typography.Title
            level={1}
            style={{ color: token.colorWhite, margin: 0 }}
          >
            Effortless API Optimization Infrastructure
          </Typography.Title>
          <Typography.Paragraph style={{ color: token.colorWhite }}>
            Dive into our innovative solutions designed to revolutionize your
            onboarding and streamline asynchronous processes. Experience the
            power of optimized API latency and slashed maintenance costs,
            tailored for businesses of all sizes and industries.
          </Typography.Paragraph>
        </Flex>

        <Flex flex={1}>
          <LandingImage />
        </Flex>
      </Flex>
    </Flex>
  );
};

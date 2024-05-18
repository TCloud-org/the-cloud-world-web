import { Flex, Typography, theme } from "antd";
import { LandingContainer } from "./LandingContainer";

export const CustomerOnboardingWhyUs = () => {
  const { token } = theme.useToken();

  return (
    <LandingContainer>
      <Flex vertical gap={32}>
        <Typography.Title
          level={4}
          style={{ color: token.colorPrimary, margin: 0 }}
          className="text-center"
        >
          WHY US
        </Typography.Title>
      </Flex>
    </LandingContainer>
  );
};

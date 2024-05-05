import { Button, Flex, Typography } from "antd";
import { LandingContainer } from "./LandingContainer";

export const LandingContactSales = () => {
  return (
    <LandingContainer light>
      <Flex vertical gap={32} align="center">
        <Typography.Title level={2} style={{ margin: 0 }}>
          Connect with an expert
        </Typography.Title>

        <Typography.Paragraph style={{ textAlign: "center", width: "50%" }}>
          We're here to help accelerate your business launch. Our platform is
          for companies that want to decouple their backend systems to handle
          various asynchronous tasks, significantly reducing latency to maximize
          your business's customer experience
        </Typography.Paragraph>

        <Flex justify="center">
          <Button type="primary">Speak to our team</Button>
        </Flex>
      </Flex>
    </LandingContainer>
  );
};

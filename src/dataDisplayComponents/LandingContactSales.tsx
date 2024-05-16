import { Flex, Typography } from "antd";
import { PricingButton } from "../dataEntryComponents/PricingButton";
import { LandingContainer } from "./LandingContainer";

export const LandingContactSales = () => {
  return (
    <LandingContainer className="bg-transparent bg-img">
      <Flex vertical gap={32} align="center">
        <Typography.Title level={2} style={{ margin: 0, color: "white" }}>
          Connect with an expert
        </Typography.Title>

        <Typography.Paragraph
          style={{ textAlign: "center" }}
          className="text-white text-lg px-4 lg:px-60"
        >
          We're here to help accelerate your business launch. Our platform is
          for companies that want to decouple their backend systems to handle
          various asynchronous tasks, significantly reducing latency to maximize
          your business's customer experience
        </Typography.Paragraph>

        <Flex justify="center">
          <PricingButton href="/contact" variant="solid">
            Speak to our team
          </PricingButton>
        </Flex>
      </Flex>
    </LandingContainer>
  );
};

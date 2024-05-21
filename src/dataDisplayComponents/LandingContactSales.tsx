import { Flex, Typography } from "antd";
import { PricingButton } from "../dataEntryComponents/PricingButton";
import { LandingContainer } from "./LandingContainer";

export const LandingContactSales = (props: {
  title?: string;
  description?: string;
}) => {
  const {
    title = "Connect with an expert",
    description = `We're here to help accelerate your business launch. Our platform is
  for companies that want to decouple their backend systems to handle
  various asynchronous tasks, significantly reducing latency to maximize
  your business's customer experience`,
  } = props;
  return (
    <LandingContainer className=" w-full" gutter={[0, 0]}>
      <Flex vertical gap={32} align="center" className="text-center">
        <Typography.Title level={2} style={{ margin: 0 }}>
          {title}
        </Typography.Title>

        <Typography.Paragraph
          style={{ textAlign: "center" }}
          className=" text-lg px-0 lg:px-60"
        >
          {description}
        </Typography.Paragraph>

        <Flex justify="center">
          <PricingButton
            href="/contact"
            variant="solid"
            className="bg-slate-800 text-white hover:text-slate-200 hover:bg-slate-800"
          >
            Speak to our team
          </PricingButton>
        </Flex>
      </Flex>
    </LandingContainer>
  );
};

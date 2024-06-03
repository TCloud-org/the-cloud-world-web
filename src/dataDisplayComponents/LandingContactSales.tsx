import { Flex, Typography } from "antd";
import { ThemeButton } from "../dataEntryComponents/ThemeButton";
import { LandingContainer } from "./LandingContainer";
import { LandingTitle } from "./LandingTitle";

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
        <LandingTitle>{title}</LandingTitle>

        <Typography.Paragraph
          style={{ textAlign: "center" }}
          className=" text-lg px-0 lg:px-60 text-washed-purple-500"
        >
          {description}
        </Typography.Paragraph>

        <Flex justify="center">
          <ThemeButton>Speak to our team</ThemeButton>
        </Flex>
      </Flex>
    </LandingContainer>
  );
};

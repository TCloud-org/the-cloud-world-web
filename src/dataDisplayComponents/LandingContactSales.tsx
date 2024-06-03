import { Flex, Typography } from "antd";
import { ThemeButton } from "../dataEntryComponents/ThemeButton";
import { LandingContainer } from "./LandingContainer";
import { LandingTitle } from "./LandingTitle";

export const LandingContactSales = (props: {
  title?: string;
  description?: string;
}) => {
  const {
    title = "Still have questions?",
    description = `Let's talk about your potential solutions.`,
  } = props;
  return (
    <LandingContainer className=" w-full" gutter={[0, 0]}>
      <Flex vertical gap={32} align="center" className="text-center">
        <LandingTitle>{title}</LandingTitle>

        <Typography.Paragraph
          style={{ textAlign: "center" }}
          className=" text-lg px-0 lg:px-60 text-neutral-7"
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

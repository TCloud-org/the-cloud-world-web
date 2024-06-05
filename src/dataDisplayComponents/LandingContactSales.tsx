import { Flex, Typography } from "antd";
import { ThemeButton } from "../dataEntryComponents/ThemeButton";
import { LandingTitle } from "./LandingTitle";
import { SectionContainer } from "./SectionContainer";

export const LandingContactSales = (props: {
  title?: string;
  description?: string;
}) => {
  const {
    title = "Still have questions?",
    description = `Let's talk about your potential solutions.`,
  } = props;
  return (
    <SectionContainer>
      <Flex vertical gap={32} align="center" className="text-center">
        <LandingTitle>{title}</LandingTitle>

        <Typography.Paragraph
          style={{ textAlign: "center" }}
          className=" text-lg px-0 lg:px-60 text-paragraph"
        >
          {description}
        </Typography.Paragraph>

        <Flex justify="center">
          <ThemeButton href="/contact">Speak to our team</ThemeButton>
        </Flex>
      </Flex>
    </SectionContainer>
  );
};

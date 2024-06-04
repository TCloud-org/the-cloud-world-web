import { Flex, Typography } from "antd";
import { ReactNode } from "react";
import { LandingTitle } from "./LandingTitle";

export const PageHeading = (props: {
  title?: ReactNode;
  description?: ReactNode;
  endDecorator?: ReactNode;
  color?: "light" | "dark";
  className?: string;
}) => {
  const { className } = props;

  return (
    <Flex
      vertical
      gap={32}
      className={`h-full max-w-screen-lg ml-auto mr-auto ${className}`}
    >
      <LandingTitle>{props.title}</LandingTitle>
      <Typography.Paragraph className="!text-paragraph !text-[20px]">
        {props.description}
      </Typography.Paragraph>

      {props.endDecorator}
    </Flex>
  );
};

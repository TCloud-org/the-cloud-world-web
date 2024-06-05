import { Flex, Typography } from "antd";
import { ReactNode } from "react";
import { LandingTitle } from "../LandingComponents/LandingTitle";

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
      className={`h-full max-w-screen-md ml-auto mr-auto ${className}`}
    >
      <LandingTitle>{props.title}</LandingTitle>
      <Typography.Paragraph className="!text-[20px] text-neutral-6">
        {props.description}
      </Typography.Paragraph>

      {props.endDecorator}
    </Flex>
  );
};

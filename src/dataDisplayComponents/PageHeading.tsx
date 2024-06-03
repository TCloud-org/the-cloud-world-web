import { Flex, Typography, theme } from "antd";
import { ReactNode } from "react";
import { LandingTitle } from "./LandingTitle";

export const PageHeading = (props: {
  title?: ReactNode;
  description?: ReactNode;
  endDecorator?: ReactNode;
  color?: "light" | "dark";
  className?: string;
}) => {
  const { token } = theme.useToken();
  const { color = "light", className } = props;

  return (
    <Flex
      vertical
      gap={32}
      className={`h-full max-w-screen-lg ml-auto mr-auto ${className}`}
    >
      <LandingTitle>{props.title}</LandingTitle>
      <Typography.Paragraph
        style={{
          color: color === "light" ? token.colorWhite : undefined,
          fontSize: 18,
        }}
        className="!text-washed-purple-500"
      >
        {props.description}
      </Typography.Paragraph>

      {props.endDecorator}
    </Flex>
  );
};

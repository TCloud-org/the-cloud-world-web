import { Flex, Typography, theme } from "antd";
import { ReactNode } from "react";

export const PageHeading = (props: {
  title?: string;
  description?: string;
  endDecorator?: ReactNode;
  color?: "light" | "dark";
}) => {
  const { token } = theme.useToken();
  const { color = "light" } = props;

  return (
    <Flex vertical gap={32} className="h-full">
      <Typography.Title
        level={1}
        style={{
          color: color === "light" ? token.colorWhite : undefined,
          margin: 0,
        }}
      >
        {props.title}
      </Typography.Title>
      <Typography.Paragraph
        style={{ color: color === "light" ? token.colorWhite : undefined }}
      >
        {props.description}
      </Typography.Paragraph>

      {props.endDecorator}
    </Flex>
  );
};

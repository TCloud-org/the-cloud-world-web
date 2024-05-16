import { Flex, Typography, theme } from "antd";
import { ReactNode } from "react";

export const PageHeading = (props: {
  title?: string;
  description?: string;
  endDecorator?: ReactNode;
}) => {
  const { token } = theme.useToken();

  return (
    <Flex vertical gap={32}>
      <Typography.Title
        level={1}
        style={{ color: token.colorWhite, margin: 0 }}
      >
        {props.title}
      </Typography.Title>
      <Typography.Paragraph style={{ color: token.colorWhite }}>
        {props.description}
      </Typography.Paragraph>

      {props.endDecorator}
    </Flex>
  );
};

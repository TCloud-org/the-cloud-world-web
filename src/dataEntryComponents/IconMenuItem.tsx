import { Flex, Typography, theme } from "antd";
import { ReactElement, ReactNode, cloneElement } from "react";

export const IconMenuItem = (props: {
  icon?: ReactNode;
  children?: string;
}) => {
  const { token } = theme.useToken();

  return (
    <Flex
      align="center"
      gap={16}
      className="menu-hover"
      style={{ padding: 8, borderRadius: token.borderRadius }}
    >
      <Flex
        style={{
          backgroundColor: `${token.colorPrimaryBgHover}55`,
          borderRadius: token.borderRadius,
          padding: 6,
        }}
      >
        {cloneElement(props.icon as ReactElement, {
          style: { color: token.colorPrimary, fontSize: "12px" },
        })}
      </Flex>
      <Typography.Text strong>{props.children}</Typography.Text>
    </Flex>
  );
};

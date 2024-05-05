import { Flex, Typography, theme } from "antd";
import { ReactElement, ReactNode, cloneElement } from "react";
import { useNavigate } from "react-router-dom";

export const IconMenuItem = (props: {
  icon?: ReactNode;
  children?: string;
  href?: string;
  onOpen?: (e: boolean) => void;
}) => {
  const { token } = theme.useToken();
  const navigate = useNavigate();
  const { onOpen = () => {} } = props;

  return (
    <Flex
      align="center"
      gap={16}
      className="menu-hover"
      style={{ padding: 8, borderRadius: token.borderRadius }}
      onClick={() => {
        navigate(props.href as string);
        onOpen(false);
      }}
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

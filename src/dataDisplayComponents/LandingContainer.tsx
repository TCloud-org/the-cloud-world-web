import { Flex } from "antd";
import { lightColor } from "../config/layoutConfig";
import { ReactNode } from "react";

export const LandingContainer = (props: {
  light?: boolean;
  children?: ReactNode;
}) => {
  return (
    <Flex
      style={{
        padding: "128px 64px",
        backgroundColor: props.light ? lightColor : undefined,
      }}
      justify="center"
      align="center"
      gap={32}
    >
      {props.children}
    </Flex>
  );
};

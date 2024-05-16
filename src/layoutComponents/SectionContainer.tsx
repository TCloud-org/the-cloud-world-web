import { Flex } from "antd";
import { lightColor } from "../config/layoutConfig";
import { ReactNode } from "react";

export const SectionContainer = (props: {
  children?: ReactNode;
  light?: boolean;
  className?: string;
}) => {
  return (
    <Flex
      style={{
        backgroundColor: props.light ? lightColor : undefined,
        padding: "128px 64px",
      }}
      justify="center"
      align="center"
      className={props.className}
    >
      {props.children}
    </Flex>
  );
};

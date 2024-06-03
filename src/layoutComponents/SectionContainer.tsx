import { Flex } from "antd";
import { lightColor } from "../config/layoutConfig";
import { CSSProperties, ReactNode } from "react";

export const SectionContainer = (props: {
  children?: ReactNode;
  light?: boolean;
  className?: string;
  style?: CSSProperties;
}) => {
  return (
    <Flex
      style={{
        backgroundColor: props.light ? lightColor : undefined,
        ...props.style,
      }}
      justify="center"
      align="center"
      className={`px-4 py-24 lg:py-32 overflow-hidden ${props.className}`}
    >
      {props.children}
    </Flex>
  );
};

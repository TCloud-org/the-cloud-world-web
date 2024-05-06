import { Row } from "antd";
import { CSSProperties, ReactNode } from "react";
import { lightColor } from "../config/layoutConfig";

export const LandingContainer = (props: {
  light?: boolean;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}) => {
  return (
    <Row
      style={{
        padding: "128px 64px",
        backgroundColor: props.light ? lightColor : undefined,
        justifyContent: "center",
        alignItems: "center",
        ...props.style,
      }}
      gutter={[64, 64]}
      className={props.className}
    >
      {props.children}
    </Row>
  );
};

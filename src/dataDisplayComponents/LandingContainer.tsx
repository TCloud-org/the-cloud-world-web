import { Row } from "antd";
import { ReactNode } from "react";
import { lightColor } from "../config/layoutConfig";

export const LandingContainer = (props: {
  light?: boolean;
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <Row
      style={{
        padding: "128px 64px",
        backgroundColor: props.light ? lightColor : undefined,
        justifyContent: "center",
        alignItems: "center",
      }}
      gutter={[32, 32]}
      className={props.className}
    >
      {props.children}
    </Row>
  );
};

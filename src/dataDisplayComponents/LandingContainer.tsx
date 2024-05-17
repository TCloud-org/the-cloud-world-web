import { Row } from "antd";
import { CSSProperties, ReactNode } from "react";
import { SectionContainer } from "../layoutComponents/SectionContainer";

export const LandingContainer = (props: {
  light?: boolean;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  gutter?: [number, number];
}) => {
  return (
    <SectionContainer
      light={props.light}
      className={props.className}
      style={props.style}
    >
      <Row
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
        gutter={props.gutter || [64, 64]}
        className="max-w-screen-2xl"
      >
        {props.children}
      </Row>
    </SectionContainer>
  );
};

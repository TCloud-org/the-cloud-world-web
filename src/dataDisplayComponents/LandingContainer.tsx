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
    <SectionContainer light={props.light} className={props.className}>
      <Row
        style={{
          justifyContent: "center",
          ...props.style,
        }}
        gutter={props.gutter || [64, 64]}
        className="max-w-screen-2xl"
      >
        {props.children}
      </Row>
    </SectionContainer>
  );
};

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
          alignItems: "center",
          ...props.style,
        }}
        gutter={props.gutter}
        className="max-w-screen-2xl"
      >
        {props.children}
      </Row>
    </SectionContainer>
  );
};

import { Col, Flex, Row, Typography } from "antd";
import { Gutter } from "antd/es/grid/row";
import { ReactNode } from "react";
import { Span } from "../config/layoutConfig";
import { Step } from "./Step";

export const LandingInfo = (props: {
  position?: "left" | "right";
  section?: string;
  title?: ReactNode;
  description?: ReactNode;
  demonstration?: ReactNode;
  gutter?: Gutter | [Gutter, Gutter];
  step?: number;
  action?: ReactNode;
  className?: string;
}) => {
  const { position = "left", gutter = [64, 64], step, className = "" } = props;

  const col = position === "left" ? "flex-col-reverse" : "flex-col";
  const demonstrationClassName = "w-screen lg:w-fit";

  return (
    <Row
      gutter={gutter}
      className={`items-center ${col} lg:flex-row ${className}`}
    >
      {position === "left" && (
        <Col {...Span[2]} className={demonstrationClassName}>
          {props.demonstration}
        </Col>
      )}

      <Col {...Span[props.demonstration ? 2 : 1]}>
        <Flex vertical gap={32}>
          <h4 className="text-lg font-heading-4 text-white flex items-center gap-4">
            {step && <Step>{`S${step}`}</Step>}
            {props.section?.toUpperCase()}
          </h4>

          <h2 className="text-[1.875rem] leading-9 font-bold text-white">
            {props.title}
          </h2>

          <Typography.Paragraph
            style={{ margin: 0, fontSize: "1.25rem" }}
            className="text-paragraph"
          >
            {props.description}
          </Typography.Paragraph>

          {props.action}
        </Flex>
      </Col>

      {position === "right" && (
        <Col {...Span[2]} className={demonstrationClassName}>
          {props.demonstration}
        </Col>
      )}
    </Row>
  );
};

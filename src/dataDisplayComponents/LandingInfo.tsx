import { Col, Flex, Row, Typography, theme } from "antd";
import { Span } from "../config/layoutConfig";
import { ReactNode } from "react";
import { Gutter } from "antd/es/grid/row";

export const LandingInfo = (props: {
  position?: "left" | "right";
  section?: string;
  title?: string;
  description?: string;
  demonstration?: ReactNode;
  gutter?: Gutter | [Gutter, Gutter];
}) => {
  const { token } = theme.useToken();

  const { position = "left", gutter = [64, 64] } = props;

  return (
    <Row gutter={gutter} className="w-full items-center">
      {position === "left" && (
        <Col {...Span[2]} className="flex flex-col">
          {props.demonstration}
        </Col>
      )}

      <Col
        {...Span[props.demonstration ? 2 : 1]}
        className="flex flex-col w-full"
      >
        <Flex vertical gap={32}>
          <Typography.Title
            level={5}
            style={{ margin: 0, color: token.colorPrimary, fontSize: "1rem" }}
          >
            {props.section?.toUpperCase()}
          </Typography.Title>

          <Typography.Title
            level={2}
            style={{ margin: 0, fontSize: "1.75rem" }}
          >
            {props.title}
          </Typography.Title>

          <Typography.Paragraph style={{ margin: 0, fontSize: "1.25rem" }}>
            {props.description}
          </Typography.Paragraph>
        </Flex>
      </Col>

      {position === "right" && (
        <Col {...Span[2]} className="flex flex-col">
          {props.demonstration}
        </Col>
      )}
    </Row>
  );
};

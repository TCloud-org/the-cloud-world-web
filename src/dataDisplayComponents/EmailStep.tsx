import { PlusOutlined } from "@ant-design/icons";
import { Col, Flex, Typography, theme } from "antd";
import { Fragment, ReactNode } from "react";
import { createSpan } from "../config/layoutConfig";
import { AnimatedCard } from "./AnimatedCard";
import { LandingContainer } from "../LandingComponents/LandingContainer";
import { SyntaxHighlighter } from "./SyntaxHighlighter";

export interface ParagraphPoint {
  title?: string | ReactNode;
  description?: string;
  code?: string;
}

export interface EmailStepProps {
  title?: string;
  subtitle?: string;
  icon?: ReactNode;
  step?: string;
  index?: number;
  points?: ParagraphPoint[];
}

export const EmailStep = (props: EmailStepProps) => {
  const { token } = theme.useToken();
  const { index = 0, points = [] } = props;

  return (
    <LandingContainer
      style={{
        borderTop: index > 0 ? `1px dashed ${token.colorBorder}` : "none",
        position: "relative",
      }}
    >
      <Col {...createSpan(10)}>
        <Flex justify="center" align="center">
          <AnimatedCard icon={props.icon}>{props.step}</AnimatedCard>
        </Flex>
      </Col>

      <Col {...createSpan(14)}>
        <Flex vertical gap={16}>
          <Typography.Title
            level={5}
            style={{ margin: 0, color: token.colorPrimary }}
          >
            {props.title}
          </Typography.Title>

          {points.map((point, i) => (
            <Fragment key={i}>
              <Typography.Title level={3} style={{ margin: 0 }}>
                {point.title}
              </Typography.Title>

              <Typography.Paragraph style={{ fontSize: 16 }}>
                {point.description}
              </Typography.Paragraph>

              {point.code && (
                <SyntaxHighlighter language="java">
                  {point.code}
                </SyntaxHighlighter>
              )}
            </Fragment>
          ))}
        </Flex>
      </Col>

      {index > 0 && (
        <div
          style={{
            position: "absolute",
            top: 0,
            right: "50%",
            transform: "translate(50%, -50%)",
            height: 22,
            width: 22,
            borderRadius: 100,
            border: `1px dashed ${token.colorBorder}`,
            overflow: "clip",
            background: token.colorBgContainer,
            zIndex: 1,
          }}
          className="flex justify-center items-center"
        >
          <PlusOutlined style={{ color: token.colorBorder }} />
        </div>
      )}
    </LandingContainer>
  );
};

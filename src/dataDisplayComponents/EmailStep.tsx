import { Col, Flex, Typography, theme } from "antd";
import { Fragment, ReactNode } from "react";
import { Span } from "../config/layoutConfig";
import { AnimatedCard } from "./AnimatedCard";
import { LandingContainer } from "./LandingContainer";
import { PlusOutlined } from "@ant-design/icons";

export interface EmailStepProps {
  title?: string;
  subtitle?: string;
  icon?: ReactNode;
  step?: string;
  index?: number;
  points?: { title?: string; description?: string }[];
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
      <Col {...Span[2]}>
        <Flex justify="center" align="center">
          <AnimatedCard icon={props.icon}>{props.step}</AnimatedCard>
        </Flex>
      </Col>

      <Col {...Span[2]}>
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

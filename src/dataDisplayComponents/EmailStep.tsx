import { Col, Flex, Typography } from "antd";
import { ReactNode } from "react";
import { Span } from "../config/layoutConfig";
import { AnimatedCard } from "./AnimatedCard";
import { LandingContainer } from "./LandingContainer";

export interface EmailStepProps {
  title?: string;
  description?: string;
  icon?: ReactNode;
  step?: string;
}

export const EmailStep = (props: EmailStepProps) => {
  return (
    <LandingContainer>
      <Col {...Span[2]}>
        <Flex vertical gap={32}>
          <Typography.Title level={2} style={{ margin: 0 }}>
            {props.title}
          </Typography.Title>

          <Typography.Paragraph style={{ fontSize: 18 }}>
            {props.description}
          </Typography.Paragraph>
        </Flex>
      </Col>

      <Col {...Span[2]}>
        <Flex justify="center" align="center">
          <AnimatedCard icon={props.icon}>{props.step}</AnimatedCard>
        </Flex>
      </Col>
    </LandingContainer>
  );
};

import { ApiOutlined } from "@ant-design/icons";
import { Col, Flex, Typography } from "antd";
import { Span } from "../config/layoutConfig";
import { AnimatedCard } from "./AnimatedCard";
import { LandingContainer } from "./LandingContainer";

export const EmailTrigger = () => {
  return (
    <LandingContainer>
      <Col {...Span[2]}>
        <Flex vertical gap={32}>
          <Typography.Title level={2} style={{ margin: 0 }}>
            Ease of integration
          </Typography.Title>

          <Typography.Paragraph style={{ fontSize: 18 }}>
            Engineered for maximum efficiency, our solution optimizes your
            engineers' time investment. Seamlessly integrate with a single,
            synchronized API, simplifying the process with unparalleled ease.
            Featuring an intuitive interface, understanding its functionality is
            effortlessly seamless, guaranteeing a smooth transition for your
            team.
          </Typography.Paragraph>
        </Flex>
      </Col>

      <Col {...Span[2]}>
        <Flex justify="center" align="center">
          <AnimatedCard icon={<ApiOutlined />}>Trigger</AnimatedCard>
        </Flex>
      </Col>
    </LandingContainer>
  );
};

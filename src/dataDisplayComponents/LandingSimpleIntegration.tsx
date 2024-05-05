import { Col, Flex, Image, Typography } from "antd";
import { LandingContainer } from "./LandingContainer";
import { Span } from "../config/layoutConfig";

export const LandingSimpleIntegration = () => {
  return (
    <LandingContainer light>
      <Col {...Span[2]}>
        <Flex vertical gap={32} flex={1}>
          <Typography.Title level={2} style={{ margin: 0 }}>
            Simple integration
          </Typography.Title>
          <Typography.Title level={4} style={{ margin: 0 }}>
            Integration
          </Typography.Title>
          <Typography.Paragraph>
            Experience effortless integration with our platform, enabling you to
            kickstart asynchronous tasks seamlessly through a single,
            synchronized API call
          </Typography.Paragraph>
          <Typography.Title level={4} style={{ margin: 0 }}>
            Time saving
          </Typography.Title>
          <Typography.Paragraph>
            Simplify your workflow and save valuable time with our intuitive
            solution, designed to streamline your processes and enhance
            efficiency
          </Typography.Paragraph>
        </Flex>
      </Col>

      <Col {...Span[2]}>
        <Image
          src="https://tcw-images.s3.us-west-2.amazonaws.com/simple-integration.png"
          preview={false}
        />
      </Col>
    </LandingContainer>
  );
};

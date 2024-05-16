import { Col, Flex, Image, Row, Typography, theme } from "antd";
import { createSpan } from "../config/layoutConfig";
import { SectionContainer } from "../layoutComponents/SectionContainer";

export const StepWorkflowEntity = () => {
  const { token } = theme.useToken();

  return (
    <SectionContainer>
      <Row gutter={[64, 64]} className="max-w-screen-2xl">
        <Col {...createSpan(12)}>
          <Flex vertical gap={32}>
            <Typography.Title level={2} style={{ margin: 0 }}>
              Access insights from every data model with each process
            </Typography.Title>
            <Typography.Paragraph style={{ fontSize: 18 }}>
              Unlock unparalleled understanding with our solution, granting you
              access to valuable insights from every data model at every stage
              of your processes. With this holistic view, you can make informed
              decisions, optimize performance, and drive your business forward
              with confidence.
            </Typography.Paragraph>
          </Flex>
        </Col>
        <Col {...createSpan(12)}>
          <Image
            src="https://tcw-images.s3.us-west-2.amazonaws.com/entity.png"
            className="shadow"
            width="100%"
            preview={false}
            style={{ borderRadius: token.borderRadiusLG }}
          />
        </Col>
      </Row>
    </SectionContainer>
  );
};

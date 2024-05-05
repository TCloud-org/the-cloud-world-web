import { Col, Flex, Image, Row, Typography, theme } from "antd";
import { createSpan } from "../config/layoutConfig";

export const StepWorkflowLog = () => {
  const { token } = theme.useToken();

  return (
    <Row gutter={[64, 64]} style={{ padding: "128px 64px" }}>
      <Col {...createSpan(12)}>
        <Flex vertical gap={32}>
          <Typography.Title level={2} style={{ margin: 0 }}>
            Monitor data model changes in real-time
          </Typography.Title>
          <Typography.Paragraph style={{ fontSize: 18 }}>
            Stay ahead of the curve with our real-time data model monitoring
            solution. Empower your team to track changes instantly, ensuring
            agile decision-making and proactive adaptation to evolving business
            needs. Boost efficiency, minimize risk, and drive growth with
            unparalleled visibility into your data landscape.
          </Typography.Paragraph>
        </Flex>
      </Col>
      <Col {...createSpan(12)}>
        <Flex
          vertical
          style={{
            paddingRight: 48,
            paddingBottom: 180,
          }}
        >
          <Image
            src="https://tcw-images.s3.us-west-2.amazonaws.com/log.png"
            className="shadow"
            width="100%"
            preview={false}
            style={{ borderRadius: token.borderRadiusLG }}
          />
          <Image
            src="https://tcw-images.s3.us-west-2.amazonaws.com/log2.png"
            className="shadow"
            width="100%"
            preview={false}
            style={{
              borderRadius: token.borderRadiusLG,
              position: "absolute",
              right: -48,
              top: -48,
            }}
          />
        </Flex>
      </Col>
    </Row>
  );
};

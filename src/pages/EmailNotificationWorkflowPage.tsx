import { Col, Flex, Row } from "antd";
import { Span } from "../config/layoutConfig";
import { HeaderHeight } from "../layoutComponents/AppHeader";

export const EmailNotificationWorkflowPage = () => {
  return (
    <Flex vertical>
      <div style={{ height: HeaderHeight }} />

      <Row gutter={[64, 64]}>
        <Col {...Span[2]}></Col>
      </Row>
    </Flex>
  );
};

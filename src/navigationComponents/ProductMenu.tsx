import { PartitionOutlined, SendOutlined } from "@ant-design/icons";
import { Col, Flex, Row, Typography, theme } from "antd";
import { Span } from "../config/layoutConfig";
import { IconMenuItem } from "../dataEntryComponents/IconMenuItem";

const menuItemWidth = 300;

export const ProductMenu = () => {
  const { token } = theme.useToken();

  return (
    <Flex
      style={{
        background: token.colorBgContainer,
        boxShadow: token.boxShadowSecondary,
        borderRadius: token.borderRadius,
        padding: "16px 32px",
      }}
    >
      <Row gutter={[16, 16]}>
        <Col {...Span[2]} style={{ width: menuItemWidth }}>
          <Flex vertical gap={16}>
            <Typography.Text strong>Optimization</Typography.Text>
            <IconMenuItem icon={<PartitionOutlined />}>
              Step Workflow
            </IconMenuItem>
          </Flex>
        </Col>

        <Col {...Span[2]} style={{ width: menuItemWidth }}>
          <Flex vertical gap={16}>
            <Typography.Text strong>Automation</Typography.Text>
            <IconMenuItem icon={<SendOutlined />}>
              Email Notification Workflow
            </IconMenuItem>
          </Flex>
        </Col>
      </Row>
    </Flex>
  );
};

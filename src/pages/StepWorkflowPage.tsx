import { Button, Col, Flex, Image, Row, Typography, theme } from "antd";
import { createSpan } from "../config/layoutConfig";
import { HeaderHeight } from "../layoutComponents/AppHeader";
import { RightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export const StepWorkflowPage = () => {
  const { token } = theme.useToken();
  const navigate = useNavigate();

  return (
    <Flex vertical className="aurora-light">
      <div style={{ height: HeaderHeight }} />
      <Row gutter={[64, 64]} style={{ padding: 64 }}>
        <Col {...createSpan(10)}>
          <Flex vertical gap={16}>
            <Typography.Title level={1} style={{ marginTop: 0, fontSize: 44 }}>
              Streamline asynchronous processes: Unlock business efficiency
            </Typography.Title>
            <Typography.Paragraph style={{ fontSize: 18 }}>
              TCW Step Workflow is the easiest and most comprehensive way to
              streamline and manage asynchronous processes effortlessly.
            </Typography.Paragraph>

            <Flex align="center" gap={16}>
              <Button
                type="primary"
                icon={<RightOutlined style={{ fontSize: 10 }} />}
                iconPosition="end"
                onClick={() =>
                  window.open("https://www.tc-workflow.com", "_blank")
                }
              >
                Start now
              </Button>

              <Button
                iconPosition="end"
                type="text"
                icon={<RightOutlined style={{ fontSize: 10 }} />}
                style={{ color: token.colorPrimary }}
                className="button-outline"
                onClick={() => navigate("/contact")}
              >
                Contact sales
              </Button>
            </Flex>
          </Flex>
        </Col>
        <Col {...createSpan(14)}>
          <Image
            src="https://tcw-images.s3.us-west-2.amazonaws.com/api-workflow-1.png"
            className="shadow"
            width="100%"
            preview={false}
            style={{ borderRadius: token.borderRadiusLG, objectFit: "cover" }}
          />
        </Col>
      </Row>
    </Flex>
  );
};

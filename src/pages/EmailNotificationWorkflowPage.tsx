import { Button, Col, Flex, Image, Row, Typography, theme } from "antd";
import { Span } from "../config/layoutConfig";
import { HeaderHeight } from "../layoutComponents/AppHeader";
import { RightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export const EmailNotificationWorkflowPage = () => {
  const { token } = theme.useToken();
  const navigate = useNavigate();

  const routeToContact = () => {
    navigate("/contact");
  };

  return (
    <Flex vertical>
      <div style={{ height: HeaderHeight }} />

      <Row gutter={[64, 64]} style={{ padding: "128px 64px" }}>
        <Col {...Span[2]}>
          <Flex vertical gap={16}>
            <Typography.Title level={1} style={{ marginTop: 0, fontSize: 44 }}>
              Transform your communication landscape: Unleash the power of email
              automation
            </Typography.Title>
            <Typography.Paragraph style={{ fontSize: 18 }}>
              Engage and delight your customers with personalized email
              notifications powered by our cutting-edge marketing automation
              platform. From welcome emails to exclusive offers, stay connected
              effortlessly and drive meaningful interactions at every
              touchpoint.
            </Typography.Paragraph>

            <Flex align="center" gap={16}>
              <Button
                type="primary"
                iconPosition="end"
                onClick={() =>
                  window.open("https://www.tc-workflow.com", "_blank")
                }
              >
                Get started
              </Button>

              <Button
                iconPosition="end"
                type="link"
                icon={<RightOutlined style={{ fontSize: 10 }} />}
                style={{ color: token.colorPrimary }}
                onClick={routeToContact}
              >
                Contact sales
              </Button>
            </Flex>
          </Flex>
        </Col>

        <Col {...Span[2]}>
          <Image
            src="https://tcw-images.s3.us-west-2.amazonaws.com/email.png"
            className="shadow"
            preview={false}
            style={{ borderRadius: token.borderRadiusLG }}
          />
        </Col>
      </Row>
    </Flex>
  );
};

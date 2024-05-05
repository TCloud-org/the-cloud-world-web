import {
  Button,
  Col,
  Divider,
  Flex,
  Image,
  Row,
  Typography,
  theme,
} from "antd";
import { createSpan } from "../config/layoutConfig";
import { HeaderHeight } from "../layoutComponents/AppHeader";
import { RightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { StepWorkflowEntity } from "../dataDisplayComponents/StepWorkflowEntity";
import { StepWorkflowTenets } from "../dataDisplayComponents/StepWorkflowTenets";
import { StepWorkflowLog } from "../dataDisplayComponents/StepWorkflowLog";
import { LandingContainer } from "../dataDisplayComponents/LandingContainer";

export const StepWorkflowPage = () => {
  const { token } = theme.useToken();
  const navigate = useNavigate();

  const routeToContact = () => navigate("/contact");

  return (
    <Flex vertical className="aurora-light">
      <div style={{ height: HeaderHeight }} />
      <Row gutter={[64, 64]} style={{ padding: "128px 64px" }}>
        <Col {...createSpan(12)}>
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
        <Col {...createSpan(12)}>
          <Image
            src="https://tcw-images.s3.us-west-2.amazonaws.com/api-workflow-1.png"
            className="shadow"
            preview={false}
            style={{ borderRadius: token.borderRadiusLG }}
          />
        </Col>
      </Row>

      <StepWorkflowTenets />

      <StepWorkflowEntity />

      <Divider />

      <StepWorkflowLog />

      <LandingContainer light>
        <Flex vertical gap={32} align="center">
          <Typography.Title
            level={2}
            style={{ margin: 0, textAlign: "center" }}
          >
            Ready to supercharge your projects? Get started today!
          </Typography.Title>

          <Flex justify="center">
            <Button type="primary" onClick={routeToContact}>
              Contact sales
            </Button>
          </Flex>
        </Flex>
      </LandingContainer>
    </Flex>
  );
};

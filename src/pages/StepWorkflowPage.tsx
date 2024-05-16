import { RightOutlined } from "@ant-design/icons";
import {
  ApiRounded,
  FastForwardRounded,
  MonetizationOnRounded,
  SettingsSuggestRounded,
} from "@mui/icons-material";
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
import { useNavigate } from "react-router-dom";
import { Span } from "../config/layoutConfig";
import { LandingContactSales } from "../dataDisplayComponents/LandingContactSales";
import { StepWorkflowEntity } from "../dataDisplayComponents/StepWorkflowEntity";
import { StepWorkflowLog } from "../dataDisplayComponents/StepWorkflowLog";
import { Tenets, TenetsProps } from "../dataDisplayComponents/Tenets";
import { HeaderHeight } from "../layoutComponents/AppHeader";

const tenets: TenetsProps["tenets"] = [
  {
    icon: <ApiRounded />,
    title: "Ease of integration",
    description:
      "Make it as easy as possible for developers to integrate and use our APIs. Provide comprehensive documentation, code examples, and SDKs in popular programming languages.",
  },
  {
    icon: <SettingsSuggestRounded />,
    title: "Customization & flexibility",
    description:
      "Provide flexibility and customization options to meet the diverse needs of your customers. Allow developers to customize endpoints, parameters, and payloads to suit their specific requirements.",
  },
  {
    icon: <MonetizationOnRounded />,
    title: "Time saving, cost reduction",
    description:
      "Efficiently manage all your resources in one centralized platform, saving significant time and reducing maintenance costs.",
  },
  {
    icon: <FastForwardRounded />,
    title: "Speed",
    description:
      "Speed matters in business. Our API workflow ensures swift task execution and batch action capabilities, keeping you ahead of the game.",
  },
];

export const StepWorkflowPage = () => {
  const { token } = theme.useToken();
  const navigate = useNavigate();

  const routeToContact = () => navigate("/contact");

  return (
    <Flex vertical>
      <div style={{ height: HeaderHeight }} />
      <Row gutter={[64, 64]} style={{ padding: "128px 64px" }}>
        <Col {...Span[2]}>
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
                  window.open(
                    "https://www.stepworkflow.thecloudworlds.com",
                    "_blank"
                  )
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
            src="https://tcw-images.s3.us-west-2.amazonaws.com/api-workflow-1.png"
            className="shadow"
            preview={false}
            style={{ borderRadius: token.borderRadiusLG }}
          />
        </Col>
      </Row>

      <Tenets tenets={tenets} />

      <StepWorkflowEntity />

      <Divider />

      <StepWorkflowLog />

      <LandingContactSales />
    </Flex>
  );
};

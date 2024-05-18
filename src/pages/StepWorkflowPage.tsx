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
import { PricingButton } from "../dataEntryComponents/PricingButton";
import { SectionContainer } from "../layoutComponents/SectionContainer";
import { WorkflowMockup } from "../dataDisplayComponents/WorkflowMockup";

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
      <Flex vertical className="bg-img overflow-hidden items-center">
        <div style={{ height: HeaderHeight }} />
        <Row
          gutter={[64, 64]}
          style={{ padding: "128px 64px" }}
          className="items-center max-w-screen-2xl"
        >
          <Col {...Span[2]}>
            <Flex vertical gap={16}>
              <Typography.Title
                level={1}
                style={{ marginTop: 0, fontSize: 44, color: "white" }}
              >
                Streamline asynchronous processes: Unlock business efficiency
              </Typography.Title>
              <Typography.Paragraph
                style={{ fontSize: 18 }}
                className="text-white"
              >
                TCW Step Workflow is the easiest and most comprehensive way to
                streamline and manage asynchronous processes effortlessly.
              </Typography.Paragraph>

              <Flex align="center" gap={16}>
                <Flex>
                  <PricingButton
                    href="https://www.stepworkflow.thecloudworlds.com"
                    target="_blank"
                    variant="solid"
                  >
                    Get started
                  </PricingButton>
                </Flex>

                <Flex>
                  <Button
                    iconPosition="end"
                    type="link"
                    icon={<RightOutlined style={{ fontSize: 10 }} />}
                    style={{ color: token.colorWhite, fontWeight: 600 }}
                    onClick={routeToContact}
                    className="link-hover"
                  >
                    Contact sales
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Col>
          <Col {...Span[2]}>
            <Image
              src="https://tcw-images.s3.us-west-2.amazonaws.com/StepWorkflow.png"
              preview={false}
              width="200%"
              fetchPriority="high"
            />
          </Col>
        </Row>
      </Flex>

      <Tenets tenets={tenets} />

      <SectionContainer>
        <Row gutter={[64, 64]} className="max-w-screen-2xl w-full">
          <Col {...Span[2]}>
            <Flex vertical gap={32}>
              <Typography.Title level={2} style={{ margin: 0 }}>
                Introducing Your Logic, Our Execution
              </Typography.Title>
              <Typography.Paragraph style={{ fontSize: 18 }}>
                You have the freedom to innovate, knowing that your unique
                vision will be executed with the highest level of expertise and
                precision. Let us handle the technicalities while you focus on
                what you do best.
              </Typography.Paragraph>
            </Flex>
          </Col>
          <Col {...Span[2]}>
            <WorkflowMockup
              steps={["Your 1st API", "Your 2nd API", "...", "Your nth API"]}
            />
          </Col>
        </Row>
      </SectionContainer>

      <StepWorkflowEntity />

      <Divider />

      <StepWorkflowLog />

      <LandingContactSales />
    </Flex>
  );
};

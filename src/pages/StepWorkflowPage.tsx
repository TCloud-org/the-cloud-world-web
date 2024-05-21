import {
  ApiRounded,
  FastForwardRounded,
  MonetizationOnRounded,
  SettingsSuggestRounded,
} from "@mui/icons-material";
import { Col, Divider, Flex, Image, Row, Typography } from "antd";
import { Span } from "../config/layoutConfig";
import { LandingContactSales } from "../dataDisplayComponents/LandingContactSales";
import { StepWorkflowEntity } from "../dataDisplayComponents/StepWorkflowEntity";
import { StepWorkflowLog } from "../dataDisplayComponents/StepWorkflowLog";
import { Tenets, TenetsProps } from "../dataDisplayComponents/Tenets";
import { WorkflowMockup } from "../dataDisplayComponents/WorkflowMockup";
import { LandingActions } from "../dataEntryComponents/LandingActions";
import { HeaderHeight } from "../layoutComponents/AppHeader";
import { Screen } from "../layoutComponents/Screen";
import { SectionContainer } from "../layoutComponents/SectionContainer";

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

              <LandingActions />
            </Flex>
          </Col>
          <Col {...Span[2]}>
            <Screen className="w-[150%]">
              <Image
                src="https://tcw-images.s3.us-west-2.amazonaws.com/step-workflow-bg.png"
                preview={false}
                fetchPriority="high"
                className="rounded-md"
              />
            </Screen>
          </Col>
        </Row>
      </Flex>

      <Tenets tenets={tenets} />

      <SectionContainer>
        <Row gutter={[64, 64]} className="max-w-screen-2xl">
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

      <Divider />

      <StepWorkflowEntity />

      <Divider />

      <StepWorkflowLog />

      <Divider />

      <LandingContactSales />
    </Flex>
  );
};

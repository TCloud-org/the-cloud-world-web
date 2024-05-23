import {
  AddTaskRounded,
  FastForwardRounded,
  HistoryToggleOffRounded,
  ManageHistoryRounded,
  RestartAltRounded,
  VisibilityRounded,
} from "@mui/icons-material";
import { Col, Divider, Flex, Image, Row, Typography } from "antd";
import { CSSProperties, ReactElement, ReactNode, cloneElement } from "react";
import { Span } from "../config/layoutConfig";
import { LandingContactSales } from "../dataDisplayComponents/LandingContactSales";
import { LandingContainer } from "../dataDisplayComponents/LandingContainer";
import { LandingFlexibility } from "../dataDisplayComponents/LandingFlexibility";
import { LandingSimpleIntegration } from "../dataDisplayComponents/LandingSimpleIntegration";
import { PageHeading } from "../dataDisplayComponents/PageHeading";
import { PricingButton } from "../dataEntryComponents/PricingButton";
import { HeaderHeight } from "../layoutComponents/AppHeader";
import { Screen } from "../layoutComponents/Screen";

interface Elevation {
  icon?: ReactNode;
  title: string;
  subtitle?: string;
}
const elevateWith: Elevation[] = [
  {
    icon: <AddTaskRounded />,
    title: "Simplicity",
    subtitle: "Simple use, simple integration",
  },
  {
    icon: <ManageHistoryRounded />,
    title: "Ease of management",
    subtitle: "Easy to manage resources",
  },
  {
    icon: <RestartAltRounded />,
    title: "Fault tolerant",
    subtitle: "Support retry, rerun, and custom state transition",
  },
  {
    icon: <FastForwardRounded />,
    title: "Quick processing time",
    subtitle:
      "Effectively process each workflow state to deliver low-latency responses",
  },
  {
    icon: <VisibilityRounded />,
    title: "Data Transparency",
    subtitle: "Offer visibility into queries, errors, reports, and processes",
  },
  {
    icon: <HistoryToggleOffRounded />,
    title: "Version control",
    subtitle: "Comprehensive version control for all your resources",
  },
];
export const LandingPage = () => {
  return (
    <Flex vertical>
      <Flex vertical className="aurora overflow-hidden">
        <div style={{ height: HeaderHeight }} />
        <LandingContainer>
          <Col {...Span[2]}>
            <PageHeading
              title="Effortless API Optimization Infrastructure"
              description="Dive into our innovative solutions designed to revolutionize
              your onboarding and streamline asynchronous processes.
              Experience the power of optimized API latency and slashed
              maintenance costs, tailored for businesses of all sizes and
              industries."
              endDecorator={
                <Flex>
                  <div>
                    <PricingButton href="/contact" variant="solid">
                      Request demo
                    </PricingButton>
                  </div>
                </Flex>
              }
            />
          </Col>

          <Col {...Span[2]}>
            <Screen className="w-[150%]">
              <Image
                src="https://tcw-images.s3.us-west-2.amazonaws.com/landing.png"
                preview={false}
              />
            </Screen>
          </Col>
        </LandingContainer>
      </Flex>

      <Flex vertical align="center" style={{ padding: "128px 64px" }} gap={64}>
        <Typography.Title
          level={2}
          style={{ textAlign: "center", margin: 0 }}
          className="px-4 lg:px-40"
        >
          Let automation elevate your background tasks with the highest
          efficiency
        </Typography.Title>
        <Row gutter={[64, 64]}>
          {elevateWith.map((item, i) => (
            <Col
              {...Span[3]}
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Flex vertical gap={8} align="center">
                {item.icon &&
                  cloneElement(item.icon as ReactElement, {
                    style: {
                      fontSize: 32,
                    } as CSSProperties,
                  })}
                <Typography.Text style={{ fontSize: 22, textAlign: "center" }}>
                  {item.title}
                </Typography.Text>
                <Typography.Text
                  type="secondary"
                  style={{ fontSize: 18, textAlign: "center" }}
                >
                  {item.subtitle}
                </Typography.Text>
              </Flex>
            </Col>
          ))}
        </Row>
      </Flex>

      <LandingSimpleIntegration />

      <LandingFlexibility />

      <Divider />

      <LandingContactSales />
    </Flex>
  );
};

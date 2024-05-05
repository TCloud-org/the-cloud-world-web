import {
  AddTaskRounded,
  FastForwardRounded,
  HistoryToggleOffRounded,
  ManageHistoryRounded,
  RestartAltRounded,
  VisibilityRounded,
} from "@mui/icons-material";
import { Button, Col, Flex, Row, Typography, theme } from "antd";
import { CSSProperties, ReactElement, ReactNode, cloneElement } from "react";
import { Span } from "../config/layoutConfig";
import { LandingImage } from "../dataDisplayComponents/LandingImage";
import { HeaderHeight } from "../layoutComponents/AppHeader";
import { LandingSimpleIntegration } from "../dataDisplayComponents/LandingSimpleIntegration";
import { LandingFlexibility } from "../dataDisplayComponents/LandingFlexibility";
import { LandingContactSales } from "../dataDisplayComponents/LandingContactSales";
import { useNavigate } from "react-router-dom";

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
  const { token } = theme.useToken();
  const navigate = useNavigate();

  const routeToContact = () => {
    navigate("/contact");
  };

  return (
    <Flex vertical>
      <Flex vertical className="aurora">
        <div style={{ height: HeaderHeight }} />
        <Flex style={{ padding: 64 }} gap={32}>
          <Flex vertical gap={32} flex={1}>
            <Typography.Title
              level={1}
              style={{ color: token.colorWhite, margin: 0 }}
            >
              Effortless API Optimization Infrastructure
            </Typography.Title>
            <Typography.Paragraph style={{ color: token.colorWhite }}>
              Dive into our innovative solutions designed to revolutionize your
              onboarding and streamline asynchronous processes. Experience the
              power of optimized API latency and slashed maintenance costs,
              tailored for businesses of all sizes and industries.
            </Typography.Paragraph>

            <Flex>
              <Button className="landing-button" onClick={routeToContact}>
                Request demo
              </Button>
            </Flex>
          </Flex>

          <Flex flex={1}>
            <LandingImage />
          </Flex>
        </Flex>
      </Flex>

      <Flex vertical align="center" style={{ padding: "128px 32px" }} gap={64}>
        <Typography.Title
          level={2}
          style={{ width: "40%", textAlign: "center", margin: 0 }}
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

      <LandingContactSales />
    </Flex>
  );
};

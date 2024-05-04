import { Button, Col, Flex, Row, Typography, theme } from "antd";
import { LandingImage } from "../dataDisplayComponents/LandingImage";
import { Span } from "../config/layoutConfig";
import {
  AddTaskRounded,
  FastForwardRounded,
  ForumRounded,
  ManageHistoryRounded,
  RestartAltRounded,
  VisibilityRounded,
} from "@mui/icons-material";
import { CSSProperties, ReactElement, cloneElement } from "react";

const elevateWith = [
  {
    icon: <AddTaskRounded />,
    title: "Simplicity",
  },
  {
    icon: <ManageHistoryRounded />,
    title: "Ease of management",
  },
  {
    icon: <RestartAltRounded />,
    title: "Fault tolerant",
  },
  {
    icon: <FastForwardRounded />,
    title: "Quick processing time",
  },
  {
    icon: <VisibilityRounded />,
    title: "Transparency",
  },
  {
    icon: <ForumRounded />,
    title: "Shared forum",
  },
];
export const LandingPage = () => {
  const { token } = theme.useToken();

  return (
    <Flex vertical>
      <Flex style={{ backgroundColor: token.colorPrimary, padding: 64 }}>
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
            <Button className="landing-button">Request demo</Button>
          </Flex>
        </Flex>

        <Flex flex={1}>
          <LandingImage />
        </Flex>
      </Flex>

      <Flex vertical align="center" style={{ padding: "128px 0" }} gap={64}>
        <Typography.Title
          level={2}
          style={{ width: "40%", textAlign: "center", margin: 0 }}
        >
          Let automation elevate your background tasks with the highest
          efficiency
        </Typography.Title>
        <Row
          gutter={[64, 64]}
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {elevateWith.map((item, i) => (
            <Col
              {...Span[2]}
              key={i}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Flex vertical gap={8} align="center">
                {item.icon &&
                  cloneElement(item.icon as ReactElement, {
                    style: {
                      fontSize: 32,
                    } as CSSProperties,
                  })}
                <Typography.Text style={{ fontSize: 24 }}>
                  {item.title}
                </Typography.Text>
              </Flex>
            </Col>
          ))}
        </Row>
      </Flex>
    </Flex>
  );
};

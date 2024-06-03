import {
  ApiRounded,
  ArtTrackRounded,
  BoltRounded,
  ChecklistRtlRounded,
  GroupWorkRounded,
  Groups3Rounded,
  HealingRounded,
  HistoryEduRounded,
  InsightsRounded,
  SecurityRounded,
} from "@mui/icons-material";
import { Col, Flex, Row } from "antd";
import { Span } from "../config/layoutConfig";
import { LandingCard } from "./LandingCard";
import { LandingTitle } from "./LandingTitle";
import { Pill } from "./Pill";
import { ReactNode } from "react";

interface Feature {
  icon?: ReactNode;
  title: string;
  subtitle?: string;
}

const features: Feature[] = [
  {
    icon: <HealingRounded />,
    title: "Fail-Safe and Automated Recovery",
    subtitle:
      "Support fail-safe mechanisms such as retry, rerun, conditional transition, and many more.",
  },
  {
    icon: <ChecklistRtlRounded />,
    title: "Concurrent Execution",
    subtitle:
      "Allocate a sufficient number of workers to ensure an optimal level of concurrent job processing within seconds.",
  },
  {
    icon: <GroupWorkRounded />,
    title: "Bucketizing and Batching",
    subtitle:
      "Group a load of workflows in the same state into a single batch.",
  },
  {
    icon: <InsightsRounded />,
    title: "Advanced Tracking",
    subtitle:
      "Enable monitoring document changes across states, track request and response entity per state, access full stack traces for error states, and many more.",
  },
  {
    icon: <ApiRounded />,
    title: "Seamless Integration",
    subtitle:
      "Support SDK for Java and endpoints for other environments. Integrate with us in a single call.",
  },
  {
    icon: <HistoryEduRounded />,
    title: "Version Control",
    subtitle:
      "Comprehensive version control for all your resources. Allow you to run your workflow in different version.",
  },
  {
    icon: <SecurityRounded />,
    title: "Security Features",
    subtitle:
      "Adapt to the highest standards of security features to secure your resources.",
  },
  {
    icon: <Groups3Rounded />,
    title: "Collaboration",
    subtitle:
      "Provide you the capability to invite team members to manage any resources you own.",
  },
  {
    icon: <ArtTrackRounded />,
    title: "Intuitive Interface",
    subtitle:
      "Design with user-friendly features and clear layouts. Get started quickly without the need for extensive guidance.",
  },
];

export const LandingFeature = () => {
  return (
    <Flex
      vertical
      align="center"
      style={{ padding: "128px 16px" }}
      gap={64}
      className="bg-dark max-w-screen-2xl ml-auto mr-auto"
    >
      <Flex vertical gap={48} align="center">
        <Flex>
          <Pill>
            <BoltRounded /> Features
          </Pill>
        </Flex>

        <LandingTitle>10+ Core Features for Pros</LandingTitle>
      </Flex>

      <Row gutter={[32, 32]}>
        {features.map((feature, i) => (
          <Col
            {...Span[3]}
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <LandingCard
              title={feature.title}
              subtitle={feature.subtitle}
              icon={feature.icon}
            />
          </Col>
        ))}
      </Row>
    </Flex>
  );
};

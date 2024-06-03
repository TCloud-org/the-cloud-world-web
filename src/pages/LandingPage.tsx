import {
  ApiRounded,
  ArrowRightAltRounded,
  ArtTrackRounded,
  AutoAwesomeRounded,
  BoltRounded,
  ChecklistRtlRounded,
  GroupWorkRounded,
  Groups3Rounded,
  HealingRounded,
  HistoryEduRounded,
  InsightsRounded,
  SecurityRounded,
} from "@mui/icons-material";
import { Col, Flex, Image, Row } from "antd";
import { ReactNode } from "react";
import { Span } from "../config/layoutConfig";
import { LandingCard } from "../dataDisplayComponents/LandingCard";
import { LandingContactSales } from "../dataDisplayComponents/LandingContactSales";
import { LandingContainer } from "../dataDisplayComponents/LandingContainer";
import { LandingSmartBranchIntro } from "../dataDisplayComponents/LandingSmartBranchIntro";
import { LandingTechStack } from "../dataDisplayComponents/LandingTechStack";
import { LandingTitle } from "../dataDisplayComponents/LandingTitle";
import { PageHeading } from "../dataDisplayComponents/PageHeading";
import { Pill } from "../dataDisplayComponents/Pill";
import { ThemeButton } from "../dataEntryComponents/ThemeButton";
import { HeaderHeight } from "../layoutComponents/AppHeader";
import { LandingHowItWorks } from "../dataDisplayComponents/LandingHowItWorks";
import { LandingBenefit } from "../dataDisplayComponents/LandingBenefit";
import { LandingFAQ } from "../dataDisplayComponents/LandingFAQ";

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

export const LandingPage = () => {
  return (
    <Flex vertical className="bg-dark overflow-hidden">
      <div style={{ height: HeaderHeight }} />

      <LandingContainer className="!pb-0">
        <Col {...Span[1]} className="z-20">
          <Flex vertical align="center" gap={32}>
            <Flex>
              <Pill>
                <AutoAwesomeRounded /> Your perfect workflow
              </Pill>
            </Flex>
            <PageHeading
              title={
                <span className="text-center gap-2 bg-gradient-to-r from-neutral-4 to-neutral-6 text-transparent bg-clip-text">
                  Effortless{" "}
                  <span className="bg-gradient-to-r from-primary-purple-300 to-primary-blue-500 bg-clip-text text-transparent">
                    API Optimization
                  </span>{" "}
                  Infrastructure
                </span>
              }
              description="Dive into our innovative solutions designed to revolutionize
              your onboarding and streamline asynchronous processes.
              Experience the power of optimized API latency and slashed
              maintenance costs, tailored for businesses of all sizes and
              industries."
              className="text-center"
              endDecorator={
                <Flex justify="center" className="z-10">
                  <div>
                    <ThemeButton
                      trailing={<ArrowRightAltRounded />}
                      href="/contact"
                    >
                      Request demo
                    </ThemeButton>
                  </div>
                </Flex>
              }
            />
          </Flex>
        </Col>
      </LandingContainer>

      <Flex className="relative z-10 max-w-screen-2xl ml-auto mr-auto mt-16 px-16">
        <Image
          src="https://tcw-images.s3.us-west-2.amazonaws.com/landing-bg-v2.png"
          preview={false}
          className="rounded-[40px]"
        />
        <div className="absolute left-0 right-0 -top-[50%] bottom-0 bg-[#5000B5] rounded-full blur-[150px] opacity-40 -z-10" />
      </Flex>

      <Flex className="mt-24 border-t border-t-neutral-11 border-b border-b-neutral-11">
        <LandingTechStack />
      </Flex>

      <LandingBenefit />

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

      <LandingSmartBranchIntro />

      <LandingHowItWorks />

      <LandingFAQ />

      <LandingContactSales />
    </Flex>
  );
};

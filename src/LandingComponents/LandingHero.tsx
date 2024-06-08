import { Col, Flex, Image } from "antd";
import { Span } from "../config/layoutConfig";
import { ThemeButton } from "../dataEntryComponents/ThemeButton";
import { LandingContainer } from "./LandingContainer";
import { Pill } from "../dataDisplayComponents/Pill";
import { PageHeading } from "../dataDisplayComponents/PageHeading";
import { StarsBackground } from "../dataDisplayComponents/StarsBackground";

export const LandingHero = () => {
  return (
    <Flex vertical gap={64} className="relative">
      <StarsBackground />
      <LandingContainer className="!pb-0">
        <Col {...Span[1]} className="z-20">
          <Flex vertical align="center" gap={32}>
            <Flex>
              <Pill>Your perfect workflow</Pill>
            </Flex>
            <PageHeading
              title={
                <span className="text-center gap-2 bg-gradient-to-r from-neutral-4 to-neutral-6 text-transparent bg-clip-text">
                  <span className="text-gradient">Optimize</span> your API with
                  Step Workflow
                </span>
              }
              description={
                <span>
                  Revolutionize your backend architecture and modularize
                  distributed applications with{" "}
                  <span className="text-gradient"> visual workflows</span>.
                  Experience the power of highly optimized API latency and
                  slashed maintenance costs.
                </span>
              }
              className="text-center"
              endDecorator={
                <Flex justify="center" className="z-10">
                  <ThemeButton href="https://stepworkflow.thecloudworlds.com">
                    Get Started{" "}
                    <span className="text-neutral-8">- It's Free</span>
                  </ThemeButton>
                </Flex>
              }
            />
          </Flex>
        </Col>
      </LandingContainer>

      <Flex className="relative z-10 max-w-screen-2xl ml-auto mr-auto px-16">
        <Image
          src="https://tcw-images.s3.us-west-2.amazonaws.com/landing-bg-v2.png"
          preview={false}
          className="rounded-[40px]"
        />
        <div className="absolute left-0 right-0 -top-[15%] bottom-0 bg-[#5000B5] rounded-full blur-[150px] opacity-30 -z-10" />
      </Flex>
    </Flex>
  );
};

import { AutoAwesomeRounded } from "@mui/icons-material";
import { Col, Flex, Image } from "antd";
import { Span } from "../config/layoutConfig";
import { ThemeButton } from "../dataEntryComponents/ThemeButton";
import { LandingContainer } from "./LandingContainer";
import { PageHeading } from "./PageHeading";
import { Pill } from "./Pill";

export const LandingHero = () => {
  return (
    <Flex vertical gap={64}>
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
                  <span className="bg-gradient-to-r from-primary-purple-300 to-primary-blue-500 bg-clip-text text-transparent">
                    Optimize
                  </span>{" "}
                  Your Backend with TCW
                </span>
              }
              description="Quick, cost-effective, powerful technique used by Amazon and other leading tech companies"
              className="text-center"
              endDecorator={
                <Flex justify="center" className="z-10">
                  <div>
                    <ThemeButton href="https://stepworkflow.thecloudworlds.com">
                      Get Started{" "}
                      <span className="text-neutral-8">- It's Free</span>
                    </ThemeButton>
                  </div>
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
        <div className="absolute left-0 right-0 -top-[50%] bottom-0 bg-[#5000B5] rounded-full blur-[150px] opacity-40 -z-10" />
      </Flex>
    </Flex>
  );
};

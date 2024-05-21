import { Col, Flex } from "antd";
import { Span } from "../config/layoutConfig";
import { LandingContainer } from "../dataDisplayComponents/LandingContainer";
import { LandingInfo } from "../dataDisplayComponents/LandingInfo";
import { LandingSectionHeading } from "../dataDisplayComponents/LandingSectionHeading";
import { PageHeading } from "../dataDisplayComponents/PageHeading";
import { HeaderHeight } from "../layoutComponents/AppHeader";
import { SectionContainer } from "../layoutComponents/SectionContainer";

const principles = [
  {
    section: "Customer first approach",
    title: "Obsess over customer experience",
    description:
      "We prioritize your needs, preferences, and feedback to tailor our solutions to your specific requirements. Your success is our success, and we are committed to delivering exceptional value and service at every touchpoint.",
  },
  {
    section: "Innovation excellence",
    title: "Stay up to date with the latest technology",
    description:
      "We thrive on innovation and creativity, constantly pushing the boundaries to deliver cutting-edge solutions that meet the evolving needs of your business. Our team of experts is dedicated to staying ahead of the curve, leveraging the latest technologies and methodologies to drive innovation and create game-changing solutions that propel your business forward.",
  },
  {
    section: "Simplicity and Consistency",
    title: "Keep things simple and consistent",
    description:
      "We believe in keeping things simple and straightforward. We strive for consistency across our products, ensuring a seamless experience for our customers.",
  },
  {
    section: "Cost Efficiency",
    title: "Strive to save you the most",
    description:
      "Our customers' resources are precious, which is why we are committed to delivering solutions that help them save both time and money.",
  },
];

export const AboutPage = () => {
  return (
    <Flex vertical>
      <Flex vertical className="bg-about overflow-hidden">
        <div style={{ height: HeaderHeight }} />

        <LandingContainer>
          <Col {...Span[2]}>
            <PageHeading
              title="Embrace the future of low-code development"
              description="We are dedicated to empowering startups and enterprises by providing cutting-edge automation solutions designed to streamline your processes and accelerate your journey from concept to market"
            />
          </Col>

          <Col {...Span[2]}></Col>
        </LandingContainer>
      </Flex>

      <SectionContainer>
        <Flex
          vertical
          gap={128}
          justify="center"
          align="center"
          className="w-full max-w-screen-2xl"
        >
          <LandingSectionHeading
            title="Our 4 core principles"
            subtitle="We're committed to empowering your success every step of the way"
          />

          {principles.map((principle, i) => (
            <LandingInfo key={i} {...principle} gutter={[64, 0]} />
          ))}
        </Flex>
      </SectionContainer>
    </Flex>
  );
};

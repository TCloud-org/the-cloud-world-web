import { Col, Flex } from "antd";
import { HeaderHeight } from "../layoutComponents/AppHeader";
import { LandingContainer } from "../dataDisplayComponents/LandingContainer";
import { Span } from "../config/layoutConfig";
import { PageHeading } from "../dataDisplayComponents/PageHeading";

export const AboutPage = () => {
  return (
    <Flex vertical>
      <Flex vertical className="bg-about overflow-hidden">
        <div style={{ height: HeaderHeight }} />

        <LandingContainer>
          <Col {...Span[2]}>
            <PageHeading
              title="Embrace the future of low-code development"
              description="We are dedicated to empowering startups by providing cutting-edge automation solutions designed to streamline your processes and accelerate your journey from concept to market"
            />
          </Col>

          <Col {...Span[2]}></Col>
        </LandingContainer>
      </Flex>
    </Flex>
  );
};

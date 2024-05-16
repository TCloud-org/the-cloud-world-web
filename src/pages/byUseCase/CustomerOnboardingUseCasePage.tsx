import { Col, Flex } from "antd";
import { Span } from "../../config/layoutConfig";
import { LandingContainer } from "../../dataDisplayComponents/LandingContainer";
import { PageHeading } from "../../dataDisplayComponents/PageHeading";
import { HeaderHeight } from "../../layoutComponents/AppHeader";
import { PricingButton } from "../../dataEntryComponents/PricingButton";

export const CustomerOnboardingUseCasePage = () => {
  return (
    <Flex vertical>
      <Flex vertical className="bg-img overflow-hidden items-center">
        <div style={{ height: HeaderHeight }} />
        <LandingContainer>
          <Col {...Span[2]}>
            <PageHeading
              title="Elevate Your Customer Onboarding Experience with TCW Step Workflow"
              description="Say goodbye to manual processes and hello to seamless customer onboarding with TCW Step Workflow. Our innovative platform is designed to revolutionize the way you welcome and engage with your customers, ensuring a delightful experience from day one."
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
            <PageHeading title="Cheese" description="Ok" />
          </Col>
        </LandingContainer>
      </Flex>
    </Flex>
  );
};

import { Col, Flex } from "antd";
import { Span } from "../../config/layoutConfig";
import { LandingContainer } from "../../dataDisplayComponents/LandingContainer";
import { PageHeading } from "../../dataDisplayComponents/PageHeading";
import { HeaderHeight } from "../../layoutComponents/AppHeader";
import { PricingButton } from "../../dataEntryComponents/PricingButton";
import { WorkflowMockup } from "../../dataDisplayComponents/WorkflowMockup";
import { LandingContactSales } from "../../dataDisplayComponents/LandingContactSales";

export const CustomerOnboardingUseCasePage = () => {
  return (
    <Flex vertical>
      <Flex vertical className="bg-light-img overflow-hidden items-center">
        <div style={{ height: HeaderHeight }} />
        <LandingContainer>
          <Col {...Span[2]} className="flex flex-col">
            <PageHeading
              color="dark"
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

          <Col {...Span[2]} className="flex flex-col">
            <Flex className="relative h-full min-h-96">
              <WorkflowMockup
                className="absolute top-0 bottom-0 left-0 right-0 w-[200%]"
                steps={[
                  "Start",
                  "VerifyCustomerIdentification",
                  "CreateCustomerAccount",
                  "SaveCustomerPaymentMethod",
                  "SetupCustomerSubscription",
                  "SendWelcomeEmail",
                  "End",
                ]}
              />
            </Flex>
          </Col>
        </LandingContainer>
      </Flex>

      <LandingContainer>
        <div>Coming soon...</div>
      </LandingContainer>

      <LandingContactSales />
    </Flex>
  );
};

import { Col, Flex, Row, Typography, theme } from "antd";
import { Span } from "../../config/layoutConfig";
import { CustomerOnboardingWhyUs } from "../../dataDisplayComponents/CustomerOnboardingWhyUs";
import { LandingContactSales } from "../../dataDisplayComponents/LandingContactSales";
import { LandingContainer } from "../../dataDisplayComponents/LandingContainer";
import { LandingSectionHeading } from "../../dataDisplayComponents/LandingSectionHeading";
import { PageHeading } from "../../dataDisplayComponents/PageHeading";
import { WorkflowMockup } from "../../dataDisplayComponents/WorkflowMockup";
import { PricingButton } from "../../dataEntryComponents/PricingButton";
import { HeaderHeight } from "../../layoutComponents/AppHeader";
import { BenefitSection } from "../../dataDisplayComponents/BenefitSection";

const benefits = [
  {
    title: "Enhanced Efficiency",
    description:
      "Streamline customer onboarding with automated API workflows, reducing manual tasks and accelerating the onboarding process.",
  },
  {
    title: "Improved Accuracy",
    description:
      "Minimize errors with consistent, reliable API executions, ensuring accurate data handling and seamless integration.",
  },
  {
    title: "Scalability",
    description:
      "Easily manage growing customer volumes with scalable API workflows, adapting to your business needs without compromising performance.",
  },
  {
    title: "Better Customer Experience",
    description:
      "Provide a smoother, faster onboarding experience for your customers, increasing satisfaction and retention rates.",
  },
];

export const CustomerOnboardingUseCasePage = () => {
  const { token } = theme.useToken();

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
                    <PricingButton href="/contact" className="ring-0 bg-black">
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

      <BenefitSection
        benefits={benefits}
        title="Solutions"
        subtitle="Help businesses acquire more customers faster"
      />

      <CustomerOnboardingWhyUs />

      <LandingContactSales />
    </Flex>
  );
};

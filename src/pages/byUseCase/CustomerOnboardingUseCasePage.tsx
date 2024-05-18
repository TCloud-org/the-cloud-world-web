import { Col, Flex, Row, Typography, theme } from "antd";
import { Span } from "../../config/layoutConfig";
import { LandingContainer } from "../../dataDisplayComponents/LandingContainer";
import { PageHeading } from "../../dataDisplayComponents/PageHeading";
import { HeaderHeight } from "../../layoutComponents/AppHeader";
import { PricingButton } from "../../dataEntryComponents/PricingButton";
import { WorkflowMockup } from "../../dataDisplayComponents/WorkflowMockup";
import { LandingContactSales } from "../../dataDisplayComponents/LandingContactSales";

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

      <LandingContainer>
        <Flex vertical>
          <Typography.Title
            level={5}
            style={{ color: token.colorInfo, margin: 0 }}
            className="text-center"
          >
            SOLUTIONS
          </Typography.Title>

          <Typography.Title level={2} className="text-center">
            Help businesses acquire more customers faster
          </Typography.Title>

          <Row gutter={[64, 64]}>
            <Col {...Span[3]}>
              <Typography.Text>Check</Typography.Text>
            </Col>
            <Col {...Span[3]}>
              <Typography.Text>Check</Typography.Text>
            </Col>
            <Col {...Span[3]}>
              <Typography.Text>Check</Typography.Text>
            </Col>
          </Row>
        </Flex>
      </LandingContainer>

      <LandingContactSales />
    </Flex>
  );
};

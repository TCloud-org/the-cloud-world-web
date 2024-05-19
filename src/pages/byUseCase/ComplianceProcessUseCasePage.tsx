import { Col, Flex } from "antd";
import { HeaderHeight } from "../../layoutComponents/AppHeader";
import { LandingContainer } from "../../dataDisplayComponents/LandingContainer";
import { Span } from "../../config/layoutConfig";
import { PageHeading } from "../../dataDisplayComponents/PageHeading";
import { PricingButton } from "../../dataEntryComponents/PricingButton";
import { WorkflowMockup } from "../../dataDisplayComponents/WorkflowMockup";

export const ComplianceProcessUseCasePage = () => {
  return (
    <Flex vertical>
      <Flex vertical className="bg-light-img overflow-hidden items-center">
        <div style={{ height: HeaderHeight }} />
        <LandingContainer>
          <Col {...Span[2]} className="flex flex-col">
            <PageHeading
              color="dark"
              title="Managing Complex Compliance Processes Made Simple with TCW Step Workflow"
              description="Feeling overwhelmed by complex compliance processes? Let TCW Step Workflow simplify it for you. Our cutting-edge platform is engineered to transform the way you manage compliance, ensuring a smooth and trustworthy process for both you and your customers."
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
                className="absolute top-0 bottom-0 left-0 right-0 w-[115%]"
                steps={[
                  { name: "Start" },
                  { name: "VerifyCustomerIdentity", isSubWorkflow: true },
                  { name: "ScreenAntiMoneyLaundering", isSubWorkflow: true },
                  {
                    name: "ValidateDataPrivacyAndProtection",
                    isSubWorkflow: true,
                  },
                  {
                    name: "ConductFinancialReportingAndAuditing",
                    isSubWorkflow: true,
                  },
                  {
                    name: "PerformRiskAssessmentAndManagement",
                    isSubWorkflow: true,
                  },
                  { name: "SubmitRegulatoryReports", isSubWorkflow: true },
                  {
                    name: "ManageDocumentRetentionAndAccess",
                    isSubWorkflow: true,
                  },
                  { name: "..." },
                  { name: "End" },
                ]}
              />
            </Flex>
          </Col>
        </LandingContainer>
      </Flex>
    </Flex>
  );
};

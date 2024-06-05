import { Col, Divider, Flex } from "antd";
import { HeaderHeight } from "../../layoutComponents/AppHeader";
import { LandingContainer } from "../../LandingComponents/LandingContainer";
import { Span } from "../../config/layoutConfig";
import { PageHeading } from "../../dataDisplayComponents/PageHeading";
import { PricingButton } from "../../dataEntryComponents/PricingButton";
import { WorkflowMockup } from "../../dataDisplayComponents/WorkflowMockup";
import {
  BenefitSection,
  BenefitSectionProps,
} from "../../dataDisplayComponents/BenefitSection";
import { LandingContactSales } from "../../LandingComponents/LandingContactSales";
import { ComplianceProcessWhyUs } from "../../dataDisplayComponents/ComplianceProcessWhyUs";

const benefits: BenefitSectionProps["benefits"] = [
  {
    title: "Automated Compliance Checks",
    description:
      "Streamline your compliance management with automated checks that ensure all regulatory requirements are met without manual intervention. This reduces errors and saves valuable time, allowing your team to focus on more strategic tasks.",
  },
  {
    title: "Real-Time Monitoring and Reporting",
    description:
      "Gain instant access to compliance status with real-time monitoring and reporting. Stay ahead of potential issues and make informed decisions quickly, ensuring continuous adherence to regulations and standards.",
  },
  {
    title: "Simplicity",
    description:
      "Simplify the complexity of compliance by managing intricate requirements through organized sub-workflows. This approach ensures that every detail is handled efficiently, reducing the risk of oversight and enhancing overall process clarity.",
  },
  {
    title: "Enhanced Data Security",
    description:
      "Protect sensitive information with robust security measures integrated into your workflow. Ensure data integrity and confidentiality, reducing the risk of compliance breaches and fostering trust with your customers and stakeholders.",
  },
];

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

      <BenefitSection
        benefits={benefits}
        title="Solutions"
        subtitle="Help businesses achieve compliance faster"
      />

      <ComplianceProcessWhyUs />

      <Divider />

      <LandingContactSales />
    </Flex>
  );
};

import { Flex } from "antd";
import { SectionContainer } from "../layoutComponents/SectionContainer";
import { LandingSectionHeading } from "./LandingSectionHeading";
import { LandingInfo } from "./LandingInfo";
import { WorkflowMockup } from "./WorkflowMockup";
import LineConnector from "./LineConnector";
import { WorkflowPlayground } from "./WorkflowPlayground";

export const ComplianceProcessWhyUs = () => {
  return (
    <SectionContainer>
      <Flex
        vertical
        gap={128}
        justify="center"
        align="center"
        className="w-full max-w-screen-2xl"
      >
        <LandingSectionHeading
          title="Why us"
          subtitle="Make customer onboarding process faster and simpler"
        />

        <LandingInfo
          section="Accelerate business compliance"
          title="Revolutionize compliance management for customer safety and satisfaction"
          description="Effortlessly manage your compliance obligations with our innovative sub-workflow feature. Our system simplifies the complexities of compliance tasks, breaking them down into manageable steps. With sub-workflows, you can easily track progress and ensure accountability, all while maintaining the highest standards of regulatory compliance."
          demonstration={
            <WorkflowMockup
              bubble="left"
              className="flex"
              size="small"
              steps={[
                { name: "Start" },
                {
                  id: "verify1",
                  name: "VerifyCustomerIdentity",
                  isSubWorkflow: true,
                },
                { name: "..." },
                { name: "End" },
              ]}
              linkTo={
                <>
                  <div id="sub1" className="ml-4 lg:ml-8 w-full">
                    <WorkflowMockup
                      size="small"
                      steps={[
                        { name: "Start" },
                        { name: "GetCustomerInformation" },
                        { name: "ScanCustomerIdentificationDocument" },
                        { name: "PerformBackgroundCheck" },
                        { name: "ApproveIfVerificationPassed" },
                        { name: "End" },
                      ]}
                    />
                  </div>
                  <LineConnector start="verify1" end="sub1" />
                </>
              }
            />
          }
        />

        <LandingInfo
          section="Reduce operational costs"
          title="Optimize your business for long-term cost savings"
          description="Our platform enables you to break down intricate compliance processes into smaller, more manageable tasks, optimizing resource allocation and minimizing the need for manual intervention. This efficient approach enhances productivity, reduces errors, and accelerates task completion timelines."
          position="right"
          demonstration={<WorkflowPlayground />}
        />

        {/* <LandingInfo
          section="Gain more insights"
          title="Optimize customer experience with real-time data and analytics"
          description="Enable businesses to monitor and optimize the onboarding process continuously. Insights gained from these analytics can be used to improve efficiency, identify bottlenecks, and enhance the overall customer experience."
          demonstration={
            <WorkflowMockup
              bubble="left"
              steps={[
                "Start",
                "SetupCustomerAccount",
                "SetupCustomerBillingInformation",
              ]}
              expand={[false, false, false]}
              showTags
              className="relative"
            />
          }
        /> */}
      </Flex>
    </SectionContainer>
  );
};

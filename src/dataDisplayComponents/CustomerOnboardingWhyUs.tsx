import { Flex } from "antd";
import { SectionContainer } from "../layoutComponents/SectionContainer";
import { LandingInfo } from "./LandingInfo";
import { LandingSectionHeading } from "./LandingSectionHeading";
import { WorkflowMockup } from "./WorkflowMockup";

export const CustomerOnboardingWhyUs = () => {
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
          section="Win more customers"
          title="Craft exceptional first impressions for your customers"
          description="In today's competitive landscape, the initial impression your business leaves can determine whether you gain a lifelong customer or lose them to a competitor. With our workflow solutions, you can establish a robust process for setting up your customers, ensuring that each interaction leaves a lasting positive impression."
          demonstration={
            <WorkflowMockup
              bubble="left"
              steps={[
                "Start",
                "SetupCustomerAccount",
                "SetupCustomerBillingInformation",
                "SendGreetingMessageToCustomer",
                "End",
              ]}
            />
          }
        />

        <LandingInfo
          section="Reduce operational costs"
          title="Optimize your business for long-term cost savings"
          description="Complex onboarding systems often accumulate technical debt over time, requiring ongoing maintenance and updates. By leveraging our workflow solution, businesses can reduce technical debt by implementing standardized, scalable solutions that are easier to maintain and evolve. This minimizes the long-term costs associated with technical debt accumulation."
          position="right"
          demonstration={
            <WorkflowMockup
              bubble="right"
              steps={["Start", "SetupCustomerAccount"]}
              expand={[false, true]}
            />
          }
        />
      </Flex>
    </SectionContainer>
  );
};

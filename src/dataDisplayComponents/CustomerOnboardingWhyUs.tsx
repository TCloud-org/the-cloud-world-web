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
        className="w-full"
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
          section="Win more customers"
          title="Craft exceptional first impressions for your customers"
          description="In today's competitive landscape, the initial impression your business leaves can determine whether you gain a lifelong customer or lose them to a competitor. With our workflow solutions, you can establish a robust process for setting up your customers, ensuring that each interaction leaves a lasting positive impression."
          position="right"
          demonstration={
            <WorkflowMockup
              bubble="right"
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
      </Flex>
    </SectionContainer>
  );
};

import { ArrowRightAltRounded } from "@mui/icons-material";
import { Flex, Image } from "antd";
import { ThemeButton } from "../dataEntryComponents/ThemeButton";
import { LandingInfo } from "./LandingInfo";
import { LandingTitle } from "./LandingTitle";
import { Pill } from "../dataDisplayComponents/Pill";
import { SyntaxHighlighter } from "../dataDisplayComponents/SyntaxHighlighter";

export const LandingHowItWorks = () => {
  return (
    <Flex
      vertical
      align="center"
      className="py-16 ml-auto mr-auto max-w-screen-2xl"
      gap={32}
    >
      <Pill>How It Works</Pill>

      <LandingTitle>Get Started in 3 Simple Steps</LandingTitle>

      <Flex gap={96} vertical className="mt-12">
        <LandingInfo
          step={1}
          section="Create your workflow"
          title="Streamline all your API operations in order"
          description="Start by breaking down your complex system into multiple steps.
          Organize your logic to best suit your business requirements."
          demonstration={
            <div className="relative z-10">
              <Image
                src="https://utfs.io/f/02cc62dc-4467-4bb8-9aa3-fbdbb890e3db-77i4al.png"
                preview={false}
                className="rounded-[40px]"
              />
              <div className="absolute left-0 right-0 -top-[25%] bottom-0 bg-[#5000B5] rounded-full blur-[150px] opacity-40 -z-10" />
            </div>
          }
          action={
            <Flex>
              <ThemeButton
                trailing={<ArrowRightAltRounded />}
                href="https://www.blog.thecloudworlds.com/optimize-api-with-multi-step-workflow"
              >
                Learn more
              </ThemeButton>
            </Flex>
          }
          gutter={[96, 96]}
        />

        <LandingInfo
          step={2}
          section="Link your API"
          title="Grant us the privileges to execute your API"
          description="Map your API endpoints by name for easy access and use across your workflow. Grant us the necessary authorizations to execute each API within the workflow."
          demonstration={
            <div className="relative z-10">
              <Image
                src="https://utfs.io/f/cca9e070-e443-479f-819b-64f581e6a87c-5qw7x5.png"
                preview={false}
                className="rounded-[40px]"
              />
              <div className="absolute left-0 right-0 -top-[25%] bottom-0 bg-[#5000B5] rounded-full blur-[150px] opacity-40 -z-10" />
            </div>
          }
          position="right"
          gutter={[96, 96]}
        />

        <LandingInfo
          step={3}
          section="Start your workflow"
          title="Start your automation process in a single line of code"
          description="Use our Java SDK or simply execute a POST request to initiate your workflow automatically. We'll handle the rest."
          demonstration={
            <div className="relative z-10">
              <SyntaxHighlighter language="java">
                {`final StepWorkflowClient client = StepWorkflowClient.create();
final InitiateWorkflowInput input = InitiateWorkflowInput.builder()
\t.clientId("UserClient")
\t.workflowId("work::UserClient/UserRegistrationWorkflow")
\t.build();
client.initiateWorkflow(input);`}
              </SyntaxHighlighter>
              <div className="absolute left-0 right-0 -top-[25%] bottom-0 bg-[#5000B5] rounded-full blur-[150px] opacity-40 -z-10" />
            </div>
          }
          action={
            <Flex>
              <ThemeButton
                trailing={<ArrowRightAltRounded />}
                href="https://www.stepworkflow.thecloudworlds.com"
              >
                Get started
              </ThemeButton>
            </Flex>
          }
          gutter={[96, 96]}
        />
      </Flex>
    </Flex>
  );
};

import { ArrowRightAltRounded } from "@mui/icons-material";
import { Flex } from "antd";
import { ThemeButton } from "../dataEntryComponents/ThemeButton";

export const LandingSmartBranchIntro = () => {
  return (
    <div className="page-section font-sora px-0 lg:px-4">
      <div className="container _2">
        <div className="image _2 w-embed">
          <video
            className="video"
            autoPlay
            playsInline
            muted
            src="https://utfs.io/f/7146b140-6752-487e-b901-b76dfa07c101-yl99nq.mp4"
          />
        </div>
        <div className="mb-6">
          <div className="overflow-hidden">
            <h2 className="large-heading">Introducing</h2>
          </div>
          <div className="overflow-hidden">
            <h2 className="large-heading">SmartBranch</h2>
          </div>
        </div>
        <p className="hero-paragraph">
          Bringing conditional logic to TCW, all with no-code. You can create
          powerful workflows in just a few simple steps.
        </p>

        <Flex className="mt-6">
          <ThemeButton
            trailing={<ArrowRightAltRounded />}
            href="https://www.stepworkflow.thecloudworlds.com"
          >
            Sign up
          </ThemeButton>
        </Flex>
      </div>
    </div>
  );
};

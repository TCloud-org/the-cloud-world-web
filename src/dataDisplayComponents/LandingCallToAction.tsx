import { SecondaryButton } from "../dataEntryComponents/SecondaryButton";
import { ThemeButton } from "../dataEntryComponents/ThemeButton";
import { GlassContainer } from "./GlassContainer";
import { LandingTitle } from "./LandingTitle";
import { Pill } from "./Pill";
import { SectionContainer } from "./SectionContainer";

export const LandingCallToAction = () => {
  return (
    <SectionContainer>
      <GlassContainer>
        <div className="flex flex-col items-center gap-8">
          <Pill>Ready to try?</Pill>
          <LandingTitle className="!text-white font-sora">
            Activate TCW for your team
          </LandingTitle>

          <div className="flex flex-col gap-4 items-center">
            <div className="flex items-center gap-4">
              <ThemeButton href="/contact">Book a demo</ThemeButton>
              <SecondaryButton href="https://stepworkflow.thecloudworlds.com">
                Try for free
              </SecondaryButton>
            </div>

            <div className="text-neutral-6">New subscribers only</div>
          </div>
        </div>
      </GlassContainer>
    </SectionContainer>
  );
};

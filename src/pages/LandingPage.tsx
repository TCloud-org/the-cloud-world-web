import { LandingBenefit } from "../LandingComponents/LandingBenefit";
import { LandingBlog } from "../LandingComponents/LandingBlog";
import { LandingCallToAction } from "../LandingComponents/LandingCallToAction";
import { LandingContactSales } from "../LandingComponents/LandingContactSales";
import { LandingFAQ } from "../LandingComponents/LandingFAQ";
import { LandingFeature } from "../LandingComponents/LandingFeature";
import { LandingHero } from "../LandingComponents/LandingHero";
import { LandingHowItWorks } from "../LandingComponents/LandingHowItWorks";
import { LandingSmartBranchIntro } from "../LandingComponents/LandingSmartBranchIntro";
import { LandingTechStack } from "../LandingComponents/LandingTechStack";
import { LandingUseCase } from "../LandingComponents/LandingUseCase";
import { HeaderHeight } from "../layoutComponents/AppHeader";

export const LandingPage = () => {
  return (
    <div className="bg-dark overflow-hidden">
      <div style={{ height: HeaderHeight }} />

      <LandingHero />

      <LandingTechStack />

      <LandingBenefit />

      <LandingFeature />

      <LandingSmartBranchIntro />

      <LandingUseCase />

      <LandingHowItWorks />

      <LandingBlog />

      <LandingFAQ />

      <LandingCallToAction />

      <LandingContactSales />
    </div>
  );
};

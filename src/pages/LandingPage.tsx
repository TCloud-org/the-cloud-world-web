import { LandingBenefit } from "../dataDisplayComponents/LandingBenefit";
import { LandingBlog } from "../dataDisplayComponents/LandingBlog";
import { LandingContactSales } from "../dataDisplayComponents/LandingContactSales";
import { LandingFAQ } from "../dataDisplayComponents/LandingFAQ";
import { LandingFeature } from "../dataDisplayComponents/LandingFeature";
import { LandingHowItWorks } from "../dataDisplayComponents/LandingHowItWorks";
import { LandingHero } from "../dataDisplayComponents/LandingHero";
import { LandingSmartBranchIntro } from "../dataDisplayComponents/LandingSmartBranchIntro";
import { LandingTechStack } from "../dataDisplayComponents/LandingTechStack";
import { LandingUseCase } from "../dataDisplayComponents/LandingUseCase";
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

      <LandingContactSales />
    </div>
  );
};

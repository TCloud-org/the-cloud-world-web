import { LandingBenefit } from "../dataDisplayComponents/LandingBenefit";
import { LandingContactSales } from "../dataDisplayComponents/LandingContactSales";
import { LandingFAQ } from "../dataDisplayComponents/LandingFAQ";
import { LandingFeature } from "../dataDisplayComponents/LandingFeature";
import { LandingHowItWorks } from "../dataDisplayComponents/LandingHowItWorks";
import { LandingMain } from "../dataDisplayComponents/LandingMain";
import { LandingSmartBranchIntro } from "../dataDisplayComponents/LandingSmartBranchIntro";
import { LandingTechStack } from "../dataDisplayComponents/LandingTechStack";
import { LandingUseCase } from "../dataDisplayComponents/LandingUseCase";
import { HeaderHeight } from "../layoutComponents/AppHeader";

export const LandingPage = () => {
  return (
    <div className="bg-dark overflow-hidden">
      <div style={{ height: HeaderHeight }} />

      <LandingMain />

      <LandingTechStack />

      <LandingBenefit />

      <LandingFeature />

      <LandingSmartBranchIntro />

      <LandingUseCase />

      <LandingHowItWorks />

      <LandingFAQ />

      <LandingContactSales />
    </div>
  );
};

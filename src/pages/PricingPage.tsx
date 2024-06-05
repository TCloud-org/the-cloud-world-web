import { Col, Row } from "antd";
import { createSpan } from "../config/layoutConfig";
import { LandingContactSales } from "../dataDisplayComponents/LandingContactSales";
import { LandingTitle } from "../dataDisplayComponents/LandingTitle";
import { Pill } from "../dataDisplayComponents/Pill";
import { PricingTier } from "../dataDisplayComponents/PricingTier";
import { SectionContainer } from "../dataDisplayComponents/SectionContainer";
import { StarsBackground } from "../dataDisplayComponents/StarsBackground";
import { HeaderHeight } from "../layoutComponents/AppHeader";
import { LandingFAQ } from "../dataDisplayComponents/LandingFAQ";
import { LandingCallToAction } from "../dataDisplayComponents/LandingCallToAction";

export enum ProductTierType {
  LITE = "LITE",
  PRO = "PRO",
  ENTERPRISE = "ENTERPRISE",
}

const plans = [
  {
    key: ProductTierType.LITE,
    plan: "Lite",
    price: `Free for everyone`,
    features: [
      "Up to 3000 transitions",
      "Limited access to our RESTful Step Workflow APIs",
      "Tracking",
      "1 day workflow task retention",
      "Customer support",
    ],
  },
  {
    key: ProductTierType.PRO,
    plan: "Pro",
    price: `$1 per 100 transitions`,
    emphasized: true,
    plus: "Everything in Lite, plus:",
    features: [
      "Full access to our RESTful Step Workflow APIs",
      "Querying, batching, and analytics",
      "Up to 60 days workflow job retention",
      "Increased workflow concurrent processing",
      "Ticket support",
      "Early access to new features",
    ],
  },
  {
    key: ProductTierType.ENTERPRISE,
    plan: "Enterprise",
    price: `$3 per 100 transitions`,
    plus: "Everything in Pro, plus:",
    features: [
      "Up to 120 days workflow job retention",
      "Maximized workflow concurrent processing",
      "Proactive monitoring",
    ],
    action: "Or talk to our sales team",
    contact: "https://thecloudworlds.com/contact",
  },
];

const priceGap = 32;

export const PricingPage = () => {
  return (
    <div className="bg-dark">
      <div className="relative py-32">
        <StarsBackground />

        <div style={{ height: HeaderHeight }} />

        <SectionContainer>
          <div className="flex flex-col gap-8 items-center max-w-screen-md px-2">
            <Pill>Pricing</Pill>

            <LandingTitle className="z-10 !text-white">
              <span className="text-gradient">Upgrade</span> to have access to
              our full suite, and more.
            </LandingTitle>
          </div>
        </SectionContainer>
      </div>

      <div className="py-16 px-4 ml-auto mr-auto max-w-screen-2xl">
        <Row
          gutter={[priceGap, priceGap]}
          style={{ padding: priceGap }}
          className="mt-16 max-w-screen-2xl"
        >
          {plans.map((plan, i) => (
            <Col {...createSpan(8)} key={i}>
              <PricingTier data={plan} />
            </Col>
          ))}
        </Row>
      </div>

      <LandingFAQ />

      <LandingCallToAction />

      <LandingContactSales
        title="Have questions about pricing?"
        description="We're here to help. Contact us to learn more about pricing"
      />
    </div>
  );
};

import { Col, Flex, Modal, Row } from "antd";
import { useState } from "react";
import { LandingContactSales } from "../dataDisplayComponents/LandingContactSales";
import { LandingTitle } from "../dataDisplayComponents/LandingTitle";
import { Pill } from "../dataDisplayComponents/Pill";
import { PricingTier } from "../dataDisplayComponents/PricingTier";
import { SectionContainer } from "../dataDisplayComponents/SectionContainer";
import { StarsBackground } from "../dataDisplayComponents/StarsBackground";
import { PriceCalculator } from "../dataEntryComponents/PriceCalculator";
import { HeaderHeight } from "../layoutComponents/AppHeader";

export enum ProductTierType {
  FREE_TIER = "FREE_TIER",
  STARTUP = "STARTUP",
  SCALEUP = "SCALEUP",
  ENTERPRISE = "ENTERPRISE",
}

const plans = [
  {
    key: ProductTierType.FREE_TIER,
    plan: "Free Tier",
    description: `Experience our platform with limited usage and access at no cost.`,
    price: "Free",
    unit: "$0.000025 thereafter",
    features: [
      "Up to 5000 transitions",
      "Limited access to our RESTful Step Workflow APIs",
      "Tracking",
      "1 day workflow task retention",
      "Customer support",
    ],
  },
  {
    key: ProductTierType.STARTUP,
    plan: "Startup",
    description: `Scale your usage and enjoy increased access to advanced features.`,
    price: "$0.00005",
    unit: "per transition",
    features: [
      "Free first 5000 transitions",
      "Unlimited transitions",
      "Expanded access to our RESTful Step Workflow APIs",
      "Tracking and querying",
      "Up to 30 days workflow task retention",
      "Ticket support",
      "Customer support",
    ],
  },
  {
    key: ProductTierType.SCALEUP,
    plan: "Scaleup",
    description: `Accelerate Your Growth. Scale and unlock advanced features for accelerated success.`,
    price: "$0.00015",
    unit: "per transition",
    emphasized: true,
    features: [
      "Free first 5000 transitions",
      "Unlimited transitions",
      "Full access to our RESTful Step Workflow APIs",
      "Tracking, querying, batching, and analytics",
      "Up to 90 days workflow task retention",
      "Increased workflow concurrent processing",
      "Ticket support",
      "Customer support",
      "Early access to new features",
    ],
  },
  {
    key: ProductTierType.ENTERPRISE,
    plan: "Enterprise",
    description: `Propel Your Business Forward. Customize your plan to suit your business needs.`,
    price: "Custom pricing",
    features: [
      "Free first 5000 transitions",
      "Unlimited transitions",
      "Full access to our RESTful Step Workflow APIs",
      "Tracking, querying, batching, and analytics",
      "Up to 120 days workflow task retention",
      "Maximized workflow concurrent processing",
      "Proactive monitoring",
      "Ticket support",
      "Customer support",
      "Early access to new features",
    ],
    action: "Contact sales",
    href: "https://thecloudworlds.com/contact",
  },
];

const priceGap = 16;

export const PricingPage = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

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

      <div className="py-16 px-4">
        <Flex justify="center">
          <Row
            gutter={[priceGap, priceGap]}
            style={{ padding: priceGap }}
            className="mt-16 max-w-screen-2xl"
          >
            {plans.map((plan, i) => (
              <Col
                {...{ xs: 24, sm: 24, md: 24, lg: 12, xl: 6, xxl: 6 }}
                key={i}
              >
                <PricingTier data={plan} />
              </Col>
            ))}
          </Row>
        </Flex>
      </div>

      <LandingContactSales
        title="Have questions about pricing?"
        description="We're here to help. Contact us to learn more about pricing"
      />

      <Modal
        title="Price calculator"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <PriceCalculator />
      </Modal>
    </div>
  );
};

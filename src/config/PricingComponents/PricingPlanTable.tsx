import { CheckRounded, HorizontalRuleRounded } from "@mui/icons-material";
import { LandingTitle } from "../../LandingComponents/LandingTitle";
import { Pill } from "../../dataDisplayComponents/Pill";
import { SectionContainer } from "../../dataDisplayComponents/SectionContainer";
import { ReactNode } from "react";
import { Col, Row } from "antd";

interface PricingFeature {
  feature: ReactNode;
  lite: ReactNode;
  pro: ReactNode;
  enterprise: ReactNode;
}

const cols = [
  {
    label: "Feature",
    key: "feature",
  },
  {
    label: "Lite",
    key: "lite",
  },
  {
    label: "Pro",
    key: "pro",
  },
  {
    label: "Enterprise",
    key: "enterprise",
  },
];

const features: PricingFeature[] = [
  {
    feature: "Transitions",
    lite: "3000",
    pro: "Unlimited",
    enterprise: "Unlimited",
  },
  {
    feature: "RESTful Step Workflow API",
    lite: true,
    pro: true,
    enterprise: true,
  },
  {
    feature:
      "Tracking (e.g., exception log, change log, entity per state, etc.)",
    lite: true,
    pro: true,
    enterprise: true,
  },
  {
    feature: "Querying",
    lite: false,
    pro: true,
    enterprise: true,
  },
  {
    feature: "Batching",
    lite: false,
    pro: true,
    enterprise: true,
  },
  {
    feature: "Analytics",
    lite: false,
    pro: true,
    enterprise: true,
  },
  {
    feature: "Workflow Job Retention Period",
    lite: "1 day",
    pro: "Up to 60 days",
    enterprise: "Up to 120 days",
  },
  {
    feature: "Concurrent Processing",
    lite: "Minimum",
    pro: "Increased",
    enterprise: "Maximized",
  },
  {
    feature: "Collaborator Invitations",
    lite: "Up to 5",
    pro: "Up to 50",
    enterprise: "Unlimited",
  },
  {
    feature: "Customer Support",
    lite: true,
    pro: true,
    enterprise: true,
  },
  {
    feature: "Ticket Support",
    lite: false,
    pro: true,
    enterprise: true,
  },
  {
    feature: "Proactive Monitoring",
    lite: false,
    pro: false,
    enterprise: true,
  },
  {
    feature: "Early Access to New Features",
    lite: false,
    pro: true,
    enterprise: true,
  },
];

export const PricingPlanTable = () => {
  const renderRow = (feature: PricingFeature, col: any) => {
    const value = feature[col.key as keyof PricingFeature];
    if (typeof value === "boolean") {
      if (value) {
        return <CheckRounded />;
      } else {
        return <HorizontalRuleRounded className="opacity-30" />;
      }
    }

    return <p>{value}</p>;
  };

  return (
    <SectionContainer className="lighting-bg">
      <div className="flex flex-col mt-8 text-center gap-16 items-center w-full px-2 lg:px-8">
        <div className="flex flex-col ml-auto mr-auto max-w-screen-sm gap-8 items-center">
          <Pill>Plan</Pill>
          <LandingTitle>Choose the best plan for you</LandingTitle>

          <p className="text-base text-neutral-7">
            Here, you can compare diverse service plans, each crafted with
            distinct features and functionalities in mind
          </p>
        </div>

        <div className="text-description flex flex-col w-full glass-bar py-8 ml-auto mr-auto max-w-screen-lg">
          <div className="px-4">
            <Row
              className="w-full border backdrop-blur-lg rounded-lg mb-4 px-4"
              style={{
                backgroundColor: "rgba(206, 206, 251, 0.02)",
                borderColor: "rgba(206, 206, 251, 0.05)",
                boxShadow: "rgba(206, 206, 251, 0.04) 0px -32px 64px 0px inset",
              }}
            >
              {cols.map((col, i) => (
                <Col
                  key={i}
                  span={i === 0 ? 9 : 5}
                  className={`flex flex-col text-start py-4 ${i === 0 ? "items-start" : "!text-center items-center"}`}
                >
                  <p className="text-base text-white">{col.label}</p>
                </Col>
              ))}
            </Row>
          </div>
          <div className="px-8">
            {features.map((feature, i) => (
              <Row key={i} className="w-full">
                {cols.map((col, j) => (
                  <Col
                    key={`${i}-${j}`}
                    span={j === 0 ? 9 : 5}
                    className={`flex flex-col text-start py-4 border-b ${j === 0 ? "items-start" : "!text-center items-center"}`}
                    style={{
                      borderColor: "rgba(206, 206, 251, 0.08)",
                    }}
                  >
                    {renderRow(feature, col)}
                  </Col>
                ))}
              </Row>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

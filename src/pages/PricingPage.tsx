import { AutoComplete, Col, Flex, Row, Typography, theme } from "antd";
import { useState } from "react";
import { Span } from "../config/layoutConfig";
import { PricingTier } from "../dataDisplayComponents/PricingTier";
import { HeaderHeight } from "../layoutComponents/AppHeader";

const options = [
  {
    value: "Step Workflow",
  },
  {
    value: "Email Notification",
  },
];

const plans = [
  {
    key: "FREE",
    plan: "Free",
    description: `With limited usage and access, the Free plan provides a great way to get started with our platform at no cost.`,
    price: 0,
    features: [
      "Up to 1 user (individual)",
      "Up to 3,000 step workflow states",
      "Email support available",
    ],
  },
  {
    key: "INDIVIDUAL",
    plan: "Individual",
    description: `The Individual Plan provides increased usage limits and access to additional features, making it suitable for small-scale projects or personal use.`,
    price: 9,
    features: [
      "Up to 3 user (individual)",
      "Up to 300,000 step workflow states",
      "24/7 email support",
    ],
  },
  {
    key: "BUSINESS",
    plan: "Business",
    emphasized: true,
    description: `With expanded usage limits, advanced features, and priority support, the Business plan offers everything you need to grow and manage your business efficiently.`,
    price: 49,
    features: [
      "Up to 100 users (business)",
      "Up to 2,000,000 step workflow states",
      "Metrics",
      "24/7 email support",
    ],
  },
];

const priceGap = 32;

export const PricingPage = () => {
  const { token } = theme.useToken();

  const [value, setValue] = useState<string>("");
  return (
    <Flex vertical>
      <Flex
        vertical
        style={{ padding: "32px 256px" }}
        align="center"
        gap={16}
        className="gradient3"
      >
        <div id="bg"></div>
        <div id="bg"></div>
        <div id="bg"></div>
        <div id="bg"></div>
        <div style={{ height: HeaderHeight }} />

        <Typography.Title
          level={3}
          style={{ marginTop: 0, color: token.colorWhite }}
        >
          Compare our plans and find yours
        </Typography.Title>

        <Typography.Paragraph
          style={{
            padding: "0 16px",
            textAlign: "center",
            color: token.colorWhite,
          }}
        >
          Select from best plans, ensuring a perfect match for your business.
          Need more or less? Customize your subscription for a seamless fit
        </Typography.Paragraph>

        <AutoComplete
          options={options}
          placeholder="Search products"
          variant="borderless"
          value={value}
          onChange={setValue}
          style={{
            width: "60%",
            backgroundColor: "white",
            borderRadius: token.borderRadius,
          }}
          filterOption={(inputValue, option) =>
            option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />
      </Flex>

      <Row gutter={[priceGap, priceGap]} style={{ padding: priceGap }}>
        {plans.map((plan, i) => (
          <Col {...Span["3"]} key={i}>
            <PricingTier data={plan} />
          </Col>
        ))}
      </Row>
    </Flex>
  );
};

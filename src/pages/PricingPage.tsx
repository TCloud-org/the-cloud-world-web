import { CalculatorOutlined } from "@ant-design/icons";
import { AutoComplete, Button, Col, Flex, Row, Typography, theme } from "antd";
import { useState } from "react";
import { Span } from "../config/layoutConfig";
import { PricingTier } from "../dataDisplayComponents/PricingTier";
import { HeaderHeight } from "../layoutComponents/AppHeader";
import { useNavigate } from "react-router-dom";

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
    plan: "Free Tier",
    description: `Start your journey with our Free Tier. Experience our platform with limited usage and access, providing a perfect opportunity to explore and familiarize yourself with our services at no cost.`,
    price: "$0",
    unit: "up to 5000 transitions",
    features: [
      "RESTful Step Workflow APIs",
      "Tracking, querying, and batching",
      "1 day workflow task retention",
      "Customer support",
    ],
  },
  {
    key: "payasyougo",
    plan: "Pay As You Go",
    description: `Flexibility meets affordability with our Pay As You Go plan. Scale your usage as you need, pay only for what you use, and enjoy increased access to advanced features.`,
    price: "$0.00003",
    unit: "per transition",
    emphasize: true,
    features: [
      "RESTful Step Workflow APIs",
      "Tracking, querying, and batching",
      "1 day workflow task retention",
      "Customer support",
    ],
  },
];

const priceGap = 32;

export const PricingPage = () => {
  const navigate = useNavigate();
  const { token } = theme.useToken();

  const [value, setValue] = useState<string>("");
  return (
    <Flex vertical>
      <Flex vertical align="center" className="bg-slate-50 px-8 py-32">
        <div style={{ height: HeaderHeight }} />

        <Flex vertical className="lg:px-64" gap={16} align="center">
          <Typography.Title level={3} style={{ marginTop: 0 }}>
            Compare our plans and find yours
          </Typography.Title>

          <Typography.Paragraph
            style={{ padding: "0 16px", textAlign: "center" }}
          >
            Select from best plans, ensuring a perfect match for your business.
            Need more or less? Customize your subscription for a seamless fit
          </Typography.Paragraph>
        </Flex>

        <Flex align="center" className="w-full mt-6">
          <div style={{ flex: 1 }} className="hidden lg:block" />

          <Flex flex={1} justify="center">
            <AutoComplete
              options={options}
              placeholder="Search products"
              value={value}
              onChange={setValue}
              allowClear
              style={{
                backgroundColor: "white",
                borderRadius: token.borderRadius,
              }}
              className="w-full"
              filterOption={(inputValue, option) =>
                option!.value
                  .toUpperCase()
                  .indexOf(inputValue.toUpperCase()) !== -1
              }
            />
          </Flex>

          <Flex flex={1} justify="flex-end" className="w-full">
            <Button icon={<CalculatorOutlined />} type="link">
              Price Calculator
            </Button>
          </Flex>
        </Flex>
      </Flex>

      <div className="bg-slate-900 py-20 sm:py-32">
        <Flex justify="center" vertical align="center" gap={32}>
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl text-center">
            Pricing for everyone
          </h2>

          <Typography.Paragraph className="text-slate-400 text-lg">
            It doesn’t matter what size your business is, our software works for
            everyone.
          </Typography.Paragraph>
        </Flex>
        <Row
          gutter={[priceGap, priceGap]}
          style={{ padding: priceGap }}
          className="mt-16"
        >
          {plans.map((plan, i) => (
            <Col {...Span["2"]} key={i}>
              <PricingTier data={plan} />
            </Col>
          ))}
        </Row>
      </div>

      <div className="bg-slate-50 py-20 sm:py-32 text-center">
        <Typography.Title level={3}>
          Have questions about pricing?
        </Typography.Title>

        <Typography.Paragraph className="text-lg">
          We're here to help
        </Typography.Paragraph>

        <Button type="primary" onClick={() => navigate("/contact")}>
          Contact Us
        </Button>
      </div>
    </Flex>
  );
};

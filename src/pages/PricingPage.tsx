import { CalculatorOutlined } from "@ant-design/icons";
import {
  AutoComplete,
  Button,
  Col,
  Flex,
  Modal,
  Row,
  Typography,
  theme,
} from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PricingTier } from "../dataDisplayComponents/PricingTier";
import { HeaderHeight } from "../layoutComponents/AppHeader";
import { PriceCalculator } from "../dataEntryComponents/PriceCalculator";

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
    description: `Experience our platform with limited usage and access at no cost.`,
    price: "$0",
    unit: "up to 5000 transitions",
    features: [
      "Limited access to our RESTful Step Workflow APIs",
      "Tracking",
      "1 day workflow task retention",
      "Customer support",
    ],
  },
  {
    key: "startup",
    plan: "Startup",
    description: `Scale your usage and enjoy increased access to advanced features.`,
    price: "$0.00004",
    unit: "per transition",
    features: [
      "Expanded access to our RESTful Step Workflow APIs",
      "Tracking and querying",
      "Up to 30 days workflow task retention",
      "Ticket support",
      "Customer support",
    ],
  },
  {
    key: "scaleup",
    plan: "Scaleup",
    description: `Accelerate Your Growth. Scale and unlock advanced features for accelerated success.`,
    price: "$0.00011",
    unit: "per transition",
    emphasize: true,
    features: [
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
    key: "enterprise",
    plan: "Enterprise",
    description: `Propel Your Business Forward. Customize your plan to suit your business needs.`,
    price: "Custom pricing",
    features: [
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
  const navigate = useNavigate();
  const { token } = theme.useToken();

  const [value, setValue] = useState<string>("Step Workflow");
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <Flex vertical>
      <Flex
        vertical
        align="center"
        className="bg-slate-50 px-16 py-32 relative"
      >
        <div style={{ height: HeaderHeight }} />

        <Flex vertical className="lg:px-64" gap={16} align="center">
          <Typography.Title
            level={3}
            style={{ marginTop: 0 }}
            className="text-center"
          >
            Compare our plans and find yours
          </Typography.Title>

          <Typography.Paragraph
            style={{ padding: "0 16px", textAlign: "center" }}
          >
            Select from best plans, ensuring a perfect match for your business.
            Need more or less? Customize your subscription for a seamless fit
          </Typography.Paragraph>

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
              option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
          />
        </Flex>

        <Button
          icon={<CalculatorOutlined />}
          type="link"
          className="absolute bottom-4 right-4"
          onClick={() => setModalOpen(true)}
        >
          Price Calculator
        </Button>
      </Flex>

      <div className="bg-slate-900 py-20 sm:py-32 px-4">
        <Flex
          justify="center"
          vertical
          align="center"
          gap={32}
          className="text-center"
        >
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Pricing for everyone
          </h2>

          <Typography.Paragraph className="text-slate-400 text-lg">
            It doesn’t matter what size your business is, our software works for
            everyone.
          </Typography.Paragraph>
        </Flex>
        <Flex justify="center">
          <Row
            gutter={[priceGap, priceGap]}
            style={{ padding: priceGap }}
            className="mt-16 xl:max-w-7xl"
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
    </Flex>
  );
};

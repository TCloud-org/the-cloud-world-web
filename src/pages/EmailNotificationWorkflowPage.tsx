import {
  ApiOutlined,
  ClockCircleOutlined,
  IdcardOutlined,
  RightOutlined,
  SendOutlined,
} from "@ant-design/icons";
import {
  HourglassTopRounded,
  SettingsSuggestRounded,
  StoreRounded,
  VerifiedUserRounded,
} from "@mui/icons-material";
import { Button, Col, Flex, Image, Row, Typography, theme } from "antd";
import { useNavigate } from "react-router-dom";
import { Span } from "../config/layoutConfig";
import { EmailStep, EmailStepProps } from "../dataDisplayComponents/EmailStep";
import { Tenets, TenetsProps } from "../dataDisplayComponents/Tenets";
import { HeaderHeight } from "../layoutComponents/AppHeader";

const tenets: TenetsProps["tenets"] = [
  {
    icon: <HourglassTopRounded />,
    title: "Timeliness",
    description:
      "Strive to send notifications at the right time, balancing the need to provide timely updates with respect for the recipient's time and attention. Leverage automation and scheduling tools to send notifications at optimal times based on user preferences and behavior.",
  },
  {
    icon: <SettingsSuggestRounded />,
    title: "Customization & Flexibility",
    description:
      "Provide a platform that supports highly customizable email templates while offering a diverse selection of simple yet elegant templates from the store, catering to varying design preferences and needs.",
  },
  {
    icon: <StoreRounded />,
    title: "Monetization Integration",
    description:
      "Enable customers to not only create and customize their email templates but also publish and sell their designs within the store, fostering a vibrant marketplace for email template creators and providing additional revenue opportunities for customers.",
  },
  {
    icon: <VerifiedUserRounded />,
    title: "Secure",
    description:
      "Ensure your email is secured with advanced encryption, multi-factor authentication, and continuous monitoring, providing comprehensive protection against unauthorized access and safeguarding your sensitive information with the utmost care.",
  },
];

const steps: EmailStepProps[] = [
  {
    title: "Ease of integration",
    step: "Trigger",
    icon: <ApiOutlined />,
    points: [
      {
        title: "Productivity",
        description:
          "Engineered to maximize your engineers' time investment, our solution streamlines processes and tasks. With a single, synchronized API integration, complexities are minimized, ensuring unparalleled ease of use.",
      },
      {
        title: "Smooth Transition",
        description:
          "Featuring an intuitive interface, our solution guarantees a smooth transition for your team. Understanding its functionality is effortless, facilitating swift adoption and enhanced productivity.",
      },
    ],
  },
  {
    title: "Secure",
    step: "Verification",
    icon: <IdcardOutlined />,
    points: [
      {
        title: "Protect your assets",
        description:
          "Our robust verification system ensures the security of your email and domain ownership. With advanced encryption and authentication protocols, we safeguard your digital assets, providing peace of mind and protecting your online presence from unauthorized access or manipulation.",
      },
    ],
  },
  {
    title: "Timing",
    step: "Delay",
    icon: <ClockCircleOutlined />,
    points: [
      {
        title: "Introduce delayed delivery options",
        description:
          "Empower your email communication with the ability to schedule delays before sending. With our feature-rich platform, you can strategically time your email deliveries, optimizing engagement and ensuring messages reach recipients at the most opportune moments.",
      },
    ],
  },
  {
    title: "Deployment",
    step: "Email",
    icon: <SendOutlined />,
    points: [
      {
        title: "Automated email deployment",
        description:
          "Elevate your email campaigns with our automated system, allowing you to craft personalized messages with customizable subjects and bodies. Targeted delivery to your specified recipients ensures efficient communication, saving time and maximizing impact.",
      },
    ],
  },
];

export const EmailNotificationWorkflowPage = () => {
  const { token } = theme.useToken();
  const navigate = useNavigate();

  const routeToContact = () => {
    navigate("/contact");
  };

  return (
    <Flex vertical>
      <div style={{ height: HeaderHeight }} />

      <Row gutter={[64, 64]} style={{ padding: "128px 64px" }}>
        <Col {...Span[2]}>
          <Flex vertical gap={16}>
            <Typography.Title level={1} style={{ marginTop: 0, fontSize: 44 }}>
              Transform your communication landscape: Unleash the power of email
              automation
            </Typography.Title>
            <Typography.Paragraph style={{ fontSize: 18 }}>
              Engage and delight your customers with personalized email
              notifications powered by our cutting-edge marketing automation
              platform. From welcome emails to exclusive offers, stay connected
              effortlessly and drive meaningful interactions at every
              touchpoint.
            </Typography.Paragraph>

            <Flex align="center" gap={16}>
              <Button
                type="primary"
                iconPosition="end"
                onClick={() =>
                  window.open("https://www.tc-workflow.com", "_blank")
                }
              >
                Get started
              </Button>

              <Button
                iconPosition="end"
                type="link"
                icon={<RightOutlined style={{ fontSize: 10 }} />}
                style={{ color: token.colorPrimary }}
                onClick={routeToContact}
              >
                Contact sales
              </Button>
            </Flex>
          </Flex>
        </Col>

        <Col {...Span[2]}>
          <Image
            src="https://tcw-images.s3.us-west-2.amazonaws.com/email-workflow.png"
            className="shadow"
            preview={false}
            style={{ borderRadius: token.borderRadiusLG }}
          />
        </Col>
      </Row>

      <Tenets tenets={tenets} />

      {steps.map((step, i) => (
        <EmailStep {...step} key={i} index={i} />
      ))}
    </Flex>
  );
};

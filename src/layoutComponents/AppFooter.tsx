import { FacebookRounded, Instagram, LinkedIn, X } from "@mui/icons-material";
import { Col, Flex, Row, Typography } from "antd";
import { Footer } from "antd/es/layout/layout";
import { Span, createSpan } from "../config/layoutConfig";
import { AppLogo } from "../dataDisplayComponents/AppLogo";
import { FooterLink } from "../dataEntryComponents/FooterLink";
import { JoinNewsletter } from "../dataEntryComponents/JoinNewsletter";
import { LinkTreeLogo } from "../svg/LinkTreeLogo";
import { TiktokLogo } from "../svg/TiktokLogo";

const tools = [
  {
    label: "Product",
    children: [
      {
        href: "#Features",
        label: "Features",
      },
      {
        href: "/pricing",
        label: "Pricing",
      },
    ],
  },
  {
    label: "Company",
    children: [
      {
        href: "/about",
        label: "About",
      },
      {
        href: "https://thecloudworld.supahub.com/roadmap",
        label: "Our Roadmap",
      },
    ],
  },
  {
    label: "Support",
    children: [
      {
        href: "/contact",
        label: "Contact",
      },
      {
        href: "https://thecloudworld.supahub.com/b/requests",
        label: "Feature Request",
      },
    ],
  },
  {
    label: "Resources",
    children: [
      {
        href: "https://www.blog.thecloudworlds.com",
        label: "Blog",
      },
      {
        href: "https://www.documentation.thecloudworlds.com",
        label: "Documentation",
      },
      {
        href: "https://stepworkflow.thecloudworlds.com/terms-and-conditions",
        label: "Terms of Service",
      },
      {
        href: "https://stepworkflow.thecloudworlds.com/privacy-policy",
        label: "Privacy Policy",
      },
    ],
  },
];

const socials = [
  {
    href: "https://www.facebook.com/profile.php?id=61558007322573",
    children: <FacebookRounded />,
  },
  {
    href: "https://x.com/tcwofficial",
    children: <X />,
  },
  {
    href: "https://www.linkedin.com/company/101706949",
    children: <LinkedIn />,
  },
  {
    href: "https://www.instagram.com/thecloudworldofficial",
    children: <Instagram />,
  },
  {
    href: "https://www.tiktok.com/@thecloudworldofficial",
    children: <TiktokLogo />,
  },
  {
    href: "https://linktr.ee/thecloudworld",
    children: <LinkTreeLogo />,
  },
];

export const AppFooter = () => {
  return (
    <Footer className="bg-dark px-4 lg:px-12">
      <Flex vertical gap={32} className="max-w-screen-2xl ml-auto mr-auto">
        <JoinNewsletter />

        <Row gutter={[0, 8]}>
          <Col {...createSpan(8)}>
            <div className="flex items-center gap-2">
              <AppLogo width={48} />
              <div className="font-bold text-white text-lg">
                The Cloud World
              </div>
            </div>
          </Col>

          <Col {...createSpan(16)}>
            <Row className="pt-2" gutter={[16, 16]}>
              {tools.map((tool, i) => (
                <Col
                  {...{
                    xs: 12,
                    sm: 12,
                    md: 12,
                    lg: 24 / tools.length,
                    xl: 24 / tools.length,
                    xxl: 24 / tools.length,
                  }}
                  className="flex justify-start w-full"
                  key={i}
                >
                  <div className="flex flex-col gap-2 items-start">
                    <div className="text-white font-semibold">{tool.label}</div>
                    {tool.children.map((item, j) => (
                      <FooterLink href={item.href} key={`${i}-${j}`}>
                        {item.label}
                      </FooterLink>
                    ))}
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        <Row
          className="pt-8 pb-16 border-t border-t-neutral-10"
          gutter={[16, 16]}
        >
          <Col {...Span[2]}>
            <div className="flex items-center gap-8">
              <Flex align="center" gap={8} justify="center">
                <Typography.Text strong className="text-neutral-7">
                  The Cloud World ©{new Date().getFullYear()}
                </Typography.Text>
              </Flex>

              <FooterLink
                className="text-neutral-7 font-medium hover:text-white transition-all duration-300"
                href="https://stepworkflow.thecloudworlds.com/privacy-policy"
              >
                Privacy Policy
              </FooterLink>

              <FooterLink
                className="text-neutral-7 font-medium hover:text-white transition-all duration-300"
                href="https://stepworkflow.thecloudworlds.com/terms-and-conditions"
              >
                Terms of Service
              </FooterLink>
            </div>
          </Col>

          <Col {...Span[2]}>
            <div className="flex items-center justify-start lg:justify-end gap-3">
              {socials.map((social, i) => (
                <FooterLink href={social.href} key={i} target="_blank">
                  {social.children}
                </FooterLink>
              ))}
            </div>
          </Col>
        </Row>
      </Flex>
    </Footer>
  );
};

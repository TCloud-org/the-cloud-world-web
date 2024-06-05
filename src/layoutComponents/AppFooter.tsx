import { FacebookRounded, LinkedIn, X } from "@mui/icons-material";
import { Col, Flex, Row, Typography } from "antd";
import { Footer } from "antd/es/layout/layout";
import { Span } from "../config/layoutConfig";
import { FooterLink } from "../dataEntryComponents/FooterLink";
import { JoinNewsletter } from "../dataEntryComponents/JoinNewsletter";
import { LinkTreeLogo } from "../svg/LinkTreeLogo";
import { AppLogo } from "../dataDisplayComponents/AppLogo";

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
    label: "Support",
    children: [
      {
        href: "/contact",
        label: "Contact",
      },
    ],
  },
  {
    label: "Resources",
    children: [
      {
        href: "/about",
        label: "About",
      },
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
        label: "Terms",
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
    href: "https://linktr.ee/thecloudworld",
    children: <LinkTreeLogo />,
  },
];

export const AppFooter = () => {
  return (
    <Footer className="bg-dark text-center">
      <Flex vertical gap={32} className="max-w-screen-2xl ml-auto mr-auto">
        <JoinNewsletter />

        <Row gutter={[0, 8]}>
          <Col {...Span[2]}>
            <div className="flex items-center gap-2">
              <AppLogo width={48} />
              <div className="font-bold text-white text-lg">
                The Cloud World
              </div>
            </div>
          </Col>

          <Col {...Span[2]}>
            <Row className="pt-2">
              {tools.map((tool, i) => (
                <Col span={8} className="flex justify-start" key={i}>
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

        <Row className="pt-8 pb-16 border-t border-t-neutral-10">
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
            <div className="flex items-center justify-end gap-3">
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

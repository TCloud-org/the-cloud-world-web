import { FacebookRounded, LinkedIn, X } from "@mui/icons-material";
import { Col, Flex, Row, Typography } from "antd";
import { Footer } from "antd/es/layout/layout";
import { Span } from "../config/layoutConfig";
import { FooterLink } from "../dataEntryComponents/FooterLink";
import { JoinNewspaper } from "../dataEntryComponents/JoinNewspaper";
import { LinkTreeLogo } from "../svg/LinkTreeLogo";

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
        <JoinNewspaper />
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
                <FooterLink href={social.href} key={i}>
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

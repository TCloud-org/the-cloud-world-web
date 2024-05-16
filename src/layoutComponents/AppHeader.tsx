import { PartitionOutlined, SendOutlined } from "@ant-design/icons";
import { Flex, Typography, theme } from "antd";
import { Header } from "antd/es/layout/layout";
import { CSSProperties, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppLogo } from "../dataDisplayComponents/AppLogo";
import { PricingButton } from "../dataEntryComponents/PricingButton";
import { ProductsDropdown } from "../dataEntryComponents/ProductsDropdown";

const renderItems = (props: { isFlipColor: boolean }) => [
  {
    label: "Products",
    render: () => (
      <ProductsDropdown
        title="Products"
        isFlipColor={props.isFlipColor}
        menu={[
          {
            label: "Optimization",
            children: [
              {
                label: "Step Workflow",
                href: "/products/step-workflow",
                icon: <PartitionOutlined />,
              },
            ],
          },
          {
            label: "Automation",
            children: [
              {
                label: "Email Notification Workflow",
                href: "/products/email-notification-workflow",
                icon: <SendOutlined />,
              },
            ],
          },
        ]}
      />
    ),
  },
  {
    label: "Solutions",
    render: () => (
      <ProductsDropdown
        title="Solutions"
        isFlipColor={props.isFlipColor}
        menu={[
          {
            label: "By Use Case",
            children: [
              {
                label: "Integration Hub",
                href: "/products/step-workflow",
              },
              {
                label: "Notification Management",
                href: "/products/step-workflow",
              },
              {
                label: "Customer Onboarding",
                href: "/solutions/by-use-case/customer-onboarding",
              },
              {
                label: "Business Process Automation",
                href: "/products/step-workflow",
              },
              {
                label: "Compliance Processes",
                href: "/products/step-workflow",
              },
            ],
          },
          {
            label: "By Industry",
            children: [
              {
                label: "E-commerce",
                href: "/products/step-workflow",
              },
              {
                label: "Healthcare",
                href: "/products/step-workflow",
              },
              {
                label: "Finance",
                href: "/products/step-workflow",
              },
              {
                label: "Manufacturing",
                href: "/products/step-workflow",
              },
              {
                label: "Retail",
                href: "/products/step-workflow",
              },
              {
                label: "Telecommunications",
                href: "/products/step-workflow",
              },
            ],
          },
        ]}
      />
    ),
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "About",
    href: "/about",
  },
];

const flipColor: any = {
  "": true,
  "step-workflow": true,
};

export const HeaderHeight = 64;

export const AppHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { token } = theme.useToken();
  const [scrollStart, setScrollStart] = useState<boolean>(false);

  const currentPath = location.pathname.split("/").splice(-1)[0];
  const isFlipColor = (flipColor[currentPath] || false) && !scrollStart;

  const controlNavbar = () => {
    if (window.scrollY > 10) {
      setScrollStart(true);
    } else {
      setScrollStart(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  const headerScrollStyle: CSSProperties = {
    background: token.colorBgContainer,
    boxShadow: token.boxShadowTertiary,
  };

  const headerStyle: CSSProperties = {
    background: "transparent",
    boxShadow: "none",
  };

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        position: "fixed",
        top: 0,
        zIndex: 999,
        width: "100%",
        justifyContent: "space-between",
        transition: "all 0.3s",
        ...(scrollStart ? headerScrollStyle : headerStyle),
      }}
    >
      <Flex align="center" flex={1}>
        <Flex
          align="center"
          gap={8}
          onClick={() => navigate("/")}
          style={{ padding: 16, cursor: "pointer" }}
        >
          <AppLogo flip={isFlipColor} />
          <Typography.Text
            strong
            style={{ color: !isFlipColor ? "black" : "white" }}
          >
            The Cloud World
          </Typography.Text>
        </Flex>
      </Flex>

      <Flex
        align="center"
        flex={2}
        justify="center"
        gap={32}
        className="hidden lg:flex"
      >
        {renderItems({ isFlipColor: isFlipColor }).map((item, i) => (
          <div key={i}>
            {item.render ? (
              item.render()
            ) : (
              <a
                href={item.href}
                style={{ color: !isFlipColor ? undefined : "white" }}
                className="link"
              >
                {item.label}
              </a>
            )}
          </div>
        ))}
      </Flex>

      <Flex flex={1} justify="flex-end" align="center" gap={32}>
        <a
          href="https://www.documentation.thecloudworlds.com"
          target="_blank"
          className="link"
          rel="noreferrer"
          style={{ color: !isFlipColor ? undefined : "white" }}
        >
          Docs
        </a>
        <div>
          <PricingButton
            href="https://www.stepworkflow.thecloudworlds.com"
            target="_blank"
            style={{ paddingTop: "6px", paddingBottom: "6px" }}
            className={
              !isFlipColor ? "rounded-md ring-0 bg-black" : "rounded-md"
            }
            variant={!isFlipColor ? undefined : "solid"}
          >
            Login
          </PricingButton>
        </div>
      </Flex>
    </Header>
  );
};

import { PartitionOutlined, SendOutlined } from "@ant-design/icons";
import { Flex, Typography, theme } from "antd";
import { Fade as Hamburger } from "hamburger-react";
import { CSSProperties, useEffect, useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { useLocation, useNavigate } from "react-router-dom";
import { AppLogo } from "../dataDisplayComponents/AppLogo";
import { ProductsDropdown } from "../dataEntryComponents/ProductsDropdown";
import { ThemeButton } from "../dataEntryComponents/ThemeButton";

export const scrollToHash = () => {
  const hash = window.location.hash.slice(1);

  if (hash) {
    const element = document.getElementById(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
};

const renderItems = (props: { isFlipColor?: boolean; menuOpen?: boolean }) => [
  {
    label: "Products",
    render: () => (
      <ProductsDropdown
        title="Products"
        isFlipColor={props.isFlipColor && !props.menuOpen}
        menuOpen={props.menuOpen}
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
        isFlipColor={props.isFlipColor && !props.menuOpen}
        menuOpen={props.menuOpen}
        menu={[
          {
            label: "By Use Case",
            children: [
              {
                label: "Customer Onboarding",
                href: "/solutions/by-use-case/customer-onboarding",
              },
              {
                label: "Compliance Process",
                href: "/solutions/by-use-case/compliance-process",
              },
            ],
          },
        ]}
      />
    ),
  },
  {
    label: "Resources",
    render: () => (
      <ProductsDropdown
        title="Resources"
        isFlipColor={props.isFlipColor && !props.menuOpen}
        menuOpen={props.menuOpen}
        menu={[
          {
            label: "General",
            children: [
              {
                label: "Blog",
                href: "https://www.blog.thecloudworlds.com",
              },
            ],
          },
          {
            label: "Company",
            children: [
              {
                label: "About us",
                href: "/about",
              },
              {
                label: "Contact us",
                href: "/contact",
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
  ...(props.menuOpen
    ? [
        {
          label: "Docs",
          href: "https://www.documentation.thecloudworlds.com",
        },
        {
          label: "Login",
          href: "https://stepworkflow.thecloudworlds.com",
        },
      ]
    : []),
];

const flipColor: any = {
  "": true,
  "step-workflow": true,
  "customer-onboarding": false,
  "email-notification-workflow": true,
  about: true,
};

export const HeaderHeight = 64;

export const AppHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { token } = theme.useToken();
  const [scrollStart, setScrollStart] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    scrollToHash();
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

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
    background: "#03001499",
    boxShadow: token.boxShadowTertiary,
    backdropFilter: "blur(24px)",
  };

  const headerStyle: CSSProperties = {
    background: "transparent",
    boxShadow: "none",
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          overflow: "hidden",
          top: 0,
          zIndex: 999,
          height: HeaderHeight,
          width: "100%",
          transition: "all 0.3s",
          ...(scrollStart || menuOpen ? headerScrollStyle : headerStyle),
        }}
        className="px-2 lg:px-8"
      >
        <Flex justify="space-between" align="center" className="w-full h-full">
          <Flex align="center" flex={1}>
            <Flex
              align="center"
              gap={8}
              onClick={() => navigate("/")}
              style={{ padding: 16, cursor: "pointer" }}
            >
              <AppLogo />
              <Typography.Text strong style={{ color: "white" }}>
                The Cloud World
              </Typography.Text>
            </Flex>
          </Flex>

          <Flex
            align="center"
            flex={2}
            justify="center"
            gap={32}
            className="hidden"
          >
            {renderItems({ isFlipColor: true }).map((item, i) => (
              <div key={i}>
                {item.render ? (
                  item.render()
                ) : (
                  <a
                    href={item.href}
                    style={{
                      color: "white",
                    }}
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
              className="link hidden lg:flex"
              rel="noreferrer"
              style={{ color: "white" }}
            >
              Docs
            </a>
            <div className="hidden lg:flex">
              <ThemeButton href="https://www.stepworkflow.thecloudworlds.com">
                Login
              </ThemeButton>
            </div>

            <div className="block lg:hidden">
              <Hamburger
                toggled={menuOpen}
                toggle={setMenuOpen}
                size={20}
                color="white"
              />
            </div>
          </Flex>
        </Flex>
      </header>
      <Menu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        right
        burgerButtonClassName="hidden"
        width={"100%"}
        className="top-[64px] block lg:hidden"
        overlayClassName="top-[64px] block lg:hidden"
      >
        <Flex
          vertical
          className="bg-dark/50 h-full px-2 overflow-auto pb-16 backdrop-blur-md"
        >
          {renderItems({ isFlipColor: isFlipColor, menuOpen: menuOpen }).map(
            (item, i) => (
              <div key={i}>
                {item.render ? null : (
                  <div className="mx-4 py-4">
                    <a
                      href={item.href}
                      style={{
                        color: "white",
                      }}
                      className="link"
                    >
                      {item.label}
                    </a>
                  </div>
                )}
              </div>
            )
          )}
        </Flex>
      </Menu>
    </>
  );
};

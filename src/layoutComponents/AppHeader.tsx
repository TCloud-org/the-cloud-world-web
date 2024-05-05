import { Button, Dropdown, Flex, Typography, theme } from "antd";
import { Header } from "antd/es/layout/layout";
import { useLocation, useNavigate } from "react-router-dom";
import { AppLogo } from "../dataDisplayComponents/AppLogo";
import { ProductMenu } from "../navigationComponents/ProductMenu";
import { DownOutlined } from "@ant-design/icons";
import { CSSProperties, useEffect, useState } from "react";
import { ProductsDropdown } from "../dataEntryComponents/ProductsDropdown";

const renderItems = (props: { isFlipColor: boolean }) => [
  {
    label: "Products",
    render: () => <ProductsDropdown isFlipColor={props.isFlipColor} />,
  },
  {
    label: "Solutions",
    render: () => (
      <Dropdown
        placement="bottom"
        menu={{ items: [] }}
        dropdownRender={() => <ProductMenu />}
      >
        <Flex
          align="center"
          gap={6}
          style={{ cursor: "pointer" }}
          className="rotate-trigger"
        >
          <Typography.Text
            className="link"
            style={{ color: !props.isFlipColor ? undefined : "white" }}
          >
            Solutions
          </Typography.Text>
          <DownOutlined
            style={{
              fontSize: "8px",
              color: !props.isFlipColor ? undefined : "white",
            }}
            className="link rotate"
          />
        </Flex>
      </Dropdown>
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

  const handleLogin = () => {
    window.open("https://www.tc-workflow.com", "_blank");
  };

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

      <Flex align="center" flex={2} justify="center" gap={32}>
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
          href="/documentation"
          className="link"
          style={{ color: !isFlipColor ? undefined : "white" }}
        >
          Documentation
        </a>
        <Button
          type={!isFlipColor ? "primary" : "text"}
          onClick={handleLogin}
          className={!isFlipColor ? undefined : "landing-button"}
          style={{ fontWeight: 400 }}
        >
          Login
        </Button>
      </Flex>
    </Header>
  );
};

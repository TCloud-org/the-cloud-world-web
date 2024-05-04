import { Button, Flex, Typography, theme } from "antd";
import { Header } from "antd/es/layout/layout";
import { useNavigate } from "react-router-dom";
import { AppLogo } from "../dataDisplayComponents/AppLogo";

const items = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "Solutions",
    href: "/solutions",
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

export const AppHeader = () => {
  const navigate = useNavigate();
  const { token } = theme.useToken();

  const handleLogin = () => {
    window.open("https://www.tc-workflow.com", "_blank");
  };

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: token.colorBgContainer,
        borderBottom: "1px solid",
        borderBottomColor: token.colorBorderSecondary,
      }}
    >
      <Flex align="center" flex={1}>
        <Flex
          align="center"
          gap={8}
          onClick={() => navigate("/")}
          style={{ padding: 16, cursor: "pointer" }}
        >
          <AppLogo />
          <Typography.Text strong>The Cloud World</Typography.Text>
        </Flex>
      </Flex>

      <Flex align="center" flex={2} justify="center" gap={32}>
        {items.map((item, i) => (
          <a href={item.href} className="link" key={i}>
            {item.label}
          </a>
        ))}
      </Flex>

      <Flex flex={1} justify="flex-end">
        <Button type="primary" onClick={handleLogin}>
          Login
        </Button>
      </Flex>
    </Header>
  );
};

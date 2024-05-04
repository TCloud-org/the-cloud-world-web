import { Button, Dropdown, Flex, Typography, theme } from "antd";
import { Header } from "antd/es/layout/layout";
import { useNavigate } from "react-router-dom";
import { AppLogo } from "../dataDisplayComponents/AppLogo";
import { ProductMenu } from "../navigationComponents/ProductMenu";
import { DownOutlined } from "@ant-design/icons";

const items = [
  {
    label: "Products",
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
          <Typography.Text className="link">Products</Typography.Text>
          <DownOutlined style={{ fontSize: "8px" }} className="link rotate" />
        </Flex>
      </Dropdown>
    ),
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
          <Typography.Text className="link ">Solutions</Typography.Text>
          <DownOutlined style={{ fontSize: "8px" }} className="link rotate" />
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
        position: "sticky",
        top: 0,
        zIndex: 999,
        justifyContent: "space-between",
        background: token.colorBgContainer,
        boxShadow: token.boxShadowTertiary,
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
          <div key={i}>
            {item.render ? (
              item.render()
            ) : (
              <a href={item.href} className="link">
                {item.label}
              </a>
            )}
          </div>
        ))}
      </Flex>

      <Flex flex={1} justify="flex-end" align="center" gap={32}>
        <a href="/documentation" className="link">
          Documentation
        </a>
        <Button type="primary" onClick={handleLogin}>
          Login
        </Button>
      </Flex>
    </Header>
  );
};

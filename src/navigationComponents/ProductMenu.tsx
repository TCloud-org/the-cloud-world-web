import { Col, Flex, Row, Typography, theme } from "antd";
import { Span } from "../config/layoutConfig";
import { IconMenuItem } from "../dataEntryComponents/IconMenuItem";
import { CSSProperties } from "react";

const menuItemWidth = 300;

export const ProductMenu = (props: {
  onOpen?: (e: boolean) => void;
  menu?: any[];
  menuOpen?: boolean;
}) => {
  const { token } = theme.useToken();
  const { onOpen = () => {}, menu = [], menuOpen = false } = props;

  const menuStyle: CSSProperties = {
    background: "transparent",
    boxShadow: "none",
    borderRadius: "none",
    padding: 0,
  };

  return (
    <Flex
      style={{
        background: token.colorBgContainer,
        boxShadow: token.boxShadowSecondary,
        borderRadius: token.borderRadius,
        padding: "16px 32px",
        ...(menuOpen && menuStyle),
      }}
    >
      <Row gutter={[16, 16]}>
        {menu.map((menuItem, i) => (
          <Col
            {...Span[Math.min(menu.length, 2).toString() as keyof typeof Span]}
            style={{ width: menuItemWidth }}
            key={i}
          >
            <Flex vertical gap={8} className="w-full">
              <Typography.Text
                strong
                style={{ marginLeft: 8 }}
                className="text-slate-800 uppercase underline lg:no-underline"
              >
                {menuItem.label}
              </Typography.Text>
              {(menuItem?.children || [])
                .sort((a: any, b: any) => a.label.localeCompare(b.label))
                .map((item: any, j: number) => (
                  <IconMenuItem
                    icon={item.icon}
                    href={item.href}
                    onOpen={onOpen}
                    key={`${i}-${j}`}
                  >
                    {item.label}
                  </IconMenuItem>
                ))}
            </Flex>
          </Col>
        ))}
      </Row>
    </Flex>
  );
};

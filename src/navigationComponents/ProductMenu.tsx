import { Col, Flex, Row, Typography, theme } from "antd";
import { Span } from "../config/layoutConfig";
import { IconMenuItem } from "../dataEntryComponents/IconMenuItem";

const menuItemWidth = 300;

export const ProductMenu = (props: {
  onOpen?: (e: boolean) => void;
  menu?: any[];
}) => {
  const { token } = theme.useToken();
  const { onOpen = () => {}, menu = [] } = props;

  return (
    <Flex
      style={{
        background: token.colorBgContainer,
        boxShadow: token.boxShadowSecondary,
        borderRadius: token.borderRadius,
        padding: "16px 32px",
      }}
    >
      <Row gutter={[16, 16]}>
        {menu.map((menuItem, i) => (
          <Col {...Span[2]} style={{ width: menuItemWidth }} key={i}>
            <Flex vertical gap={8}>
              <Typography.Text
                strong
                style={{ marginLeft: 8 }}
                className="text-slate-800 uppercase"
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

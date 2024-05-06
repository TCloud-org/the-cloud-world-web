import { Col, Flex, Row, Typography, theme } from "antd";
import { CSSProperties, ReactElement, ReactNode, cloneElement } from "react";
import { Span, lightColor } from "../config/layoutConfig";

export interface TenetsProps {
  tenets?: { title: string; icon: ReactNode; description: string }[];
}
export const Tenets = (props: TenetsProps) => {
  const { token } = theme.useToken();
  const { tenets = [] } = props;

  return (
    <Row
      gutter={[64, 64]}
      style={{ padding: "128px 64px", backgroundColor: lightColor }}
    >
      {tenets.map((tenet, i) => (
        <Col
          {...Span[4]}
          key={i}
          style={{
            borderLeft: i !== 0 ? `1px dashed ${token.colorBorder}` : "none",
          }}
        >
          <Flex vertical gap={16}>
            {cloneElement(tenet.icon as ReactElement, {
              style: {
                color: token.colorPrimary,
                fontSize: 32,
              } as CSSProperties,
            })}
            <Typography.Title
              level={5}
              style={{ margin: 0, height: "auto", color: token.colorPrimary }}
            >
              {tenet.title}
            </Typography.Title>
            <Typography.Paragraph>{tenet.description}</Typography.Paragraph>
          </Flex>
        </Col>
      ))}
    </Row>
  );
};

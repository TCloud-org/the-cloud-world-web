import { Col, Flex, Row, Typography, theme } from "antd";
import { Span, lightColor } from "../config/layoutConfig";
import {
  ApiRounded,
  FastForwardRounded,
  MonetizationOnRounded,
  SettingsSuggestRounded,
} from "@mui/icons-material";
import { CSSProperties, ReactElement, cloneElement } from "react";

const tenets = [
  {
    icon: <ApiRounded />,
    title: "Ease of integration",
    description:
      "Make it as easy as possible for developers to integrate and use our APIs. Provide comprehensive documentation, code examples, and SDKs in popular programming languages.",
  },
  {
    icon: <SettingsSuggestRounded />,
    title: "Customization & flexibility",
    description:
      "Provide flexibility and customization options to meet the diverse needs of your customers. Allow developers to customize endpoints, parameters, and payloads to suit their specific requirements.",
  },
  {
    icon: <MonetizationOnRounded />,
    title: "Time saving, cost reduction",
    description:
      "Efficiently manage all your resources in one centralized platform, saving significant time and reducing maintenance costs.",
  },
  {
    icon: <FastForwardRounded />,
    title: "Speed",
    description:
      "Speed matters in business. Our API workflow ensures swift task execution and batch action capabilities, keeping you ahead of the game.",
  },
];
export const StepWorkflowTenets = () => {
  const { token } = theme.useToken();

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

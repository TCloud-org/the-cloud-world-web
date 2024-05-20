import { Col, Flex, Row, Typography, theme } from "antd";
import { Span } from "../config/layoutConfig";
import { LandingSectionHeading } from "./LandingSectionHeading";
import { LandingContainer } from "./LandingContainer";

export interface BenefitSectionProps {
  benefits?: { title?: string; description?: string }[];
  span?: any;
  title?: string;
  subtitle?: string;
}

export const BenefitSection = (props: BenefitSectionProps) => {
  const { token } = theme.useToken();

  const { benefits = [], span = Span[4], title, subtitle } = props;

  return (
    <LandingContainer light>
      <Flex vertical gap={32}>
        <LandingSectionHeading title={title} subtitle={subtitle} />

        <Row gutter={[64, 64]}>
          {benefits.map((benefit, i) => (
            <Col
              {...span}
              key={i}
              className="flex flex-col"
              style={{
                borderLeft:
                  i !== 0 ? `1px dashed ${token.colorBorder}` : "none",
              }}
            >
              <Flex vertical gap={16} className="h-full">
                <Typography.Title
                  level={5}
                  style={{ margin: 0, color: token.colorPrimary }}
                  className="h-10 2xl:h-6"
                >
                  {benefit.title}
                </Typography.Title>
                <Typography.Text>{benefit.description}</Typography.Text>
              </Flex>
            </Col>
          ))}
        </Row>
      </Flex>
    </LandingContainer>
  );
};

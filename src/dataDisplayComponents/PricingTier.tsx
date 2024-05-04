import { CheckCircleFilled } from "@ant-design/icons";
import { Card, Flex, Typography, theme } from "antd";

export const PricingTier = (props: { data: any }) => {
  const { token } = theme.useToken();
  const { data } = props;

  return (
    <Card
      bordered={false}
      style={{
        boxShadow: "0 30px 60px 0 rgba(90, 116, 148, 0.15)",
        height: "100%",
      }}
    >
      <Flex vertical align="center" gap={32}>
        <Typography.Title style={{ marginTop: 0 }} level={3}>
          {data.plan}
        </Typography.Title>
        <Typography.Paragraph
          style={{
            margin: 0,
            height: 100,
            overflow: "auto",
          }}
        >
          {data.description}
        </Typography.Paragraph>

        <Typography.Text style={{ fontWeight: 500, fontSize: 20 }}>
          <Typography.Text style={{ fontSize: 32, fontWeight: 800 }}>
            {data.price}
          </Typography.Text>{" "}
          USD per month
        </Typography.Text>

        {data.features.map((feature: string, i: number) => (
          <Flex gap={16} key={i} justify="flex-start" style={{ width: "100%" }}>
            <CheckCircleFilled style={{ color: token.colorSuccess }} />

            <Typography.Text>{feature}</Typography.Text>
          </Flex>
        ))}
      </Flex>
    </Card>
  );
};

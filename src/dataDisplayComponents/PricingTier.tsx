import { CheckCircleOutlined } from "@ant-design/icons";
import { Button, Card, Flex, Typography, theme } from "antd";

export const PricingTier = (props: { data: any }) => {
  const { token } = theme.useToken();
  const { data } = props;

  const emphasized = data.emphasize;
  return (
    <Card
      bordered={false}
      style={{
        height: "100%",
        backgroundColor: emphasized ? token.colorPrimary : "transparent",
      }}
    >
      <Flex vertical align="center" gap={32}>
        <Typography.Title
          style={{ marginTop: 0, color: token.colorWhite }}
          level={3}
          className="text-white"
        >
          {data.plan}
        </Typography.Title>
        <Typography.Paragraph
          style={{
            margin: 0,
            height: 80,
            overflow: "auto",
          }}
          className={emphasized ? "text-white" : "text-slate-400"}
        >
          {data.description}
        </Typography.Paragraph>

        <Typography.Text
          style={{ fontWeight: 500, fontSize: 20, textAlign: "center" }}
          className="text-white"
        >
          <Typography.Text
            style={{ fontSize: 24, fontWeight: 700 }}
            className="text-white"
          >
            {data.price}
          </Typography.Text>{" "}
          {data.unit}
        </Typography.Text>

        <Button
          className="w-full"
          type={emphasized ? "default" : "primary"}
          onClick={() => window.open("https://www.tc-workflow.com", "_blank")}
        >
          Try For Free
        </Button>

        {(data.features || []).map((feature: string, i: number) => (
          <Flex gap={16} key={i} justify="flex-start" style={{ width: "100%" }}>
            <CheckCircleOutlined
              style={{
                color: emphasized ? token.colorWhite : "rgb(148 163 184 / 1)",
              }}
            />

            <Typography.Text
              className={emphasized ? "text-white" : "text-slate-400"}
            >
              {feature}
            </Typography.Text>
          </Flex>
        ))}
      </Flex>
    </Card>
  );
};

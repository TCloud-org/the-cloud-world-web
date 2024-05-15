import { CheckCircleOutlined } from "@ant-design/icons";
import { Card, Flex, Typography, theme } from "antd";
import { PricingButton } from "../dataEntryComponents/PricingButton";

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
            overflow: "auto",
          }}
          className={`${emphasized ? "text-white" : "text-slate-400"} h-20 lg:h-26`}
        >
          {data.description}
        </Typography.Paragraph>

        <Typography.Text
          style={{
            fontWeight: 500,
            fontSize: 20,
            textAlign: "center",
          }}
          className="text-white h-8"
        >
          <Typography.Text
            style={{ fontSize: 24, fontWeight: 700 }}
            className="text-white"
          >
            {data.price}
          </Typography.Text>{" "}
          {data.unit}
        </Typography.Text>

        <PricingButton
          target="_blank"
          href={
            data.href ||
            `https://www.stepworkflow.thecloudworlds.com?product=StepWorkflow&tier=${data.key}`
          }
          variant={emphasized ? "solid" : "outlined"}
        >
          {data.action || "Try For Free"}
        </PricingButton>

        {(data.features || []).map((feature: string, i: number) => (
          <Flex
            gap={16}
            key={i}
            justify="flex-start"
            align="flex-start"
            style={{ width: "100%" }}
          >
            <CheckCircleOutlined
              style={{
                color: emphasized ? token.colorWhite : "rgb(148 163 184 / 1)",
                marginTop: 4,
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

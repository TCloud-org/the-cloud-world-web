import {
  CaretDownOutlined,
  CaretRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { LaunchRounded } from "@mui/icons-material";
import { Descriptions, Flex, Tag, Typography, theme } from "antd";
import { Span } from "../config/layoutConfig";
import { Screen } from "../layoutComponents/Screen";

const tags = [
  { name: "success", color: "green" },
  { name: "25 ms", color: "green" },
  { name: "200 OK", color: "green" },
  { name: "Completed", color: "default" },
];
const formatDateTime = () => {
  const dateTime = new Date();
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  };
  return dateTime.toLocaleString("en-US", options);
};

const info = [
  {
    label: "Result name",
    children: "Completed",
  },
  {
    label: "Result type",
    children: "success",
  },
  {
    label: "Latency",
    children: "25 ms",
  },
  {
    label: "Status code",
    children: "200",
  },
  {
    label: "Status",
    children: "OK",
  },
  {
    label: "Reason",
    children: "OK",
  },
  {
    label: "Completed",
    children: formatDateTime(),
  },
  {
    label: "Retried",
    children: "-",
  },
];

const WorkflowItem = (props: {
  step?: any;
  expand?: boolean;
  showTags?: boolean;
}) => {
  const { token } = theme.useToken();
  const { step } = props;

  return (
    <Flex
      vertical
      className="w-full bg-white px-4 py-3 rounded-md"
      style={{ boxShadow: token.boxShadow }}
      gap={16}
    >
      <Flex justify="space-between">
        <Flex align="center" gap={16}>
          {props.expand ? <CaretDownOutlined /> : <CaretRightOutlined />}
          <Typography.Text>
            {typeof step === "string" ? step : step.name}
          </Typography.Text>
        </Flex>
        {step.isSubWorkflow && (
          <Typography.Link className="flex items-center">
            View sub-workflow{" "}
            <LaunchRounded style={{ fontSize: 14, marginLeft: 4 }} />
          </Typography.Link>
        )}
      </Flex>

      {props.showTags && (
        <Flex gap={8} wrap="wrap">
          {tags.map((tag, i) => (
            <Tag
              icon={<CheckCircleOutlined />}
              color={tag.color}
              className="rounded-xl"
              style={{ margin: 0 }}
              key={i}
            >
              {tag.name}
            </Tag>
          ))}
        </Flex>
      )}

      {props.expand && (
        <Descriptions
          column={Span[1]}
          labelStyle={{
            fontWeight: 500,
            color: token.colorText,
          }}
          contentStyle={{
            color: token.colorText,
          }}
          items={info.map((item, i) => ({
            ...item,
            key: i,
            span: Span[1],
          }))}
        />
      )}
    </Flex>
  );
};

export const WorkflowMockup = (props: {
  steps?: any[];
  className?: string;
  bubble?: "left" | "right";
  expand?: boolean[];
  showTags?: boolean;
}) => {
  const { steps = [], bubble, expand = [], showTags } = props;

  const pos = () => {
    if (bubble === "left") {
      return "-left-20";
    }
    return "-right-20";
  };

  const pos2 = () => {
    if (bubble === "left") {
      return "-right-12";
    }
    return "-left-12";
  };

  return (
    <Screen className={`${props.className} ${bubble ? "relative z-10" : ""}`}>
      <Flex
        vertical
        className="dot-bg p-4 lg:p-12 rounded-lg"
        justify="center"
        align="center"
        gap={32}
      >
        {steps.map((step, i) => (
          <WorkflowItem
            key={i}
            step={step}
            expand={expand[i]}
            showTags={showTags}
          />
        ))}
      </Flex>

      {bubble && (
        <>
          <div
            className={`w-72 h-72 lg:w-96 lg:h-96 rounded-full bg-slate-100 absolute -top-16 lg:-top-20 ${pos()}`}
            style={{ zIndex: -1 }}
          />
          <div
            className={`w-36 h-36 lg:w-48 lg:h-48 rounded-full bg-slate-100 absolute -bottom-12 lg:-bottom-16 ${pos2()}`}
            style={{ zIndex: -1 }}
          />
        </>
      )}
    </Screen>
  );
};

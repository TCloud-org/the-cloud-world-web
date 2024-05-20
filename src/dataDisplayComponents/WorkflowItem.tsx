import {
  CaretDownOutlined,
  CaretRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { LaunchRounded } from "@mui/icons-material";
import { Descriptions, Flex, Tag, Typography, theme } from "antd";
import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { Span } from "../config/layoutConfig";
import LineConnector from "./LineConnector";

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

export const WorkflowItem = (props: {
  step?: any;
  expand?: boolean;
  showTags?: boolean;
  size?: "small" | "medium";
}) => {
  const sourceRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const { token } = theme.useToken();
  const { step, size = "medium" } = props;

  const sourceId = step.id || `source-${uuidv4()}`;
  const targetId = `target-${uuidv4()}`;

  const containerPadding = () => {
    if (size === "small") {
      return "px-2 py-2";
    }
    return "px-4 py-3";
  };

  const textSize = () => {
    if (size === "small") {
      return "text-[10px]";
    }
    return "";
  };

  const spacing = () => {
    if (size === "small") {
      return 8;
    }
    return 16;
  };

  return (
    <Flex
      vertical
      id={sourceId}
      className={`w-full bg-white rounded-md relative ${containerPadding()}`}
      style={{ boxShadow: token.boxShadow }}
      gap={spacing()}
      ref={sourceRef}
    >
      <Flex justify="space-between" gap={spacing()}>
        <Flex align="center" gap={spacing()}>
          {props.expand ? (
            <CaretDownOutlined className={textSize()} />
          ) : (
            <CaretRightOutlined className={textSize()} />
          )}
          <Typography.Text className={textSize()}>
            {typeof step === "string" ? step : step.name}
          </Typography.Text>
        </Flex>
        {step.isSubWorkflow && (
          <Typography.Link className={`flex items-center ${textSize()}`}>
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

      {step.linkTo && (
        <>
          <div
            className="absolute right-0 z-10 translate-x-[125%] -translate-y-[50%]"
            ref={targetRef}
            id={targetId}
          >
            {step.linkTo}
          </div>
          <LineConnector start={sourceId} end={targetId} />
        </>
      )}
    </Flex>
  );
};

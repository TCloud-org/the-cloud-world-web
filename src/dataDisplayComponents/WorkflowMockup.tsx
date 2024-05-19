import { CaretRightOutlined } from "@ant-design/icons";
import { Flex, Typography, theme } from "antd";
import { Screen } from "../layoutComponents/Screen";

const WorkflowItem = (props: { step?: string }) => {
  const { token } = theme.useToken();

  return (
    <Flex
      align="center"
      gap={16}
      className="w-full bg-white px-4 py-3 rounded-md"
      style={{ boxShadow: token.boxShadow }}
    >
      <CaretRightOutlined />
      <Typography.Text>{props.step}</Typography.Text>
    </Flex>
  );
};

export const WorkflowMockup = (props: {
  steps?: string[];
  className?: string;
  bubble?: "left" | "right";
}) => {
  const { steps = [], bubble } = props;

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
        className="dot-bg p-4 lg:p-20 rounded-lg"
        justify="center"
        align="center"
        gap={32}
      >
        {steps.map((step, i) => (
          <WorkflowItem key={i} step={step} />
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

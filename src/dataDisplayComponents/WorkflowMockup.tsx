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

  return (
    <Screen className={props.className}>
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
        <div
          className={`w-72 h-72 lg:w-96 lg:h-96 rounded-full bg-slate-100 absolute -top-20 -${bubble}-20`}
          style={{ zIndex: -1 }}
        />
      )}
    </Screen>
  );
};

import { CaretRightOutlined, SearchOutlined } from "@ant-design/icons";
import { Flex, Typography, theme } from "antd";
import { ScreenDots } from "./ScreenDots";

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
}) => {
  const { token } = theme.useToken();

  const { steps = [] } = props;

  return (
    <div className={props.className}>
      <Flex
        vertical
        className="rounded-lg bg-[#fefefe]"
        style={{ boxShadow: token.boxShadow }}
        gap={16}
      >
        <Flex
          className="shadow-sm px-4 py-3 rounded-tl-md rounded-tr-md"
          align="center"
        >
          <Flex flex={1}>
            <ScreenDots />
          </Flex>

          <Flex flex={2} justify="center">
            <div className="w-full bg-slate-300/20 p-1 rounded-lg">
              <SearchOutlined
                className="mx-1"
                style={{ color: "rgb(148 163 184 / 1)" }}
              />
            </div>
          </Flex>

          <Flex flex={1}>
            <div></div>
          </Flex>
        </Flex>
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
      </Flex>
    </div>
  );
};

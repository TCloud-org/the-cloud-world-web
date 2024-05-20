import { Flex } from "antd";
import { ReactNode } from "react";
import { BubbleWrap } from "../layoutComponents/BubbleWrap";
import { Screen } from "../layoutComponents/Screen";
import { WorkflowItem } from "./WorkflowItem";

export const WorkflowMockup = (props: {
  steps?: any[];
  className?: string;
  bubble?: "left" | "right";
  expand?: boolean[];
  showTags?: boolean;
  size?: "small" | "medium";
  linkTo?: ReactNode;
}) => {
  const {
    steps = [],
    bubble,
    expand = [],
    showTags,
    size = "medium",
    linkTo,
  } = props;

  const containerPadding = () => {
    if (size === "small") {
      return "p-2 lg:p-6";
    }
    return "p-4 lg:p-12";
  };

  const containerSpacing = () => {
    if (size === "small") {
      return 24;
    }
    return 32;
  };

  return (
    <BubbleWrap position={bubble} className={props.className}>
      <Screen className="w-full">
        <Flex
          vertical
          className={`dot-bg rounded-lg ${containerPadding()}`}
          justify="center"
          align="center"
          gap={containerSpacing()}
        >
          {steps.map((step, i) => (
            <WorkflowItem
              key={i}
              step={step}
              expand={expand[i]}
              showTags={showTags}
              size={size}
            />
          ))}
        </Flex>
      </Screen>

      {linkTo}
    </BubbleWrap>
  );
};

import { Flex } from "antd";
import { Screen } from "../layoutComponents/Screen";
import { ReactNode } from "react";

export const DotScreen = (props: {
  children?: ReactNode;
  title?: string;
  size?: "small" | "medium";
}) => {
  const { size = "medium" } = props;

  return (
    <Screen className="w-full" title={props.title} size={size}>
      <Flex
        vertical
        className={`dot-bg rounded-lg p-4`}
        justify="center"
        align="center"
        gap={8}
      >
        {props.children}
      </Flex>
    </Screen>
  );
};

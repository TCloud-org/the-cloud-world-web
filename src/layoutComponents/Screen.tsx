import { SearchOutlined } from "@ant-design/icons";
import { Flex, Typography, theme } from "antd";
import { ReactNode } from "react";
import { ScreenDots } from "../dataDisplayComponents/ScreenDots";

const dotPad = {
  small: "px-2 py-2",
  medium: "px-4 py-2",
};

export const Screen = (props: {
  children?: ReactNode;
  className?: string;
  title?: string;
  size?: "small" | "medium";
}) => {
  const { token } = theme.useToken();

  const { children, title, size = "medium" } = props;

  const textSize = () => {
    if (size === "small") {
      return "text-[10px]";
    }

    return "";
  };

  return (
    <div className={props.className}>
      <Flex
        vertical
        className="rounded-lg bg-[#fefefe]"
        style={{ boxShadow: token.boxShadow }}
      >
        <Flex
          className={`border-b border-slate-200/70 rounded-tl-md rounded-tr-md ${dotPad[size]}`}
          align="center"
          gap={16}
        >
          <Flex flex={1}>
            <ScreenDots size={size} />
          </Flex>

          <Flex flex={2} justify="center">
            {title ? (
              <Typography.Text strong className={`${textSize()}`}>
                {title}
              </Typography.Text>
            ) : (
              <div className="w-full bg-slate-300/20 p-0.5 rounded-lg">
                <SearchOutlined
                  className="mx-1 text-xs"
                  style={{ color: "rgb(148 163 184 / 1)" }}
                />
              </div>
            )}
          </Flex>

          <Flex flex={1}>
            <div></div>
          </Flex>
        </Flex>
        <div className="p-2">{children}</div>
      </Flex>
    </div>
  );
};

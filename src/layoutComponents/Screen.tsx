import { SearchOutlined } from "@ant-design/icons";
import { Flex, theme } from "antd";
import { ReactNode } from "react";
import { ScreenDots } from "../dataDisplayComponents/ScreenDots";

export const Screen = (props: { children?: ReactNode; className?: string }) => {
  const { token } = theme.useToken();

  const { children } = props;

  return (
    <div
      className={props.className}
      style={{ position: "relative", zIndex: 1 }}
    >
      <Flex
        vertical
        className="rounded-lg bg-[#fefefe]"
        style={{ boxShadow: token.boxShadow }}
      >
        <Flex
          className="shadow-sm px-4 py-2 rounded-tl-md rounded-tr-md"
          align="center"
        >
          <Flex flex={1}>
            <ScreenDots />
          </Flex>

          <Flex flex={2} justify="center">
            <div className="w-full bg-slate-300/20 p-0.5 rounded-lg">
              <SearchOutlined
                className="mx-1 text-xs"
                style={{ color: "rgb(148 163 184 / 1)" }}
              />
            </div>
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

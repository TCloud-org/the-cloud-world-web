import { Typography } from "antd";
import { ReactNode } from "react";

export const LandingTitle = (props: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <Typography.Title
      level={1}
      style={{
        margin: 0,
      }}
      className={`!text-washed-purple-400 ${props.className}`}
    >
      {props.children}
    </Typography.Title>
  );
};

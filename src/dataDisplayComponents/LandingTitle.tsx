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
      className={`bg-gradient-to-br from-neutral-4 to-neutral-7 bg-clip-text !text-transparent text-center ${props.className}`}
    >
      {props.children}
    </Typography.Title>
  );
};

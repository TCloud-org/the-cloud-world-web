import { Flex, Typography } from "antd";
import { ReactElement, ReactNode, cloneElement } from "react";

export const LandingCard = (props: {
  title?: string;
  subtitle?: string;
  icon?: ReactNode;
}) => {
  const { title, subtitle, icon } = props;

  return (
    <div className="glass p-10 border border-solid border-neutral-11 hover:border-neutral-5 rounded-2xl h-full transition-all duration-300">
      <Flex vertical gap={32}>
        <div className="h-16 w-16 glass border border-neutral-11 rounded-md flex justify-center items-center">
          {cloneElement(icon as ReactElement, {
            className: "!text-white",
            style: {
              fontSize: 32,
            },
          })}
        </div>
        <Typography.Text className="text-white font-bold text-xl">
          {title}
        </Typography.Text>
        <Typography.Paragraph
          style={{ marginBottom: 0 }}
          className="text-paragraph text-lg"
        >
          {subtitle}
        </Typography.Paragraph>
      </Flex>
    </div>
  );
};

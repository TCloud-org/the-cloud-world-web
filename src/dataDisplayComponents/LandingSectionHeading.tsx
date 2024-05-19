import { Flex, Typography, theme } from "antd";

export const LandingSectionHeading = (props: {
  title?: string;
  subtitle?: string;
}) => {
  const { token } = theme.useToken();

  return (
    <Flex vertical gap={32}>
      <Typography.Title
        level={4}
        style={{ color: token.colorPrimary, margin: 0 }}
        className="text-center"
      >
        {props.title?.toUpperCase()}
      </Typography.Title>

      <Typography.Title
        level={2}
        style={{ marginTop: 0, textAlign: "center", fontSize: "2.75rem" }}
        className="px-2 lg:px-60"
      >
        {props.subtitle}
      </Typography.Title>
    </Flex>
  );
};

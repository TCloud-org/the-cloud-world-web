import { Flex, Typography } from "antd";
import { lightColor } from "../config/layoutConfig";

export const LandingDetails = () => {
  return (
    <Flex
      style={{ backgroundColor: lightColor, padding: "128px 32px" }}
      justify="center"
    >
      <Typography.Title
        level={2}
        style={{ margin: 0, textAlign: "center", width: "40%" }}
      >
        Speed
      </Typography.Title>
    </Flex>
  );
};

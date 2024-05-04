import { Flex, Image, theme } from "antd";

export const LandingImage = () => {
  const { token } = theme.useToken();

  return (
    <Flex vertical align="center">
      <Image
        src="https://tcw-images.s3.us-west-2.amazonaws.com/3556947.jpg"
        preview={false}
        width="70%"
        style={{
          overflow: "hidden",
          borderRadius: 999,
        }}
        className="shadow"
      />
    </Flex>
  );
};

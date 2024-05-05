import { Flex, Image } from "antd";

export const LandingImage = () => {
  return (
    <Flex
      vertical
      align="center"
      style={{ position: "relative", backgroundColor: "transparent" }}
    >
      <Image
        src="https://tcw-images.s3.us-west-2.amazonaws.com/landing-bg.png"
        preview={false}
        style={{
          overflow: "hidden",
        }}
      />
      <a
        href="https://storyset.com/business"
        style={{ position: "absolute", bottom: 32, fontSize: "8px" }}
        className="link"
      >
        Business illustrations by Storyset
      </a>
    </Flex>
  );
};

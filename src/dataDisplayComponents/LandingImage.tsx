import { Flex, Image } from "antd";

export const LandingImage = () => {
  return (
    <Flex vertical align="center" style={{ position: "relative" }}>
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
      <a
        href="http://www.freepik.com"
        style={{ position: "absolute", bottom: 16, fontSize: "8px" }}
        className="link"
      >
        Designed by slidesgo / Freepik
      </a>
    </Flex>
  );
};

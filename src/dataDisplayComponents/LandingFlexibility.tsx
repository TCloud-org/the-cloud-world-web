import { Flex, Image, Typography } from "antd";
import { LandingContainer } from "./LandingContainer";

export const LandingFlexibility = () => {
  return (
    <LandingContainer>
      <Flex flex={1}>
        <Image
          src="https://tcw-images.s3.us-west-2.amazonaws.com/transition.png"
          preview={false}
        />
      </Flex>
      <Flex vertical gap={32} flex={1}>
        <Typography.Title level={2} style={{ margin: 0 }}>
          Flexibility
        </Typography.Title>
        <Typography.Title level={4} style={{ margin: 0 }}>
          Transition
        </Typography.Title>
        <Typography.Paragraph>
          Facilitate manual transitions to mitigate intermittent failures and
          ensure uninterrupted operation
        </Typography.Paragraph>
        <Typography.Title level={4} style={{ margin: 0 }}>
          Batch
        </Typography.Title>
        <Typography.Paragraph>
          Categorize states with analogous behaviors and provide support for
          batch actions on these grouped states
        </Typography.Paragraph>
      </Flex>
    </LandingContainer>
  );
};

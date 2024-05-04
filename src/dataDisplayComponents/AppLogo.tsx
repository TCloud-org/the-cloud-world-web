import { Image, ImageProps } from "antd";
import { logoImageUrl } from "../config/businessConfig";

export const AppLogo = (props: ImageProps & { flip?: boolean }) => {
  const { width = 32, preview = false, flip = false } = props;
  return (
    <Image
      {...props}
      src={
        flip
          ? "https://tcw-icon.s3.us-west-2.amazonaws.com/9.png"
          : logoImageUrl
      }
      width={width}
      preview={preview}
    />
  );
};

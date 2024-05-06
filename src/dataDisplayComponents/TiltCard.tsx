import { Flex, Typography, theme } from "antd";
import {
  CSSProperties,
  ReactElement,
  ReactNode,
  cloneElement,
  useState,
} from "react";

export const TiltCard = (props: { icon?: ReactNode; label?: string }) => {
  const { token } = theme.useToken();

  const [tiltX, setTiltX] = useState<number>(0);
  const [tiltY, setTiltY] = useState<number>(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const tiltX = (centerY - mouseY) / 10;
    const tiltY = (centerX - mouseX) / 10;
    setTiltX(tiltX);
    setTiltY(tiltY);
  };

  const handleMouseLeave = () => {
    setTiltX(0);
    setTiltY(0);
  };

  return (
    <Flex
      justify="center"
      align="center"
      gap={32}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        padding: 64,
        background: token.colorBgContainer,
        borderRadius: token.borderRadiusLG,
        boxShadow: token.boxShadow,
        transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
      }}
    >
      {cloneElement(props.icon as ReactElement, {
        style: { fontSize: 48, color: token.colorPrimary } as CSSProperties,
      })}
      <Typography.Title
        level={2}
        style={{ margin: 0, color: token.colorPrimary, fontSize: 48 }}
      >
        {props.label}
      </Typography.Title>
    </Flex>
  );
};

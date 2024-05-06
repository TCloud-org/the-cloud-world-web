import { theme } from "antd";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import React, {
  CSSProperties,
  ReactElement,
  ReactNode,
  cloneElement,
  useRef,
} from "react";

// const Example = () => {
//   return (
//     <div className="grid w-full place-content-center bg-gradient-to-br from-indigo-500 to-violet-500 px-4 py-12 text-slate-900">
//       <TiltCard />
//     </div>
//   );
// };

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

export const AnimatedCard = (props: {
  icon?: ReactNode;
  children?: ReactNode | string;
}) => {
  const { token } = theme.useToken();
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="grid w-full place-content-center bg-gradient-to-br from-indigo-500 to-violet-500 px-4 py-12 text-slate-900 rounded-lg">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          transform,
        }}
        className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
      >
        <div
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
            gap: 16,
          }}
          className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
        >
          <div
            className="flex justify-center"
            style={{ transform: "translateZ(75px)" }}
          >
            <div
              className="p-5 rounded-lg bg-indigo-500"
              style={{
                transform: "translateZ(75px)",
                border: `1px solid ${token.colorPrimary}`,
              }}
            >
              {cloneElement(props.icon as ReactElement, {
                style: {
                  color: token.colorWhite,
                } as CSSProperties,
                className: "mx-auto text-4xl",
              })}
            </div>
          </div>
          <p
            style={{
              transform: "translateZ(50px)",
            }}
            className="text-center text-2xl font-bold text-indigo-500"
          >
            {props.children}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

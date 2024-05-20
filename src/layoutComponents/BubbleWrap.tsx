import { ReactNode } from "react";

export const BubbleWrap = (props: {
  position?: "left" | "right";
  children?: ReactNode;
  className?: string;
  color?: string;
  size1?: number;
  size2?: number;
}) => {
  const { position, children, className } = props;

  const pos = () => {
    if (position === "left") {
      return "-left-20";
    }
    return "-right-20";
  };

  const pos2 = () => {
    if (position === "left") {
      return "-right-12";
    }
    return "-left-12";
  };

  return (
    <div className={`${position ? "relative z-10" : ""} ${className}`}>
      {children}
      {position && (
        <>
          <div
            className={`w-72 h-72 lg:w-96 lg:h-96 rounded-full bg-slate-100 absolute -top-16 lg:-top-20 ${pos()}`}
            style={{
              zIndex: -1,
              backgroundColor: props.color,
              width: props.size1,
              height: props.size1,
            }}
          />
          <div
            className={`w-36 h-36 lg:w-48 lg:h-48 rounded-full bg-slate-100 absolute -bottom-12 lg:-bottom-16 ${pos2()}`}
            style={{
              zIndex: -1,
              backgroundColor: props.color,
              width: props.size2,
              height: props.size2,
            }}
          />
        </>
      )}
    </div>
  );
};

import { ReactNode } from "react";

export const SectionContainer = (props: {
  children?: ReactNode;
  className?: string;
}) => {
  const { className = "" } = props;
  return (
    <div
      className={`flex flex-col items-center py-16 ml-auto mr-auto max-w-screen-2xl gap-8 ${className}`}
    >
      {props.children}
    </div>
  );
};

import { ReactNode } from "react";

export const Step = (props: { children?: ReactNode }) => {
  return (
    <div className="h-12 w-12 flex justify-center items-center text-white rounded-full bg-neutral-12 border border-neutral-10">
      {props.children}
    </div>
  );
};

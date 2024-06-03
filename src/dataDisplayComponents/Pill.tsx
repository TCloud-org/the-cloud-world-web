import { ReactNode } from "react";

export const Pill = (props: { children?: ReactNode }) => {
  return (
    <div className="bg-gradient-to-r from-primary-blue-600 to-primary-purple-500 px-[1px] py-[1px] rounded-[28px]">
      <div className="bg-dark px-5 py-2 rounded-[28px] justify-center items-center gap-2.5 inline-flex">
        <div className="text-neutral-6 text-base flex items-center gap-2">
          {props.children}
        </div>
      </div>
    </div>
  );
};

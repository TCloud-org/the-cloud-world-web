import { ReactNode } from "react";

export const GlassContainer = (props: { children?: ReactNode }) => {
  return (
    <div className="px-12 w-full">
      <div
        className="w-full rounded-3xl backdrop-blur-[5px] border border-neutral-11 py-4 lg:p-20"
        style={{ boxShadow: "inset 0 -7px 120px #a48fff1f" }}
      >
        {props.children}
      </div>
    </div>
  );
};

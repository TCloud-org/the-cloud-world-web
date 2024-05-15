import { ReactNode } from "react";

export const PricingButton = (props: {
  children?: string | ReactNode;
  href?: string;
  target?: string;
  variant?: string;
}) => {
  if (props.variant === "solid") {
    return (
      <a
        className="group inline-flex items-center justify-center w-full hover:text-slate-900 rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-8"
        variant="solid"
        color="white"
        aria-label="Pricing link"
        style={{ transition: "all 0.2s" }}
        {...props}
      />
    );
  }
  return (
    <a
      className="group inline-flex ring-1 items-center justify-center w-full hover:text-white rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white mt-8"
      color="white"
      aria-label="Pricing link"
      style={{ transition: "all 0.2s" }}
      {...props}
    />
  );
};
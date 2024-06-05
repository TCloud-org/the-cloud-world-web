import { Input, InputProps } from "antd";

export const ThemeInput = (props: InputProps) => {
  return (
    <Input
      size="large"
      {...props}
      className={`bg-neutral-12/50 hover:bg-neutral-12/50 focus:bg-neutral-12/50 border-neutral-10 hover:border-neutral-10 focus:border-neutral-7 text-white foot-placeholder w-full ${props.className}`}
    />
  );
};

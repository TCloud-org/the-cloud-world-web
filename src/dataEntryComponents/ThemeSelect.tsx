import { Select, SelectProps } from "antd";

export const ThemeSelect = (props: SelectProps) => {
  return (
    <Select
      variant="borderless"
      size="large"
      {...props}
      dropdownStyle={{
        backgroundColor: "rgb(22 20 39 / 1)",
        color: "white",
      }}
      className={`bg-neutral-12/50 hover:bg-neutral-12/50 focus:bg-neutral-12/50 border border-neutral-10 hover:border-neutral-10 focus:border-neutral-7 text-white w-full rounded-lg ${props.className}`}
    />
  );
};

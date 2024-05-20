const rad = {
  small: "w-1.5 h-1.5",
  medium: "w-3 h-3",
};

const space = {
  small: "space-x-1",
  medium: "space-x-2",
};

export const ScreenDots = (props: { size?: "small" | "medium" }) => {
  const { size = "medium" } = props;

  return (
    <div className={`flex ${space[size]}`}>
      <div className={`${rad[size]} rounded-full bg-red-500`}></div>
      <div className={`${rad[size]} rounded-full bg-yellow-500`}></div>
      <div className={`${rad[size]} rounded-full bg-green-500`}></div>
    </div>
  );
};

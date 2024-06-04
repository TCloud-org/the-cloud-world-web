export const Pill = (props: { children?: string }) => {
  const { children = "" } = props;

  return (
    <div
      id={encodeURIComponent(children)}
      style={{
        boxShadow: "rgba(164, 143, 255, 0.12) 0px -7px 11px 0px inset",
        borderColor: "rgba(131, 104, 242, 0.3)",
      }}
      className="backdrop-blur px-4 py-[6px] rounded-[32px] bg-transparent"
    >
      <p className="font-medium text-gradient text-base">{children}</p>
    </div>
  );
};

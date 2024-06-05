import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

export const ThemeButton = (props: {
  onClick?: () => void;
  children?: ReactNode;
  leading?: ReactNode;
  trailing?: ReactNode;
  disabled?: boolean;
  href?: string;
  className?: string;
}) => {
  const navigate = useNavigate();
  const { disabled, href, onClick = () => {}, className = "" } = props;

  const handleClick = () => {
    if (href) {
      if (href.startsWith("http")) {
        window.open(href, "_blank");
      } else {
        navigate(href);
      }
    } else {
      onClick();
    }
  };

  return (
    <div
      className={`p-[1px] bg-neutral-9 hover:bg-neutral-6 rounded-lg cursor-pointer transition-colors duration-300 ${disabled ? "cursor-not-allowed hover:bg-neutral-9" : ""} ${className}`}
      onClick={handleClick}
    >
      <div
        className={`w-full text-washed-purple-500 px-4 py-1 bg-gradient-to-b from-[#030014] to-[#201F30] rounded-lg justify-center items-center gap-2.5 inline-flex ${disabled ? "text-neutral-7" : ""}`}
      >
        {props.leading}
        <div
          className={`bg-gradient-to-tl from-neutral-5 to-neutral-7 text-transparent bg-clip-text ${disabled ? "from-neutral-7" : ""}`}
        >
          {props.children}
        </div>
        {props.trailing}
      </div>
    </div>
  );
};

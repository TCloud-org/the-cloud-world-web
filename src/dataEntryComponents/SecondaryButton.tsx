import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

export const SecondaryButton = (props: {
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
      className={`p-[1px] bg-gradient rounded-lg cursor-pointer transition-colors duration-300 ${disabled ? "cursor-not-allowed hover:bg-neutral-9" : ""} ${className}`}
      onClick={handleClick}
    >
      <div
        className={`w-full h-full text-washed-purple-500 px-4 py-1 bg-dark rounded-lg justify-center items-center gap-2.5 inline-flex ${disabled ? "text-neutral-7" : ""}`}
      >
        {props.leading}
        <div className={`text-gradient ${disabled ? "from-neutral-7" : ""}`}>
          {props.children}
        </div>
        {props.trailing}
      </div>
    </div>
  );
};

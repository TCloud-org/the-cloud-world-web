export const FooterLink = (
  props: React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
) => {
  return (
    <a
      {...props}
      className={`text-neutral-7 font-medium hover:text-white transition-all duration-300 ${props.className}`}
    >
      {props.children}
    </a>
  );
};

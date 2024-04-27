import type { ButtonProps } from "@/types/comics-src-types";
const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className="h-12 w-[14.375rem] bg-bubble_button pb-1 pr-2 text-base font-bold text-csrcblue transition delay-150 hover:scale-[.98] hover:text-csrcdark"
    ></button>
  );
};

export default Button;

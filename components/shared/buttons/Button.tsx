import type { ButtonProps } from "@/types/comics-src-types";
const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className="text-csrcblue text-base h-12 w-[14.375rem] bg-bubble_button font-bold transition delay-150 hover:scale-[.98] hover:text-csrcdark pr-2 pb-1"
    ></button>
  );
};

export default Button;

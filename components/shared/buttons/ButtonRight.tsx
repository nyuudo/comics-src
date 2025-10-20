import type { ButtonProps } from "@/types/comics-src-types";
const ButtonRight = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className="bg-bubble_button_right h-12 w-57.5 pb-1 pr-2 text-base font-bold text-csrcblue transition delay-150 hover:scale-[.98] hover:text-csrcdark"
    ></button>
  );
};

export default ButtonRight;

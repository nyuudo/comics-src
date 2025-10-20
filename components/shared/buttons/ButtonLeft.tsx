import type { ButtonProps } from "@/types/comics-src-types";
const ButtonLeft = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className="bg-bubble_button_left h-12 w-57.5 pb-1 pl-2 text-base font-bold text-csrcblue transition delay-150 hover:scale-[.98] hover:text-csrcdark"
    ></button>
  );
};

export default ButtonLeft;

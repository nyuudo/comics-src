import type { ButtonProps } from "@/types/comics-src-types";
const ModalButton = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className="bg-csrcyellow hover:bg-csrcdark hover:text-csrclight w-full cursor-pointer rounded-sm px-2 py-1 text-xs font-bold transition delay-150"
    ></button>
  );
};

export default ModalButton;

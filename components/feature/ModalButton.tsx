import type { ButtonProps } from "@/types/comics-src-types";
const ModalButton = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className="font-bold text-xs bg-csrcyellow py-1 px-2 w-full rounded transition duration-300 delay-300 hover:text-csrclight hover:bg-csrcdark"
    ></button>
  );
};

export default ModalButton;

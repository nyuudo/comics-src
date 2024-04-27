import type { ButtonProps } from "@/types/comics-src-types";
const ModalButton = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className="w-full rounded bg-csrcyellow px-2 py-1 text-xs font-bold transition delay-150 hover:bg-csrcdark hover:text-csrclight"
    ></button>
  );
};

export default ModalButton;

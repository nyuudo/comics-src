import { useDispatch } from "react-redux";
import { openModal } from "@/store/modalSlice";

export default function SignUpButton() {
  const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return (
    <button
      className="font-bold text-csrcdark transition duration-300 delay-150 hover:delay-150 hover:text-csrcyellow"
      onClick={handleOpenModal}
    >
      SIGN UP
    </button>
  );
}

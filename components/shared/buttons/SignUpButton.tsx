import { useDispatch } from "react-redux";
import { openModal } from "@/store/modalSlice";

export default function SignUpButton() {
  const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return (
    <button className="font-bold" onClick={handleOpenModal}>
      SIGN UP
    </button>
  );
}

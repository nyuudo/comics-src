import { useDispatch } from "react-redux";
import { openModal } from "@/store/modalSlice";
import Link from "next/link";

export default function SignUpButton() {
  const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return (
    <Link
      href="#"
      className="font-bold text-csrcdark transition duration-300 delay-150 hover:delay-150 hover:text-csrcyellow"
      onClick={handleOpenModal}
    >
      SIGN UP
    </Link>
  );
}

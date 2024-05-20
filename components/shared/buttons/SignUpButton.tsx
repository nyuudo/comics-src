"use client";

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
      className="font-bold text-csrcdark transition delay-150 duration-300 hover:text-csrcyellow hover:delay-150"
      onClick={handleOpenModal}
    >
      SIGN UP
    </Link>
  );
}

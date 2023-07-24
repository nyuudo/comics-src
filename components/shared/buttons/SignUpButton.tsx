"use client";

import { useDispatch, useSelector } from "react-redux";
import { openModal } from "@/store/modalSlice";
import { RootState } from "@/store/store";

export default function SignUpButton() {
  const isModalOpen = useSelector(
    (state: RootState) => state.modal.isModalOpen
  );
  const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return <button onClick={handleOpenModal}>SIGN UP</button>;
}

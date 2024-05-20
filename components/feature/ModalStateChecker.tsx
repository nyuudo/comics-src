"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import ModalForSignIn from "./ModalForSignIn";
import { closeModal } from "@/store/modalSlice";

export default function ModalStateChecker() {
  const isModalOpen = useSelector(
    (state: RootState) => state.modal.isModalOpen,
  );

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  return (
    <>{isModalOpen ? <ModalForSignIn onClose={handleCloseModal} /> : null}</>
  );
}

// NEXTJS imports
"use client";
import { Logo } from "@/components/shared/Logo";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";

import SearchBar from "./SearchBar";

import { closeModal } from "@/store/modalSlice";
import ModalForSignIn from "../feature/ModalForSignIn";
import SignUpButton from "./buttons/SignUpButton";

import LogInButton from "./buttons/LogInButton";

export default function Header() {
  const isModalOpen = useSelector(
    (state: RootState) => state.modal.isModalOpen,
  );

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <>
      {isModalOpen ? <ModalForSignIn onClose={handleCloseModal} /> : null}
      <header className="top-0 flex flex-col items-center justify-evenly bg-csrcblue xs:h-[162px] xs:px-5 sm:px-10 md:h-[96px] md:flex-row md:justify-between md:lg:px-[3.75rem] xl:px-20">
        <div className="flex">
          <Logo />
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:gap-2">
          <div className="order-2 flex items-stretch justify-center md:order-1 md:items-center md:justify-between md:gap-4">
            <SearchBar />
          </div>
          <div className="order-1 flex items-stretch justify-evenly md:order-2 md:items-center md:justify-between md:gap-4">
            <SignUpButton />
            <LogInButton />
          </div>
        </div>
      </header>
    </>
  );
}

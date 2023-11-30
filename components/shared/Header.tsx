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
    (state: RootState) => state.modal.isModalOpen
  );

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <>
      {isModalOpen ? <ModalForSignIn onClose={handleCloseModal} /> : null}
      <header className="top-0 flex xs:px-5 sm:px-10 md:lg:px-[3.75rem] xl:px-20 flex-col md:flex-row items-center justify-evenly md:justify-between bg-csrcblue md:h-[96px] xs:h-[162px]">
        <div className="flex">
          <Logo />
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:gap-2">
          <div className="flex order-2 items-stretch md:items-center justify-center md:justify-between md:gap-4 md:order-1">
            <SearchBar />
          </div>
          <div className="flex order-1 items-stretch md:items-center justify-evenly md:justify-between md:gap-4 md:order-2">
            <SignUpButton />
            <LogInButton />
          </div>
        </div>
      </header>
    </>
  );
}

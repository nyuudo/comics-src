"use client";

import Link from "next/link";
import Image from "next/image";
import SignUpButton from "./buttons/SignUpButton";
import LogInButton from "./buttons/LogInButton";
import ModalForSignIn from "../feature/ModalForSignIn";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "@/store/modalSlice";
import { RootState } from "@/store/store";

export default function Header() {
  const isModalOpen = useSelector(
    (state: RootState) => state.modal.isModalOpen
  );
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <div>
      {isModalOpen && <ModalForSignIn onClose={handleCloseModal} />}
      <header className="container flex items-center justify-between sm:px-3 bg-csrcblue h-[96px]">
        <div className="flex">
          <Link href="/">
            <Image
              src="/assets/icons/branding.svg"
              alt="COMICS SRC Logo"
              width={185}
              height={32}
            ></Image>
          </Link>
        </div>
        <div className="flex justify-between gap-2">
          <div className="flex justify-between gap-2">
            <SignUpButton />
            <LogInButton />
          </div>
        </div>
      </header>
    </div>
  );
}

// NEXTJS imports
"use client";
import Link from "next/link";
import Image from "next/image";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";

import SearchResults from "../feature/SearchResults";
import SearchBar from "./SearchBar";

import { closeModal } from "@/store/modalSlice";
import ModalForSignIn from "../feature/ModalForSignIn";
import SignUpButton from "./buttons/SignUpButton";

import LogInButton from "./buttons/LogInButton";

export default function Header() {
  const isModalOpen = useSelector(
    (state: RootState) => state.modal.isModalOpen
  );

  const showSearchResults = useSelector(
    (state: RootState) => state.search.showSearchResults
  );

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <>
      {isModalOpen ? <ModalForSignIn onClose={handleCloseModal} /> : null}
      <header className="flex xs:px-5 sm:px-10 md:lg:px-[3.75rem] xl:px-20 items-center justify-between bg-csrcblue h-[96px]">
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
          <div className="flex justify-between gap-4">
            <SearchBar />
            <SignUpButton />
            <LogInButton />
          </div>
        </div>
      </header>
      {showSearchResults ? <SearchResults /> : null}
    </>
  );
}

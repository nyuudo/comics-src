import Link from "next/link";
import Image from "next/image";
import Providers from "../feature/Provider";
import SearchBar from "./SearchBar";
import SignUpButton from "./buttons/SignUpButton";
import LogInButton from "./buttons/LogInButton";
/* import { useDispatch } from "react-redux";
import { openModal } from "@/store/modalSlice"; */

export default function Header() {
  /*   const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(openModal());
  }; */

  return (
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
        <Providers>
          <SearchBar />
        </Providers>
        <div className="flex justify-between gap-2">
          <SignUpButton />
          <LogInButton />
        </div>
      </div>
    </header>
  );
}

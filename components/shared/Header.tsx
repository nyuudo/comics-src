import Link from "next/link";
import Image from "next/image";
//import SearchBar from "./SearchBar";
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
    <header className="w-[1024px] h-24 bg-[rgba(0,164,222,1)] flex flex-row items-center justify-between flex-nowrap px-[60px];">
      <Link href="/">
        <Image
          src="/assets/icons/branding.svg"
          alt="COMICS SRC Logo"
          width={185}
          height={32}
        ></Image>
      </Link>
      <p>This is a shared Header component</p>
      <div className="relative w-[434px] h-24 flex flex-row items-center justify-between self-center">
        <SignUpButton />
        <LogInButton />
      </div>
    </header>
  );
}

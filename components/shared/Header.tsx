// NEXTJS imports
import { Logo } from "@/components/shared/Logo";
import SearchBar from "./SearchBar";
import ModalStateChecker from "../feature/ModalStateChecker";
import AuthButtons from "../feature/AuthButtons";

export default function Header() {
  return (
    <>
      <ModalStateChecker />
      <header className="top-0 flex h-[162px] flex-col items-center justify-evenly bg-csrcblue px-5 sm:px-10 md:h-[96px] md:flex-row md:justify-between md:lg:px-[3.75rem] xl:px-20">
        <div className="flex">
          <Logo />
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:gap-2">
          <div className="order-2 flex items-stretch justify-center md:order-1 md:items-center md:justify-between md:gap-4">
            <SearchBar />
          </div>
          <AuthButtons />
        </div>
      </header>
    </>
  );
}

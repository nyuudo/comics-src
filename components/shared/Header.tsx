import { Logo } from "@/components/shared/Logo";
import SearchBar from "./SearchBar";
import ModalStateChecker from "../feature/ModalStateChecker";
import AuthButtons from "../feature/AuthButtons";

export default function Header() {
  return (
    <>
      <ModalStateChecker />
      <header className="top-0 flex h-[192px] flex-col items-center justify-evenly bg-csrcblue px-5 sm:px-10 md:h-[96px] md:flex-row md:justify-between md:lg:px-[3.75rem] xl:px-20">
        <Logo />
        <div className="flex flex-col gap-2 md:flex-row md:justify-between">
          <div className="order-2 flex items-stretch justify-center md:order-1 md:items-center md:justify-between md:gap-4">
            <SearchBar />
          </div>
          <AuthButtons />
        </div>
      </header>
    </>
  );
}

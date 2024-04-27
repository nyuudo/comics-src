"use client";

import AuthLogIn from "@/components/feature/AuthLogIn";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/modalSlice";
import Link from "next/link";
export default function LogInForm() {
  const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return (
    <main className="flex items-center justify-center py-16">
      <div className="w-[17.3125rem]">
        <h1 className="text-center text-2xl font-bold">Log-In</h1>
        <p className="text-center text-csrcdark">Welcome back to COMICS/src</p>
        <AuthLogIn />
        <div className="flex flex-col gap-3 py-4">
          <Link
            href="#"
            className="text-center text-xs text-csrcblue underline hover:text-csrcdark"
          >
            Forgot Your Password?
          </Link>
          <Link
            href="#"
            onClick={handleOpenModal}
            className="text-center text-xs text-csrcblue underline hover:text-csrcdark"
          >
            Don&apos;t have an account? Please, Sign-Up!
          </Link>
        </div>
      </div>
    </main>
  );
}

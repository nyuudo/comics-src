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
        <h1 className="font-bold text-2xl text-center">Log-In</h1>
        <p className="text-csrcdark text-center">Welcome back to COMICS/src</p>
        <AuthLogIn />
        <div className="flex flex-col py-4 gap-3">
          <Link
            href="#"
            className="underline text-xs text-center text-csrcblue hover:text-csrcdark"
          >
            Forgot Your Password?
          </Link>
          <Link
            href="#"
            onClick={handleOpenModal}
            className="underline text-xs text-center text-csrcblue hover:text-csrcdark"
          >
            Don&apos;t have an account? Please, Sign-Up!
          </Link>
        </div>
      </div>
    </main>
  );
}

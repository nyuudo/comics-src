"use client";

import AuthResetPassword from "./AuthResetPassword";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/modalSlice";
import Link from "next/link";

export default function ResetForm() {
  const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return (
    <main className="flex items-center justify-center py-16">
      <div className="w-69.25">
        <h1 className="text-center text-2xl font-bold">Forgot Password</h1>
        <p className="text-center text-csrcdark">
          Please, enter your email address
        </p>
        <AuthResetPassword />
        <div className="flex flex-col gap-3 py-4">
          <Link
            href="/login"
            className="text-center text-xs text-csrcblue underline hover:text-csrcdark"
          >
            Remember your password? Log-In
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

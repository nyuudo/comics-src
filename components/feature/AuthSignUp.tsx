"use client";

import { signUpWithEmailAndPassword } from "@/lib/authFunctions";
import { TSLogInSchema, logInSchema } from "@/types/comics-src-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function AuthSignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TSLogInSchema>({
    resolver: zodResolver(logInSchema),
  });

  const onSubmit = async (data: TSLogInSchema) => {
    const result = await signUpWithEmailAndPassword(data);
    const { error } = JSON.parse(result);
    if (error) {
      alert("An error occurred. Please try again.");
      reset();
      return;
    }
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-2 py-2"
      role="form"
    >
      <input
        {...register("email")}
        type="email"
        placeholder="Email"
        className="rounded border bg-csrcyellow/50 px-4 py-2 focus:border-csrcblue focus:bg-csrclight/50 focus:outline-none"
      />
      {errors.email && (
        <p className="text-csrcdanger">{`${errors.email.message}`}</p>
      )}

      <input
        {...register("password")}
        type="password"
        placeholder="Password"
        className="rounded border bg-csrcyellow/50 px-4 py-2 focus:border-csrcblue focus:bg-csrclight/50 focus:outline-none"
      />
      {errors.password && (
        <p className="text-csrcdanger">{`${errors.password.message}`}</p>
      )}

      <input
        {...register("confirmPassword")}
        type="password"
        placeholder="Confirm password"
        className="rounded border bg-csrcyellow/50 px-4 py-2 focus:border-csrcblue focus:bg-csrclight/50 focus:outline-none"
      />
      {errors.confirmPassword && (
        <p className="text-csrcdanger">{`${errors.confirmPassword.message}`}</p>
      )}

      <button
        disabled={isSubmitting}
        type="submit"
        className="after: relative inline-block rounded bg-csrcblue py-2 font-bold text-csrclight transition delay-150 duration-300 after:absolute after:-inset-2 after:left-1 after:top-1 after:-z-10 after:block after:bg-mock_offset_02 hover:bg-csrcdark hover:delay-150 hover:after:hidden disabled:bg-csrcdark/50"
      >
        SIGN UP
      </button>
    </form>
  );
}

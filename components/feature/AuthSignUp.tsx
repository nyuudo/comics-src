"use client";

import { signUpWithEmailAndPassword } from "@/lib/authFunctions";
import {
  TSCreateUserSchema,
  createUserSchema,
  AuthSignUpProps,
} from "@/types/comics-src-types";
import { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

export default function AuthSignUp({ userRole }: AuthSignUpProps) {
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TSCreateUserSchema>({
    resolver: zodResolver(createUserSchema),
  });

  const onSubmitHandler: SubmitHandler<TSCreateUserSchema> = async (values) => {
    startTransition(async () => {
      await signUpWithEmailAndPassword(values);
      reset({ password: "" });
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="flex flex-col gap-y-2 py-2"
      role="form"
    >
      <input type="hidden" value={userRole} {...register("userRole")} />
      <input
        {...register("email")}
        type="email"
        placeholder="Email"
        className="rounded border bg-csrcyellow/50 px-4 py-2 focus:border-csrcblue focus:bg-csrclight/50 focus:outline-none"
      />
      {errors.email ? (
        <p className="text-csrcdanger">{errors.email.message}</p>
      ) : null}

      <input
        {...register("password")}
        type="password"
        placeholder="Password"
        className="rounded border bg-csrcyellow/50 px-4 py-2 focus:border-csrcblue focus:bg-csrclight/50 focus:outline-none"
      />
      {errors.password ? (
        <p className="text-csrcdanger">{errors.password.message}</p>
      ) : null}

      <input
        {...register("passwordConfirm")}
        type="password"
        placeholder="Confirm Password"
        className="rounded border bg-csrcyellow/50 px-4 py-2 focus:border-csrcblue focus:bg-csrclight/50 focus:outline-none"
      />
      {errors.passwordConfirm ? (
        <p className="text-csrcdanger">{errors.passwordConfirm.message}</p>
      ) : null}

      <button
        disabled={isPending}
        type="submit"
        className="after: relative inline-block rounded bg-csrcblue py-2 font-bold text-csrclight transition delay-150 duration-300 after:absolute after:-inset-2 after:left-1 after:top-1 after:-z-10 after:block after:bg-mock_offset_02 hover:bg-csrcdark hover:delay-150 hover:after:hidden disabled:bg-csrcdark disabled:text-csrcblue"
      >
        {isPending ? "Signing Up..." : "SIGN UP"}
      </button>
    </form>
  );
}

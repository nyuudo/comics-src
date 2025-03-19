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

  const onSubmitHandler: SubmitHandler<TSCreateUserSchema> = async (data) => {
    startTransition(async () => {
      await signUpWithEmailAndPassword(data);
      reset({ password: "", passwordConfirm: "" });
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
        id="email"
        type="email"
        placeholder="Email"
        className="rounded-sm border bg-csrcyellow/50 px-4 py-2 focus:border-csrcblue focus:bg-csrclight/50 focus:outline-hidden"
      />
      {errors.email ? (
        <p className="text-csrcdanger">{errors.email.message}</p>
      ) : null}

      <input
        {...register("password")}
        id="password"
        type="password"
        name="password"
        placeholder="Password"
        className="rounded-sm border bg-csrcyellow/50 px-4 py-2 focus:border-csrcblue focus:bg-csrclight/50 focus:outline-hidden"
      />
      {errors.password ? (
        <p className="text-csrcdanger">{errors.password.message}</p>
      ) : null}

      <input
        {...register("passwordConfirm")}
        id="passwordConfirm"
        type="password"
        name="passwordConfirm"
        placeholder="Confirm Password"
        className="rounded-sm border bg-csrcyellow/50 px-4 py-2 focus:border-csrcblue focus:bg-csrclight/50 focus:outline-hidden"
      />
      {errors.passwordConfirm ? (
        <p className="text-csrcdanger">{errors.passwordConfirm.message}</p>
      ) : null}

      <button
        disabled={isPending}
        type="submit"
        className="after: relative inline-block rounded-sm bg-csrcblue py-2 font-bold text-csrclight transition delay-150 duration-300 after:absolute after:-inset-2 after:left-1 after:top-1 after:-z-10 after:block after:bg-mock_offset_02 hover:bg-csrcdark hover:delay-150 hover:after:hidden disabled:bg-csrcdark disabled:text-csrcblue"
      >
        {isPending ? "Signing Up..." : "SIGN UP"}
      </button>
    </form>
  );
}

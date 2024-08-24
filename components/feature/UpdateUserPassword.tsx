"use client";

import { useTransition } from "react";
import { updatePassword } from "@/lib/authFunctions";

import {
  TSUpdatePasswordSchema,
  updatePasswordSchema,
} from "@/types/comics-src-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

export default function UpdateUserPassword() {
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TSUpdatePasswordSchema>({
    resolver: zodResolver(updatePasswordSchema),
  });

  const onSubmitHandler: SubmitHandler<TSUpdatePasswordSchema> = async (
    data,
  ) => {
    startTransition(async () => {
      await updatePassword(data);
      reset({ password: "", passwordConfirm: "" });
    });
  };

  return (
    <main className="flex items-center justify-center py-16">
      <div className="w-[17.3125rem]">
        <h1 className="text-center text-2xl font-bold">Update Password</h1>
        <p className="text-center text-csrcdark">
          Please submit your new password
        </p>
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="flex flex-col gap-y-2 py-2"
          role="form"
        >
          <input
            {...register("password")}
            type="password"
            placeholder="New Password"
            className="rounded border bg-csrcyellow/50 px-4 py-2 focus:border-csrcblue focus:bg-csrclight/50 focus:outline-none"
          />
          {errors.password ? (
            <p className="text-csrcdanger">{errors.password.message}</p>
          ) : null}

          <input
            {...register("passwordConfirm")}
            type="password"
            placeholder="Confirm New Password"
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
            {isPending ? "Updating..." : "UPDATE"}
          </button>
          <div className="flex flex-col gap-3 py-4">
            <p className="text-center text-xs text-csrcblue">
              Once updated You can Log-In again
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}

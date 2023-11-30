"use client";

import { TSLogInSchema, logInSchema } from "@/types/comics-src-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
export default function AuthLogIn() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TSLogInSchema>({
    resolver: zodResolver(logInSchema),
  });

  const onSubmit = async (data: TSLogInSchema) => {
    // SUPABASE
    await new Promise((resolve) => setTimeout(resolve, 1000));

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col py-2 gap-y-2"
    >
      <input
        {...register("email")}
        type="email"
        placeholder="Email"
        className="px-4 py-2 border rounded"
      />
      {errors.email && (
        <p className="text-csrcdanger">{`${errors.email.message}`}</p>
      )}

      <input
        {...register("password")}
        type="password"
        placeholder="Password"
        className="px-4 py-2 border rounded"
      />
      {errors.password && (
        <p className="text-csrcdanger">{`${errors.password.message}`}</p>
      )}

      <input
        {...register("confirmPassword")}
        type="password"
        placeholder="Confirm password"
        className="px-4 py-2 border rounded"
      />
      {errors.confirmPassword && (
        <p className="text-csrcdanger">{`${errors.confirmPassword.message}`}</p>
      )}

      <button
        disabled={isSubmitting}
        type="submit"
        className="text-csrclight font-bold bg-csrcblue disabled:bg-csrcdark/50 py-2 rounded transition duration-300 delay-150 hover:delay-150 hover:bg-csrcdark hover:after:hidden after:block after:absolute after:-inset-2 after:top-1 after:left-1 after:bg-mock_offset after:-z-10 after: relative inline-block"
      >
        LOG IN
      </button>
    </form>
  );
}

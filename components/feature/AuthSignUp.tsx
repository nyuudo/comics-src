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
      className="flex flex-col py-2 gap-y-2"
      role="form"
    >
      <input
        {...register("email")}
        type="email"
        placeholder="Email"
        className="px-4 py-2 bg-csrcyellow/50 border focus:bg-csrclight/50 focus:outline-none focus:border-csrcblue rounded"
      />
      {errors.email && (
        <p className="text-csrcdanger">{`${errors.email.message}`}</p>
      )}

      <input
        {...register("password")}
        type="password"
        placeholder="Password"
        className="px-4 py-2 bg-csrcyellow/50 border focus:bg-csrclight/50 focus:outline-none focus:border-csrcblue rounded"
      />
      {errors.password && (
        <p className="text-csrcdanger">{`${errors.password.message}`}</p>
      )}

      <input
        {...register("confirmPassword")}
        type="password"
        placeholder="Confirm password"
        className="px-4 py-2 bg-csrcyellow/50 border focus:bg-csrclight/50 focus:outline-none focus:border-csrcblue rounded"
      />
      {errors.confirmPassword && (
        <p className="text-csrcdanger">{`${errors.confirmPassword.message}`}</p>
      )}

      <button
        disabled={isSubmitting}
        type="submit"
        className="text-csrclight font-bold bg-csrcblue disabled:bg-csrcdark/50 py-2 rounded transition duration-300 delay-150 hover:delay-150 hover:bg-csrcdark hover:after:hidden after:block after:absolute after:-inset-2 after:top-1 after:left-1 after:bg-mock_offset_02 after:-z-10 after: relative inline-block"
      >
        SIGN UP
      </button>
    </form>
  );
}

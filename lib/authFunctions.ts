"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/server";
import {
  TSCreateUserSchema,
  TSLogInSchema,
  TSResetPasswordSchema,
  TSUpdatePasswordSchema,
} from "@/types/comics-src-types";

// SIGN-UP function with SSR

export async function signUpWithEmailAndPassword(data: TSCreateUserSchema) {
  const supabase = createClient();
  const { error } = await (await supabase).auth.signUp({
    email: data.email,
    password: data.password,
    options: { data: { user_role: data.userRole } },
  });
  if (error) {
    redirect("/error");
  }
  revalidatePath("/", "layout");
  redirect("/confirm/confirm-your-email");
}

// LOG-IN function with SSR

export async function signInWithEmailAndPassword(data: TSLogInSchema) {
  const supabase = createClient();
  const { error } = await (await supabase).auth.signInWithPassword(data);

  if (error) {
    redirect("/error");
  }
  revalidatePath("/", "layout");
  redirect("/");
}

// LOG-OUT function
export async function logOutUser() {
  try {
    const supabase = createClient();
    const result = await (await supabase).auth.signOut();
    return result;
  } catch (error) {
    return { error };
  }
}

// RESET PASSWORD function with SSR
export async function resetPassword(data: TSResetPasswordSchema) {
  const supabase = createClient();
  const { error } = await (await supabase).auth.resetPasswordForEmail(data.email);

  if (error) {
    redirect("/error");
  }
  revalidatePath("/", "layout");
  redirect("/confirm/password-reset");
}

// UPDATE USER PASSWORD function

export async function updatePassword(data: TSUpdatePasswordSchema) {
  const supabase = createClient();
  const { error } = await (await supabase).auth.updateUser(data);
  if (error) {
    redirect("/error");
  }
  redirect("/");
}

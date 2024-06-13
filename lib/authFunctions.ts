"use server";

import { createClient } from "@/utils/server";
import {
  TSCreateUserSchema,
  TSLogInSchema,
  TSResetPasswordSchema,
} from "@/types/comics-src-types";

export async function signUpWithEmailAndPassword({
  data,
  emailRedirectTo,
}: {
  data: TSCreateUserSchema;
  emailRedirectTo?: string;
}) {
  try {
    const supabase = createClient();
    const result = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        emailRedirectTo,
      },
    });
    return JSON.stringify(result);
  } catch (error) {
    return JSON.stringify({ error });
  }
}

export async function signInWithEmailAndPassword(data: TSLogInSchema) {
  try {
    const supabase = createClient();
    const result = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });
    return JSON.stringify(result);
  } catch (error) {
    return JSON.stringify({ error });
  }
}

export async function logOutUser() {
  try {
    const supabase = createClient();
    const result = await supabase.auth.signOut();
    return result;
  } catch (error) {
    return { error };
  }
}

export async function resetPassword(data: TSResetPasswordSchema) {
  try {
    const supabase = createClient();
    const result = await supabase.auth.resetPasswordForEmail(data.email, {
      redirectTo: "/confirm",
    });
    return JSON.stringify(result);
  } catch (error) {
    return JSON.stringify({ error });
  }
}

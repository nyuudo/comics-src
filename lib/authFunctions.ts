"use server";

import supabaseServerClient from "@/database/server";

export async function signUpWithEmailAndPassword(data: {
  email: string;
  password: string;
  confirmPassword: string;
}) {
  const supabase = await supabaseServerClient();
  const result = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
  });
  return JSON.stringify(result);
}

export async function signInWithEmailAndPassword(data: {
  email: string;
  password: string;
}) {
  const supabase = await supabaseServerClient();
  const result = await supabase.auth.signInWithPassword(data);
  return JSON.stringify(result);
}

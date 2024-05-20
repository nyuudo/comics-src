"use server";

import createSupabaseServerClient from "@/database/server";

export default async function getUserSession() {
  const supabase = await createSupabaseServerClient();
  return supabase.auth.getSession();
}

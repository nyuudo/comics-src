import { redirect } from "next/navigation";
import { createClient } from "@/utils/server";

export default async function PublisherAccount() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return <p>Hello {data.user.email}</p>;
}

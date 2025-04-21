import { redirect } from "next/navigation";
import { createClient } from "@/utils/server";
import LogInForm from "@/components/feature/LoginForm";

export const metadata = {
  title: "LogIn",
};
export default async function LogIn() {
  const supabase = createClient();
  const { data, error } = await (await supabase).auth.getUser();
  if (!error && data?.user) {
    redirect(`/dashboard/${data.user?.user_metadata.user_role}/account`);
  }

  return <LogInForm />;
}

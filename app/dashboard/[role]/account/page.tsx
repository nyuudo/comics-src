import AccountForm from "./account-form";
import { createClient } from "@/utils/server";
export default async function MyAccount() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return <AccountForm user={user} />;
}

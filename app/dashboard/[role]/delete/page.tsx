import DeleteForm from "./delete-form";
import { createClient } from "@/utils/server";
export default async function DeleteAccount() {
  const supabase = createClient();
  const {
    data: { user },
  } = await (await supabase).auth.getUser();
  return <DeleteForm user={user} />;
}

import PublicationsForm from "./publications-form";
import { createClient } from "@/utils/server";
export default async function Publications() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return <PublicationsForm user={user} />;
}

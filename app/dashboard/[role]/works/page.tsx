import WorksForm from "./works-form";
import { createClient } from "@/utils/server";
export default async function MyWorks() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return <WorksForm user={user} />;
}

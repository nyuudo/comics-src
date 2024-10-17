import CommunityForm from "./community-form";
import { createClient } from "@/utils/server";
export default async function MyCommunity() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return <CommunityForm user={user} />;
}

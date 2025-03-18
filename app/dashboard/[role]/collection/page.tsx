import CollectionForm from "./collection-form";
import { createClient } from "@/utils/server";

export default async function MyCollection() {
  const supabase = createClient();
  const {
    data: { user },
  } = await (await supabase).auth.getUser();

  return <CollectionForm user={user} />;
}

import { createClient } from "@/utils/server";

export default async function getUserNames() {
  const supabase = createClient();
  const { data: authData, error: authError } = await supabase.auth.getUser();

  if (authError) {
    console.error("Error fetching user:", authError);
    return null;
  }

  const userId = authData.user?.id;

  if (!userId) {
    console.error("User ID not found");
    return null;
  }

  const { data: authorData, error: authorError } = await supabase
    .from("Author")
    .select("author_username")
    .eq("author_id", userId)
    .single();

  if (authorError && authorError.code !== "PGRST116") {
    console.error("Error fetching author:", authorError);
    return null;
  }

  if (authorData) {
    return { role: "author", username: authorData.author_username };
  }

  const { data: fanData, error: fanError } = await supabase
    .from("Fan")
    .select("fan_username")
    .eq("fan_id", userId)
    .single();

  if (fanError && fanError.code !== "PGRST116") {
    console.error("Error fetching fan:", fanError);
    return null;
  }

  if (fanData) {
    return { role: "fan", username: fanData.fan_username };
  }

  const { data: publisherData, error: publisherError } = await supabase
    .from("Publisher")
    .select("publisher_name")
    .eq("publisher_id", userId)
    .single();

  if (publisherError && publisherError.code !== "PGRST116") {
    console.error("Error fetching publisher:", publisherError);
    return null;
  }

  if (publisherData) {
    return { role: "publisher", name: publisherData.publisher_name };
  }
  return null;
}

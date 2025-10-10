import client from "@/utils/client";

export default async function getUserNames(userName: string) {
  // Query Fan table
  const { data: fanData, error: fanError } = await client
    .from("Fan")
    .select("fan_username, fan_profileImage, fan_bio, fan_collection")
    .eq("fan_username", userName)
    .single();

  // Query Author table
  const { data: authorData, error: authorError } = await client
    .from("Author")
    .select(
      "author_username, author_profileImage, author_bio, author_collection",
    )
    .eq("author_username", userName)
    .single();

  if (fanError) {
    console.error(fanError);
  }
  if (authorError) {
    console.error(authorError);
  }

  return {
    fan: fanData || null,
    author: authorData || null,
  };
}

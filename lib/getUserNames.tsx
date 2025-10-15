import client from "@/utils/client";

export default async function getUserNames(userName: string) {
  const { data: fanUserData, error: fanError } = await client
    .from("Fan")
    .select("*")
    .eq("fan_username", userName)
    .maybeSingle();

  const { data: authorUserData, error: authorError } = await client
    .from("Author")
    .select("*")
    .eq("author_username", userName)
    .maybeSingle();

  if (fanError || authorError) {
    const errors = [];
    if (fanError) {
      console.error(fanError);
      errors.push(fanError);
    }
    if (authorError) {
      console.error(authorError);
      errors.push(authorError);
    }
    throw new Error(`Failed to retrieve user data: ${errors.join(", ")}`);
  }

  return {
    fan: fanUserData || null,
    author: authorUserData || null,
  };
}

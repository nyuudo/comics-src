/* To retrieve all webComics with an ID filter */
import client from "@/utils/client";

export default async function getWebComicsId(webcomicId: string) {
  const { data, error } = await client
    .from("Authors WebComics")
    .select()
    .eq("webcomic_id", webcomicId);
  if (error) {
    console.error(error);
    return undefined;
  }
  return data;
}

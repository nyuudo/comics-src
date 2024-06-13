/* To retrieve all webComics without filters */
import client from "@/utils/client";

export default async function getWebComics() {
  const { data, error } = await client
    .from("Authors WebComics")
    .select(
      `webcomic_id, webcomic_title, webcomic_cover, webcomic_description, webcomic_year, author:Author(author_username)`,
    )
    .limit(10);
  if (error) {
    console.error(error);
    return undefined;
  }
  return data;
}

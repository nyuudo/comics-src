import client from "@/database/client";

export default async function getWebComicsId(webcomicId: string) {
  const { data } = await client
    .from("Authors WebComics")
    .select()
    .eq("webcomic_id", webcomicId);
  if (!data) undefined;
  return data;
}

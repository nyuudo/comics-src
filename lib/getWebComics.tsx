import client from "@/database/client";

export default async function getWebComics() {
  const { data } = await client.from("Authors WebComics").select();
  if (!data) undefined;
  return data;
}

import client from "@/database/client";
export default async function getPublishersProduct() {
  const { data } = await client.from("Publishers Product").select();
  if (!data) undefined;
  return data;
}

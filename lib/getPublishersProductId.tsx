import client from "@/database/client";

export default async function getPublishersProductId(productId: string) {
  const { data } = await client
    .from("Publishers Product")
    .select()
    .eq("product_id", productId);
  if (!data) undefined;
  return data;
}

import client from "@/utils/client";

export default async function insertCollection(
  collectionId: string,
  fan_collector: string,
  collected_product: number | null,
) {
  const { data, error } = await client
    .from("Fans Collection")
    .insert([
      {
        collectionId: collectionId,
        fan_collector: fan_collector,
        collected_product: collected_product,
      },
    ])
    .select();
  if (error) {
    console.error("Error inserting data:", error);
    return null;
  }
  return data;
}

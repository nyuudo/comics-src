/* To retrieve all Comics with an ID filter */
import client from "@/utils/client";

export default async function getPublishersProductId(productId: number) {
  const { data, error } = await client
    .from("Publishers Product")
    .select(
      `product_id, product_title, product_description, product_cover, product_year, genre:Genres(genre_name), publisher:Publisher(publisher_name)`,
    )
    .eq("product_id", productId);
  if (error) {
    console.error(error);
    return undefined;
  }
  return data;
}

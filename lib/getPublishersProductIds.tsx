/* To retrieve all Comics with several Ids filter */
import client from "@/utils/client";

export default async function getPublishersProductIds(productIds: number[]) {
  const { data, error } = await client
    .from("Publishers Product")
    .select(
      `product_id, product_title, product_description, product_cover, product_year, genre:Genres(genre_name), publisher:Publisher(publisher_name)`,
    )
    .in("product_id", productIds);
  if (error) {
    console.error(error);
    return undefined;
  }
  return data;
}

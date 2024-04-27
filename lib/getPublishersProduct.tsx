/* To retrieve all Comics without filters */
import client from "@/database/client";
export default async function getPublishersProduct() {
  const { data, error } = await client
    .from("Publishers Product")
    .select(
      `product_id, product_title, product_description, product_cover, product_year, genre:Genres(genre_name), publisher:Publisher(publisher_name)`,
    )
    .limit(10);
  if (error) {
    console.error(error);
    return undefined;
  }
  return data;
}

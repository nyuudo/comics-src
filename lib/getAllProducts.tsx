import client from "@/database/client";

export default async function getAllProducts() {
  const { data: publishersData } = await client
    .from("Publishers Product")
    .select();
  const { data: webComicsData } = await client
    .from("Authors WebComics")
    .select();
  const allProducts = {
    publishersProducts: publishersData,
    authorsWebComics: webComicsData,
  };

  return allProducts;
}

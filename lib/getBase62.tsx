import { getPlaiceholder } from "plaiceholder";

/*   const dataUrl = await client
    .from("Publishers Product")
    .select("product_cover");

  const imageUrl = dataUrl || "";
  const updateImage = await getBase64(imageUrl); 
  before:h-[325px] before:md:h-[520px] before:xs:px-5 before:sm:px-10 before:md:lg:px-[3.75rem] before:xl:px-20
  */

export default async function getBase64(imageUrl: string) {
  try {
    const res = await fetch(imageUrl);

    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
    }

    const buffer = await res.arrayBuffer();

    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    return base64;
  } catch (e) {
    if (e instanceof Error) console.log(e.stack);
  }
}

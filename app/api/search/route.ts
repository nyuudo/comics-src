import { NextResponse } from "next/server";
import client from "@/database/client";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const product_title = searchParams.get("product_title");
    const { data } = await client.from("Publishers Product").select();
    const comics = data?.filter((comic) =>
      comic.product_title
        .toLowerCase()
        .includes(product_title?.toLowerCase() ?? "")
    );
    return NextResponse.json(comics?.slice(0, 10));
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}

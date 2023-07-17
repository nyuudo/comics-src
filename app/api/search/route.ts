import { NextResponse } from "next/server";
import comics_source from "@/data/comics_source.json";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title");
  const comicsSourceData = comics_source.filter((comic) =>
    comic.title.toLowerCase().includes(title?.toLowerCase() ?? "")
  );
  return NextResponse.json(comicsSourceData.slice(0, 10));
}

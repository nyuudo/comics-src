import { NextResponse, NextRequest } from "next/server";
export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  return res;
}

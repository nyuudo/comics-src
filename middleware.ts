import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { Database } from "./types/database";
import type { NextRequest } from "next/server";

const restrictedPaths = [
  "/fan-account",
  "/fan-dashboard",
  "/author-account",
  "/author-dashboard",
  "/publisher-account",
  "/publisher-dashboard",
];
export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const pathname = req.nextUrl.pathname;
  const supabase = createMiddlewareClient<Database>({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session && restrictedPaths.includes(pathname)) {
    const url = new URL(req.url);
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return res;
}

export const config = {
  matcher: restrictedPaths,
};

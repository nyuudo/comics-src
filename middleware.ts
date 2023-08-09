import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // if user is signed in and the current path is / redirect the user to /account
  if (user && req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/account", req.url));
  }

  // if user is not signed in and the current path is not / redirect the user to /
  if (!user && req.nextUrl.pathname !== "/") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return res;
}

export const config = {
  matcher: ["/", "/account"],
};

/* OLD VERSION with NextAuth

import { NextResponse } from "next/server";
import { withAuth, NextRequestWithAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(request: NextRequestWithAuth) {
    // check if the Author is logged in
    if (
      request.nextUrl.pathname.startsWith("/author") &&
      request.nextauth.token?.role !== "author"
    ) {
      return NextResponse.rewrite(new URL("/denied", request.url));
    }
    // check if the Fan is logged in
    if (
      request.nextUrl.pathname.startsWith("/fan") &&
      request.nextauth.token?.role !== "fan"
    ) {
      return NextResponse.rewrite(new URL("/denied", request.url));
    }
    // check if the Publisher is logged in
    if (
      request.nextUrl.pathname.startsWith("/publisher") &&
      request.nextauth.token?.role !== "publisher"
    ) {
      return NextResponse.rewrite(new URL("/denied", request.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

// pages forbbiden to users not logged in
export const config = {
  matcher: [
    "/author-welcome",
    "/author-dashboard",
    "/fan-welcome",
    "/fan-dashboard",
    "/publisher-welcome",
    "/publisher-dashboard",
  ],
};
 */

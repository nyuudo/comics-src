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

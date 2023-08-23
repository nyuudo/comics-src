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
    return NextResponse.redirect(new URL("/author-account", req.url));
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

/* export async function middleware(req: NextRequest, ev: HTTPEvent) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // if user is signed in and the current path is / redirect the user to the appropriate account page based on their role
  if (user && req.nextUrl.pathname === "/") {
    // Get the user's role from your authentication method
    const userRole = getUserRole(); // Replace with your own logic to fetch the user's role

    let accountPage = "/account"; // Default account page

    // Conditionally set the account page based on the user's role
    if (userRole === "author") {
      accountPage = "/author-account";
    } else if (userRole === "fan") {
      accountPage = "/fan-account";
    } else if (userRole === "publisher") {
      accountPage = "/publisher-account";
    }

    return NextResponse.redirect(new URL(accountPage, req.url));
  }

  // if user is not signed in and the current path is not / redirect the user to /
  if (!user && req.nextUrl.pathname !== "/") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return res;
}

export const config = {
  matcher: ["/", "/author-account", "/fan-account", "/publisher-account"],
};
 */

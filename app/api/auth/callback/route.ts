import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const supabase = createRouteHandlerClient({ cookies });
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  if (code) {
    await supabase.auth.exchangeCodeForSession(code);
  }

  return NextResponse.redirect(new URL("/author-account", req.url));
}

/*   //Get user's role from authentication method
  const userRole = getUserRole(); fetch user's role 

  let accountPage = "/account"; // Default account page

  // Conditionally set account page based on the user's role
  if (userRole === "author") {
    accountPage = "/author-account";
  } else if (userRole === "fan") {
    accountPage = "/fan-account";
  } else if (userRole === "publisher") {
    accountPage = "/publisher-account";
  }

  return NextResponse.redirect(new URL(accountPage, req.url));
} */

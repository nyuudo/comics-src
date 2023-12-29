import { NextResponse, NextRequest } from "next/server";
export async function middleware(request: NextRequest): Promise<NextResponse> {
  let response = NextResponse.next({
    request: { headers: request.headers },
  });
  return response;
}

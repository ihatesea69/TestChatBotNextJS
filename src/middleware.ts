import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Paths that require authentication
  const protectedPaths = ["/dashboard"];
  const isPathProtected = protectedPaths.some((path) =>
    pathname.startsWith(path)
  );

  // If not a protected path, don't do anything
  if (!isPathProtected) {
    return NextResponse.next();
  }

  // Check if user is authenticated
  const token = await getToken({ req: request });

  // If not authenticated, redirect to login
  if (!token) {
    const url = new URL(`/login`, request.url);
    url.searchParams.set("callbackUrl", encodeURI(request.url));
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

import { NextResponse } from "next/server";

export const middleware = (req) => {
  const token = req.cookies.get("token")?.value || "";
  const path = req.nextUrl.pathname;
  const isPublic = path === "/login" || path === "/signup";
  console.log(path);
  if (isPublic && token) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  if (!isPublic && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
};

export const config = {
  matcher: ["/", "/login", "/post/:path*", "/signup"],
};

import { NextRequest, NextResponse } from "next/server";

const ADMIN_PASSWORD = "pass1234";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const password = String(formData.get("password") ?? "");

  if (password !== ADMIN_PASSWORD) {
    return NextResponse.redirect(new URL("/admin/login?error=1", request.url));
  }

  const response = NextResponse.redirect(new URL("/admin", request.url));
  response.cookies.set("admin_auth", "1", {
    httpOnly: true,
    sameSite: "lax",
    path: "/"
  });
  return response;
}


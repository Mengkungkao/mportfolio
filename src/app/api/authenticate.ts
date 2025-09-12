// app/api/authenticate/route.ts
import { NextRequest, NextResponse } from "next/server";
import * as cookie from "cookie";

export async function POST(req: NextRequest) {
  const { password } = await req.json();
  const correctPassword = process.env.PAGE_ACCESS_PASSWORD;

  if (!correctPassword) return NextResponse.json({ message: "Server error" }, { status: 500 });

  if (password === correctPassword) {
    const response = NextResponse.json({ success: true });
    response.headers.set(
      "Set-Cookie",
      cookie.serialize("authToken", "authenticated", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 3600,
        sameSite: "strict",
        path: "/",
      }),
    );
    return response;
  }

  return NextResponse.json({ message: "Incorrect password" }, { status: 401 });
}
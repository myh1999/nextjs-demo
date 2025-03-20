import { NextResponse, type NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  return NextResponse.next();
}

// 配置此中间件应用于所有路由，除了静态资源
export const config = {
  matcher: [
    "/((?!_next|static|favicon.ico|.*.(?:css|js|map|json|webmanifest|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|ico)$).*)",
  ],
};

// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const horaAtual = new Date().getHours();

  // Se for antes das 8h ou depois das 22h
  if (request.nextUrl.pathname.startsWith("/produtos")) {
    console.log('Vc está acessando a rota de produtos')
    if (horaAtual < 8 || horaAtual >= 22) {
      return NextResponse.redirect(new URL("/fechado", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/produtos/:path*"],
};

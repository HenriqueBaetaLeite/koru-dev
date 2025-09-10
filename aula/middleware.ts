import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const horaAtual = new Date().getHours();
  
  if(request.nextUrl.pathname.startsWith("/produtos")) {
    if(horaAtual < 8 || horaAtual >= 21) {
      return NextResponse.redirect(new URL("/fechada", request.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/produtos/:path*"],
};

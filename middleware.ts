import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  // Simple demonstration: block /matches and /profile/:id contact if no "x-paid" header
  const url = req.nextUrl.clone()
  if (url.pathname.startsWith('/matches') || url.pathname.startsWith('/profile')) {
    const paid = req.headers.get('x-paid') === '1'
    if (!paid) {
      // redirect to pricing
      return NextResponse.redirect(new URL('/pricing', req.url))
    }
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/matches/:path*', '/profile/:path*']
}

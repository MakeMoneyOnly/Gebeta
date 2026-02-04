import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // For now, this is a placeholder for actual auth logic
    // In a real app, you would check for a session/token here
    const isAuthenticated = false;

    // Protected routes
    const protectedPaths = ['/app', '/restaurant', '/admin'];

    const isProtectedPath = protectedPaths.some((path) =>
        pathname.startsWith(path)
    );

    if (isProtectedPath && !isAuthenticated) {
        // Redirect unauthenticated users to login
        // return NextResponse.redirect(new URL('/auth/login', request.url));

        // For demo purposes, we'll just allow it or log a warning
        // In production, uncomment the line above
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};

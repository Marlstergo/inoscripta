import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    // Clone the request headers
    const requestHeaders = new Headers(request.headers)
    
    // Add pathname to headers
    requestHeaders.set('x-pathname', request.nextUrl.pathname)

    // Return response with modified headers
    return NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    })
} 
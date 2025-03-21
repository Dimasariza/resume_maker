import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    // console.log(process.env.NEXT_PUBLIC_GEMINI_API_KEY)
    return NextResponse.redirect(new URL('/home', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
    matcher: '/',
}
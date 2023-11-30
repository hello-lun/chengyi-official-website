import { NextResponse } from 'next/server';

const { NEXT_PUBLIC_PROXY_API_HOST, NEXT_PUBLIC_PROXY_API_PORT } = process.env;
const apiProxyFlag = '/req';

export function middleware(request) {
  const url = request.nextUrl.clone();
  if (url.pathname.startsWith(apiProxyFlag)) {
    url.hostname = NEXT_PUBLIC_PROXY_API_HOST;
    url.port = NEXT_PUBLIC_PROXY_API_PORT;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

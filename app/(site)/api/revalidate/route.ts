import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
 
 
export async function GET(request: NextRequest) {
  console.log(request)
  const path = request.nextUrl.searchParams.get('/team') || '/'
  revalidatePath(path)
  const gallery = request.nextUrl.searchParams.get('/gallery') || '/'
  revalidatePath(gallery)
  return NextResponse.json({ revalidated: true, now: Date.now() })
}
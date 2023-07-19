
import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
 
export async function GET(request: NextRequest) {
  const page = request.nextUrl.searchParams.get('/page') || '/'
  revalidatePath(page)
  const team = request.nextUrl.searchParams.get('/team') || '/'
  revalidatePath(team)
  const project = request.nextUrl.searchParams.get('/team') || '/'
  revalidatePath(project)
  return NextResponse.json({ revalidated: true, now: Date.now() })
 
}

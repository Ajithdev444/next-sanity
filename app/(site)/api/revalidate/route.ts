// import { NextApiResponse } from "next";

// export default async function handler( res: NextApiResponse) {
//     try {

//         await res.revalidate('/team');
//         return res.json({ revalidated: true });

//     } catch (err) {
//         return res.status(500).send('Error revalidating');
//     }
// }
import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
 
export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get('/team') || '/'
  revalidatePath(path)
  return NextResponse.json({ revalidated: true, now: Date.now() })
}
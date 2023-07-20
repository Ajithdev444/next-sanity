import { NextApiResponse } from "next";

export default async function handler( res: NextApiResponse) {
    try {

        await res.revalidate('/team');
        return res.json({ revalidated: true });

    } catch (err) {
        return res.status(500).send('Error revalidating');
    }
}
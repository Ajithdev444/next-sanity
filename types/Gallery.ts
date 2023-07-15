import { PortableTextBlock } from "sanity"

export type Gallery = {
    _id : string,
    _createdAt: string,
    name : string,
    slug: string,
    image: string,
    description: PortableTextBlock[],
}
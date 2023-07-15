import { PortableTextBlock } from "sanity";

export type Team = {
    _id: string,
    _createdAt: string,
    name: string,
    number: number,
    slug: string,
    location: string,
    department: string,
    qualifications: PortableTextBlock[],
    aboutthejob: PortableTextBlock[],
    responsibilities: PortableTextBlock[],
}
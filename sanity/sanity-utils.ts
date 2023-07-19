import { Page } from "@/types/Page";
import { Project } from "@/types/Project";
import { Gallery } from "@/types/Gallery";
import { Team } from "@/types/Team";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config"


export async function getProjects():Promise<Project[]> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "project"]{

            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
        }`
    )
}

export async function getProject(slug: string):Promise<Project> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{

            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`,
        {slug}
    )
    
}

export async function getPages(): Promise<Page[]>{
    return createClient(clientConfig).fetch(
        groq`*[_type == "page"]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
        }`,
    )
}

export async function getPage(slug: string): Promise<Page>{
    return createClient(clientConfig).fetch(
        groq`*[_type == "page" && slug.current == $slug][0] {

            _id,
            _createdAt,
            title,
            "slug": slug.current,
            content,
            subtitle
        }`,
        {slug}
    )
}

export async function getGallerys():Promise<Gallery[]> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "gallery"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
        }`
    )
}

export async function getGallery(slug : string): Promise<Gallery>{
    return createClient(clientConfig).fetch(
        groq`*[_type == "gallery" && slug.current == $slug][0] {

            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            description,
        }`,
        {slug}
    )
}

export async function getTeams(): Promise<Team[]>{

    return createClient(clientConfig).fetch(
        groq`*[_type == "team"]{
            
            _id,
            _createdAt,
            name,
            number,
            "slug": slug.current,
            location,
            department,
        }`, { next: { tags: ['team'] }}
    )
}
export async function getTeam(slug: string): Promise<Team>{
    return createClient(clientConfig).fetch(
        groq`*[_type == "team" && slug.current == $slug][0] {

            _id,
            _createdAt,
            name,
            "slug": slug.current,
            qualifications,
            aboutthejob,
            responsibilities,
        }`,
        {slug}
    )
}
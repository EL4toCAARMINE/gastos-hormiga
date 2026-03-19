import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders'; 

const games = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/games" }),
    schema: z.object({
        title: z.string(),
        genero: z.string(),
        plataforma: z.string(),
        personajes: z.string(),
        modo: z.string(),
        escenarios: z.string(),
        controles: z.string(),
        actualizaciones: z.string(),
        lanzamiento: z.string(),
        portadaImg: z.string(),
        img: z.string(),
        url: z.string().url(),
        logo: z.string()
    })
})

export const collections = { games };
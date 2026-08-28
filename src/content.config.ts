import { defineCollection } from "astro:content"
import { z } from "astro/zod"
import { glob } from "astro/loaders"

const blog = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/blog" }),
	schema: z.object({
		title: z.string(),
		date: z.string(),
		summary: z.string(),
		image: z.optional(z.string())
	})
})

const projects = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/projects" }),
	schema: z.object({
		title: z.string(),
		date: z.string(),
		summary: z.string(),
		image: z.optional(z.string())
	})
})

export const collections = {
	blog,
	projects
}

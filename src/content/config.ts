import { z, defineCollection } from "astro:content"

const blog = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		date: z.string(),
		summary: z.string()
	})
})

const projects = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		date: z.string(),
		summary: z.string()
	})
})

export const collections = {
	blog,
	projects
}

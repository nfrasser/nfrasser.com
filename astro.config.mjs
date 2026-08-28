import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
	integrations: [],
	redirects: {
		"/free-palestine": "/blog/free-palestine/",
		"/qr": "/photos/"
	},
	vite: {
		ssr: {
			noExternal: ["milligram"]
		}
	}
})

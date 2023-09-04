import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
	experimental: {
		assets: true
	},
	integrations: [],
	vite: {
		ssr: {
			noExternal: ["milligram"]
		}
	}
})

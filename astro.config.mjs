import { defineConfig } from "astro/config"
import netlify from "@astrojs/netlify/functions"

// https://astro.build/config
export default defineConfig({
	integrations: [],
	vite: {
		ssr: {
			noExternal: ["milligram"]
		}
	},
	output: "server",
	adapter: netlify()
})

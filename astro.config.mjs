import { defineConfig } from "astro/config"

import cloudflare from "@astrojs/cloudflare"

// https://astro.build/config
export default defineConfig({
	integrations: [],
	redirects: {
		"/free-palestine": "/blog/free-palestine/"
	},
	vite: {
		ssr: {
			noExternal: ["milligram"]
		}
	},

	adapter: cloudflare()
})

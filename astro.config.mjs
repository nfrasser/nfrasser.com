import { defineConfig } from "astro/config"

import cloudflare from "@astrojs/cloudflare"

// https://astro.build/config
export default defineConfig({
	integrations: [],

	vite: {
		ssr: {
			noExternal: ["milligram"]
		}
	},

	adapter: cloudflare()
})

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import netlify from '@sveltejs/adapter-netlify'

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
    preprocess: vitePreprocess(),
    kit: {
        adapter: netlify()
    }
}

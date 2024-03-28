import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import autoPreprocess from 'svelte-preprocess';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        svelte({
            preprocess: autoPreprocess()
        })
    ],
    resolve: {
        alias: [
            { find: '@scss', replacement: '/src/assets/scss' },
            { find: '@js', replacement: '/src/assets/js' },
            { find: '@img', replacement: '/src/assets/images' },
            { find: '@lib', replacement: '/src/lib' },
        ]
    }
})

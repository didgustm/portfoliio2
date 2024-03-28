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
    build: {
        outDir: 'build',
        rollupOptions: {
            output: {
                dir: 'build',
                assetFileNames: (assetInfo) => {
					let extType = assetInfo.name.split('.').at(1);
					if(/css/i.test(extType)) {
						extType = 'css';
					} else if(/png|jpe?g|svg|webp/i.test(extType)){
						extType = 'images';
					} else if(/woff|woff2/i.test(extType)){
						extType = 'fonts'
					}
					return `assets/${extType}/[name].[hash].[extname]`;
				},
				chunkFileNames: 'assets/js/[name].[hash].js',
				entryFileNames: 'assets/js/[name].[hash].js'
            }
        }
    },
    resolve: {
        alias: [
            { find: '@scss', replacement: '/src/assets/scss' },
            { find: '@js', replacement: '/src/assets/js' },
            { find: '@img', replacement: '/src/assets/images' },
            { find: '@lib', replacement: '/src/lib' },
        ]
    }
})

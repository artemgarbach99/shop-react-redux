import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react()
		// viteStaticCopy({
		// 	targets: [
		// 		{
		// 			src: 'src/assets/images/*',
		// 			dest: 'assets/images'
		// 		}
		// 	]
		// })
	],
	base: '/shop-react-redux/',
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler' // or "modern"
			}
		}
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@components': path.resolve(__dirname, './src/components'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@layouts': path.resolve(__dirname, './src/layouts')
		}
	}
})

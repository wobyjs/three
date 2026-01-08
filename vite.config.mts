import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
// import dts from 'vite-plugin-dts'

export default defineConfig({
    server: {
        host: true,
        port: 5173
    },
    build: {
        minify: false,
        lib: {
            entry: {
                index: './code/lib/index.tsx',
                'jsx-runtime': './code/lib/jsx/jsx-runtime.tsx',
                'jsx-dev-runtime': './code/lib/jsx/jsx-dev-runtime.tsx'
            },
            name: '@woby/three',
            formats: ['es'],
        },
        sourcemap: true,
        rollupOptions: {
            external: ['woby', 'oby', 'woby', 'three', /^three/],
            output: {
                globals: {
                    'woby': 'woby',
                    'oby': 'oby',
                    'three': 'three',
                },
                entryFileNames: '[name].es.js',
                chunkFileNames: '[name]-[hash].es.js'
            }
        },
    },
    esbuild: {
        jsx: 'automatic',
    },
    plugins: [
        // dts({ entryRoot: './src', outputDir: './dist/types', exclude: './nodes_modules' })
        tailwindcss(),
    ],
    resolve: {
        alias: {
            '@woby/three/jsx-runtime': path.resolve(__dirname, 'code/lib/jsx/jsx-runtime.tsx'),
            '@woby/three/jsx-dev-runtime': path.resolve(__dirname, 'code/lib/jsx/jsx-dev-runtime.tsx'),
        },
    },
})
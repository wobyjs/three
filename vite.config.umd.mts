import { defineConfig } from 'vite'
// import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
    build: {
        minify: false,
        lib: {
            entry: './code/lib/index.tsx',
            name: 'wobyThree',
            formats: ['umd'],
            fileName: 'woby3'
        },
        sourcemap: true,
        rollupOptions: {
            external: ['woby', 'oby', 'three'],
            output: {
                globals: {
                    'woby': 'woby',
                    'oby': 'oby',
                    'three': 'three'
                }
            }
        },
        emptyOutDir: false
    },
    esbuild: {
        jsx: 'automatic',
    },
    plugins: [
        // tailwindcss(),
    ],
    resolve: {
        alias: {
            '@woby/three/jsx-runtime': path.resolve(__dirname, 'code/lib/jsx/jsx-runtime.tsx'),
            '@woby/three/jsx-dev-runtime': path.resolve(__dirname, 'code/lib/jsx/jsx-dev-runtime.tsx'),
        },
    },
})
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    esbuild: {},
    define: {
        'process.env': process.env,
    },
    plugins: [react()],
    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, 'src') },
            {
                find: '@api',
                replacement: path.resolve(__dirname, 'src/api'),
            },
            {
                find: '@contexts',
                replacement: path.resolve(__dirname, 'src/contexts'),
            },
            {
                find: '@assets',
                replacement: path.resolve(__dirname, 'src/assets'),
            },
            {
                find: '@components',
                replacement: path.resolve(__dirname, 'src/components'),
            },
            {
                find: '@constants',
                replacement: path.resolve(__dirname, 'src/constants'),
            },
            {
                find: '@hooks',
                replacement: path.resolve(__dirname, 'src/hooks'),
            },
            {
                find: '@quires',
                replacement: path.resolve(__dirname, 'src/hooks/quires'),
            },
            {
                find: '@pages',
                replacement: path.resolve(__dirname, 'src/pages'),
            },
            {
                find: '@styles',
                replacement: path.resolve(__dirname, 'src/styles'),
            },
            {
                find: '@utils',
                replacement: path.resolve(__dirname, 'src/utils'),
            },
        ],
    },
    build: {
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
    },
    server: {
        host: true,
        proxy: {
            '/api': {
                target: 'http://34.105.3.237/api',
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
});

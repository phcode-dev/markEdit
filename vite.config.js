import { defineConfig } from 'vite';

export default defineConfig({
    base: './', // Use relative paths
    root: 'src',
    optimizeDeps: {
        include: ['@milkdown/plugin-listener', '@milkdown/crepe'], // Ensure Milkdown plugins are pre-bundled
    },
    build: {
        outDir: '../dist/',
        emptyOutDir: true,
        cssCodeSplit: false, // Ensure all CSS is combined into a single file
    },
});

import { defineConfig } from 'vite';

export default defineConfig({
    base: './', // Use relative paths
    optimizeDeps: {
        include: ['@milkdown/plugin-listener', '@milkdown/crepe'], // Ensure Milkdown plugins are pre-bundled
    },
    build: {
        cssCodeSplit: false, // Ensure all CSS is combined into a single file
    },
});

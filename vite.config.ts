import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    sourcemap: true,
    // outDir: path.resolve(__dirname, './dist'),
    rollupOptions: {
      output: {
        // file: 'testimonials.js',
        dir: path.resolve(__dirname, './dist'),
      },
    },
  },
  resolve: {
    extensions: ['.json', '.mjs', '.js', '.ts', '.jsx', '.tsx', '.vue'],
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
      '@': path.resolve(__dirname, './src'),
    },
  },
});

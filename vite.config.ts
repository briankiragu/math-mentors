import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    sourcemap: true,
    outDir: path.resolve(__dirname, './dist'),
  },
  resolve: {
    extensions: ['.json', '.js', '.mjs', '.ts', '.jsx', '.tsx', '.vue'],
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
      '@': path.resolve(__dirname, './src'),
    },
  },
});

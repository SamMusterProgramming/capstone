import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    port: 8080
  },
  build: {

    minify: true, // Enable minification

    outDir: 'dist', // Output directory

    rollupOptions: {

      // Further rollup optimization options if needed

    }

  }
})
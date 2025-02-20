import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  assetsInclude: ['**/*glb'],
  build: {
    outDir: 'dist',
  },
  server: {
    historyApiFallback: true,
  }
})

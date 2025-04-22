import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',  // Set to root if hosted at www.greekgod.life
  plugins: [react()],
})

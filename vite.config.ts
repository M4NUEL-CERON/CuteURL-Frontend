import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // ajusta esto al nombre exacto de tu repo en GitHub
  base: '/CuteURL-Frontend/',
})
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'
// Tailwind CSS v4 Vite plugin
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // Tailwind must come before react
    tailwindcss(),
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  resolve: {
    // '@/' maps to 'src/' for clean imports used by shadcn components
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})

import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import dns from 'node:dns'



export default defineConfig({
  plugins: [react()],
  server: {
    port: 1997,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
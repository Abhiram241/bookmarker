import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { webcrypto } from 'crypto'

// Polyfill globalThis.crypto for Node.js environments lacking getRandomValues
if (!globalThis.crypto) {
  globalThis.crypto = webcrypto
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})

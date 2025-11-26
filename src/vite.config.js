// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Questa riga è essenziale per risolvere l'errore 404 in locale
  // e dire a Vite di servire i file dalla radice principale (/)
  base: '/', 
});
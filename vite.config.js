import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Cambia al puerto que prefieras
    open: true, // Abre el navegador automáticamente
  },
});



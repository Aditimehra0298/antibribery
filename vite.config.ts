import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
        },
      },
    },
    copyPublicDir: true,
  },
  server: {
    port: 5173,
    host: true,
  },
  // Handle media files for different environments
  define: {
    __IS_DEVELOPMENT__: JSON.stringify(process.env.NODE_ENV === 'development'),
  },
});

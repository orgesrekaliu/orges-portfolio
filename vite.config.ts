 import { defineConfig } from 'vite';
 import react from '@vitejs/plugin-react';
 // https://vitejs.dev/config/
 export default defineConfig({
   plugins: [react()],
   optimizeDeps: {
     exclude: ['lucide-react'],
   },
 });


// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     exclude: ['lucide-react'],
//   },
//   server: {
//     host: true, // <-- allows access from your phone on the same network
//   },
// });

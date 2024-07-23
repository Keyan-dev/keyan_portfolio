import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/keyan_portfolio/',
  plugins: [react()],
  define:{
    'process.env.REACT_APP_API_BASE_URL': '"https://portfolio-server-4pet.onrender.com/"'
  }
})

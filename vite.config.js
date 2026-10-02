import react from '@vitejs/plugin-react'

export default {
  plugins: [react()],
  base: '/Reiki_azul/',
  build: {
    assetsDir: 'assets',
  },
  publicDir: 'src/assets',
}
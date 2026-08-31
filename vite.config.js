import { defineConfig } from 'vite'
import react from '@vitejs/react-plugin'

// https://vite.dev
export default defineConfig({
  plugins: [react()],
  base: '/RentalCar/', // ⬅️ حتماً نام دقیق ریپازیتوری خود را بین دو اسلش بگذارید
})

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  base: "/Jatinmainproject9Sept25/OutRightRecruitment/",
  plugins: [tailwindcss(), react()],
  server: {
    host: "0.0.0.0",
  },
});

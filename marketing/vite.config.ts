import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // add React plugin
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // <-- This makes "@/lib/utils" work
    },
  },
});

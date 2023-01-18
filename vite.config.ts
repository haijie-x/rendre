import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  mode: "production",
  define: {
    "process.env.NODE_ENV": "'production'",
  },
  build: {
    lib: {
      entry: "./src/client",
      name: "client",
      fileName: "index",
    },
    outDir: "./src/client/dist",
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  mode: "production",
  build: {
    lib: {
      entry: "./src/client",
      name: "client",
      fileName: "index",
    },
    outDir: "./src/client/dist",
  },
});

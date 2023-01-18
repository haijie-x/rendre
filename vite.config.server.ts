import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  mode: "development",
  define: {
    "process.env.NODE_ENV": "'development'",
  },
  build: {
    lib: {
      entry: "./src/server/index.ts",
      name: "server",
      fileName: "index",
    },
    outDir: "dist/server",
    rollupOptions: {
      output: [
        {
          format: "es",
          exports: "named",
          sourcemap: true,
          // preserveModules: false,
          entryFileNames: "index.js",
          chunkFileNames: "[name].js",
        },
      ],
    },
  },
});

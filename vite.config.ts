import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import rimraf from "rimraf";

rimraf.sync(resolve(__dirname, "./dist"));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  mode: "production",
  define: {
    "process.env.NODE_ENV": "'production'",
  },
  build: {
    lib: {
      entry: ["./src/entry-client.tsx", "./src/entry-server.tsx"],
    },
    outDir: "dist",
    rollupOptions: {
      output: [
        {
          format: "es",
          exports: "named",
          sourcemap: true,
          // preserveModules: false,
          entryFileNames: "[name].js",
          chunkFileNames: "[name].js",
        },
      ],
    },
  },
});

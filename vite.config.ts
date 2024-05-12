import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import oxLint from "vite-plugin-oxlint";

export default defineConfig({
  plugins: [react(), oxLint()],
  root: "./src",
  build: {
    outDir: "../dist",
    minify: false,
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

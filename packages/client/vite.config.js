import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import graphqlLoader from "vite-plugin-graphql-loader";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react(), graphqlLoader()],
  resolve: {
    alias: {
      assets: resolve(__dirname, "./src/assets"),
      shared: resolve(__dirname, "./src/shared"),
      features: resolve(__dirname, "./src/features"),
      layouts: resolve(__dirname, "./src/layouts"),
      styles: resolve(__dirname, "./src/styles"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.js",
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov"],
    },
  },
});

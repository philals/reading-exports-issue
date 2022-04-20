import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  preview: {
    port: 3002,
    strictPort: true,
  },
  plugins: [
    federation({
      name: "@squad",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.jsx",
      },
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});

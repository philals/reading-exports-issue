import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001,
  },
  preview: {
    port: 3001,
  },
  plugins: [
    react(),
    federation({
      name: "home",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/App",
      },
      shared: { react: { singleton: true }, "react-dom": { singleton: true } },
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});

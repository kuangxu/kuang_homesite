import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, "index.html"),
        highlights: resolve(import.meta.dirname, "highlights.html"),
        research: resolve(import.meta.dirname, "research.html"),
        team: resolve(import.meta.dirname, "team.html"),
        advisory: resolve(import.meta.dirname, "advisory.html"),
      },
    },
  },
});

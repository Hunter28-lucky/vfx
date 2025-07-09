// @ts-ignore
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      // @ts-ignore
      "@": path.resolve(process.cwd(), "client", "src"),
      // @ts-ignore
      "@assets": path.resolve(process.cwd(), "attached_assets"),
    },
  },
  // @ts-ignore
  root: path.resolve(process.cwd(), "client"),
  build: {
    // @ts-ignore
    outDir: path.resolve(process.cwd(), "dist"),
    emptyOutDir: true,
  },
});

import { copyFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// En GitHub Pages el sitio vive en /nombre-del-repo/; el workflow pasa esa ruta en BASE_PATH.
// En local queda "/".
const base = process.env.BASE_PATH || "/";

// GitHub Pages no conoce las rutas de React Router: si alguien recarga /vehiculos/...
// sirve 404.html. Copiamos index.html como 404.html para que la app cargue igual.
let outDir = "dist";
const spaFallback = {
  name: "spa-fallback-404",
  apply: "build",
  configResolved(config) {
    outDir = resolve(config.root, config.build.outDir);
  },
  closeBundle() {
    copyFileSync(resolve(outDir, "index.html"), resolve(outDir, "404.html"));
  }
};

export default defineConfig({
  base,
  plugins: [react(), spaFallback]
});

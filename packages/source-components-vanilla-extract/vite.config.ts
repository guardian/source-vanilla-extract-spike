import path from "path"

import { defineConfig } from "vite"
// import dts from "vite-dts"
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin"

export default defineConfig(() => ({
  esbuild: {
    jsxInject: "import React from 'react'",
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "@vanilla-extract/css"],
    },
  },
  plugins: [vanillaExtractPlugin()],
}))

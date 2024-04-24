import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@pages",
        replacement: path.resolve(__dirname, "src/pages"),
      },
      {
        find: "@assets",
        replacement: path.resolve(__dirname, "src/assets"),
      },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/commons/components"),
      },
      {
        find: "@commons",
        replacement: path.resolve(__dirname, "src/commons"),
      },
      {
        find: "@app",
        replacement: path.resolve(__dirname, "src/app"),
      },
      {
        find: "@public",
        replacement: path.resolve(__dirname, "public"),
      },
      {
        find: "@domain",
        replacement: path.resolve(__dirname, "src/models/domain"),
      },
      {
        find: "@repository",
        replacement: path.resolve(__dirname, "src/models/repository"),
      },
      {
        find: "@api",
        replacement: path.resolve(__dirname, "src/data/api"),
      },
      // {
      //   find: "@mqtt",
      //   replacement: path.resolve(__dirname, "src/data/mqtt"),
      // },
    ],
  },
})

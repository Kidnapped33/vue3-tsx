import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/mangosteen-fe-1/dist/", //本地部署 //或者是github /仓库名称/
  plugins: [vue()],
});

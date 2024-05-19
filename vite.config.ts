import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Inspect from "vite-plugin-inspect";

import { svgBuilder } from "./src/plugin/svgBuilder.ts";
const resolve = (str: string) => path.join(__dirname, str);

// https://vitejs.dev/config/
export default ({ command, mode }: any) => {
  console.log(command, mode);
  return defineConfig({
    plugins: [
      vue(),
      AutoImport({
        // Auto import functions from Vue, e.g. ref, reactive, toRef...
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: ["vue"],

        // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
        // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        resolvers: [
          ElementPlusResolver(),
          // Auto import icon components
          // 自动导入图标组件
          IconsResolver({
            prefix: "Icon",
          }),
        ],
        dts: path.resolve(resolve("src"), "auto-imports.d.ts"),
      }),

      Components({
        resolvers: [
          // Auto register icon components
          // 自动注册图标组件
          IconsResolver({
            enabledCollections: ["ep"],
          }),
          // Auto register Element Plus components
          // 自动导入 Element Plus 组件
          ElementPlusResolver(),
        ],
        dts: path.resolve(resolve("src"), "components.d.ts"),
      }),

      Icons({
        autoInstall: true,
      }),

      Inspect(),

      svgBuilder("./src/icon/svg/"),
    ],
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            "primary-color": "#2186FB",
            hack: `true; @import (reference) "${path.resolve(
              "./src/styles/Theme/variable.less"
            )}";`,
          },
        },
        javascriptEnabled: true,
      },
    },
    resolve: {
      extensions: [".ts", ".vue", ".json"],
      alias: {
        "@": resolve("src"),
      },
    },
    server: {
      host: "0.0.0.0",
      proxy: {},
    },
  });
};

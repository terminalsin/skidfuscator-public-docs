import { defineUserConfig } from "vuepress";

import theme from "./theme";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      description: "Guide to Skidfuscator",
    },
    "/fr/": {
      lang: "fr-FR",
      description: "Guide pour Skidfuscator",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "主题演示",
      description: "vuepress-theme-hope 的演示",
    },
  },

  theme,
});

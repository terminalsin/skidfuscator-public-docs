import { hopeTheme } from "vuepress-theme-hope";
import * as navbar from "./navbar";
import * as sidebar from "./sidebar";

export default hopeTheme({
  author: {
    name: "Ghast",
    url: "https://ghast.dev",
  },

  iconAssets: "iconfont",

  logo: '/images/logo.png',

  repo: "terminalsin/skidfuscator-public-docs",

  pageInfo: ["Author", "Original", "ReadingTime"],

  locales: {
    "/": {
      // navbar
      navbar: navbar.en,

      // sidebar
      sidebar: sidebar.en,

      footer: "Default footer",

      displayFooter: false,
    },

    /**
     * Chinese locale config
     */
    "/zh/": {
      // navbar
      navbar: navbar.zh,

      // sidebar
      sidebar: sidebar.zh,

      footer: "默认页脚",

      displayFooter: false,
    },
  },

  plugins: {
    mdEnhance: {
      tabs: true,
      codetabs: true,
      tex: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});

import { sidebar } from "vuepress-theme-hope";

export const en = sidebar({
  '/': [
    // NavbarItem
    {
        text: 'Exclusions',
        link: '/exclusion',
    },
    {
        text: 'Libraries',
        link: '/libraries',
    },
    {
        text: 'Transformers',
        link: '/transformers',
    }
  ]
});

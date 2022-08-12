import { sidebar } from "vuepress-theme-hope";

export const fr = sidebar({
  '/': [
    // NavbarItem
    {
      text: 'Accueil',
      link: '/fr/',
    },
    {
        text: 'Exclusions',
        link: '/fr/exclusion',
    },
    {
        text: 'Dépendences',
        link: '/fr/libraries',
    },
    {
        text: 'Transformations',
        link: '/fr/transformers',
    }
  ]
});

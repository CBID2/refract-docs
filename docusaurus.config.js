// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Refract',
  tagline: 'A fictional JavaScript UI framework created to sharpen your technical documentation skills.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'facebook',
  projectName: 'docusaurus',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // 👇 This points to your sidebars.js file
          sidebarPath: require.resolve('./sidebars.js'),

          // Optional: link to your repo for "Edit this page"
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Refract',
        logo: {
          alt: 'My Site Logo',
          src: 'img/refract-logo.png',
        },
        themes: ['@docusaurus/theme-search-algolia'],
        algolia: {
      // The application ID provided by Algolia
      appId: ' QAKQC6L05F',

      // Public API key: it is safe to commit it
      apiKey: 'f140345eff360bfd9a7ed22a50b0dbf5',

      indexName: 'Documentation Website',
        },
        items: [
  {
    type: 'docSidebar',
    sidebarId: 'tutorialSidebar',
    position: 'left',
    label: 'Docs', // ← simpler label than "Introduction"
  },
  {to: '/blog', label: 'Blog', position: 'left'},
  {
    href: 'https://github.com/CBID2/refract-docs', // ← update to your repo
    label: 'GitHub',
    position: 'right',
  },
],

      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs Home',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/docusaurus'},
              {label: 'Discord', href: 'https://discordapp.com/invite/docusaurus'},
              {label: 'X', href: 'https://x.com/docusaurus'},
            ],
          },
          {
            title: 'More',
            items: [
              {label: 'Blog', to: '/blog'},
              {label: 'GitHub', href: 'https://github.com/facebook/docusaurus'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

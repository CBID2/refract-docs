// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Refract',
  tagline: 'A fictional JavaScript UI framework created to sharpen your technical documentation skills.',
  favicon: 'img/refract-logo.png',

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
          showLastUpdateTime: true, // Must be explicitly set
          showLastUpdateAuthor: true, // Must be explicitly set
          // Include root contributing.md if applicable
          include: ['**/*.{md,mdx}', '../contributing.md'],

          // Optional: link to your repo for "Edit this page"
          editUrl:
            'https://github.com/CBID2/refract-docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/CBID2/refract-docs/edit/main/',
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
        items: [
          // New "Examples" link
         // { 
         //   to: '/examples', 
          //  label: 'Examples', 
        //    position: 'left' 
         // },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs', // ← simpler label than "Introduction"
          },
          //{ to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/CBID2/refract-docs', // ← update to your repo
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      // 👇 Algolia search config commented out to fix API errors
      // algolia: {
      //   appId: 'QAKQC6L05F',
      //   apiKey: 'f140345eff360bfd9a7ed22a50b0dbf5',
      //   indexName: 'Documentation Website', // must match your Algolia dashboard
      //    // Optional: see the official docs for more options
      //   contextualSearch: true,
      // },

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
              { label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/docusaurus' },
              { label: 'Discord', href: 'https://discordapp.com/invite/docusaurus' },
              { label: 'X', href: 'https://x.com/docusaurus' },
            ],
          },
          {
            title: 'More',
            items: [
              { label: 'Blog', to: '/blog' },
              { label: 'GitHub', href: 'https://github.com/facebook/docusaurus' },
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
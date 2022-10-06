// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Gwei.cz',
  tagline: 'Společně tvoříme nový svobodný finanční systém a internet nové generace (Web3)',
  url: 'https://new.gwei.cz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gweicz', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'cs',
    locales: ['cs'],
  },

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
        language: [ "en" ],
        docsRouteBasePath: ['/komunita', '/projekty']
      },
    ]
  ],

  plugins: [
    [
      'content-docs',
      ({
        id: 'projekty',
        path: 'projekty',
        routeBasePath: 'projekty',
        sidebarPath: require.resolve('./sidebarsProjekty.js'),
        editUrl:
          'https://github.com/gweicz/docs/edit/master/',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      })
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'komunita',
          routeBasePath: 'komunita',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/gweicz/docs/edit/master/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
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
      navbar: {
        title: 'Gwei.cz',
        logo: {
          alt: 'Gwei.cz Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'README',
            position: 'left',
            label: 'Komunita',
          },
          {
            to: 'projekty',
            position: 'left',
            label: 'Projekty a služby',
          },
          {
            to: 'komunita/in-english',
            position: 'left',
            label: 'In English 🇬🇧'
          },
          {
            href: 'https://forum.gwei.cz',
            label: 'Fórum',
            position: 'right',
          },
          {
            href: 'https://matrix.to/#/#gweicz:gwei.cz',
            label: 'Matrix',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Komunita',
            items: [
              {
                label: 'Kdo jsme?',
                to: '/komunita',
              },
              {
                label: 'Klíčové pojmy',
                to: '/komunita/klicove-pojmy',
              },
              {
                label: 'Podpořte nás',
                to: '/komunita/podporte-nas',
              },
            ],
          },
          {
            title: 'Komunikační kanály',
            items: [
              {
                label: 'Fórum',
                href: 'https://matrix.gwei.cz',
              },
              {
                label: 'Matrix (chat)',
                href: 'https://matrix.gwei.cz',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/gweicz',
              },
            ],
          },
          {
            title: 'Projekty',
            items: [
              {
                label: 'BohemianDAO',
                href: 'https://bohemiandao.cz',
              },
              {
                label: 'ETHBrno hackathon',
                href: 'https://ethbrno.cz',
              },
              {
                label: 'DeFi Toolkit',
                href: 'https://hackmd.io/@gweicz/defi-toolkit',
              },
            ],
          },
        ],
        copyright: `Vytvořeno v Praze 🖤💛 s pomocí <a href="https://docusaurus.io/">Docusaurus</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

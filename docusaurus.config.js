module.exports = {
  title: '屾森のblog',
  tagline: `待我走尽苦，还你一口甜`,
  url: 'https://essm.xyz',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'RubickLuo', // Usually your GitHub org/user name.
  projectName: 'lqh-blog', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '屾森のblog',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      links: [
        // {
        //   to: 'docs/doc1',
        //   activeBasePath: 'docs',
        //   label: 'Docs',
        //   position: 'left',
        // },
        {to: '/', label: 'Blog', position: 'right'},
        {
          href: 'https://github.com/RubickLuo/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    algolia: {
      apiKey: 'api-key',
      indexName: 'index-name',
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Style Guide',
        //       to: 'docs/doc1',
        //     },
        //     {
        //       label: 'Second Doc',
        //       to: 'docs/doc2',
        //     },
        //   ],
        // },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //   ],
        // },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: '/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/RubickLuo',
            },
            // {
            //   label: 'Twitter',
            //   href: 'https://twitter.com/docusaurus',
            // },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} lqh, Inc. Built with Docusaurus.`,
      icp: "滇ICP备20001659号"
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        // docs: {
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/master/website/',
        // },
        blog: {
          path: './blog',
          routeBasePath: '/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        SearchBar: ["@docusaurus/theme-search-algolia"]
      },
    ],
  ],
  themes: ["@docusaurus/theme-live-codeblock"],
  
  // plugins: [
  //   path.resolve(__dirname, "./src/plugin/plugin-baidu-analytics"),
  //   path.resolve(__dirname, "./src/plugin/plugin-google-adsense")
  // ]
};

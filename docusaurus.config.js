module.exports = {
  title: '屾森のblog',
  tagline: `待我走尽苦，还你一口甜`,
  url: 'https://rubickluo.github.io',
  baseUrl: '/',
  favicon: 'static/img/favicon.ico',
  organizationName: 'RubickLuo', // Usually your GitHub org/user name.
  projectName: 'RubickLuo.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '屾森のblog',
      logo: {
        alt: 'My Site Logo',
        src: 'static/img/logo.svg',
      },
      links: [
        // {
        //   to: 'docs/doc1',
        //   activeBasePath: 'docs',
        //   label: 'Docs',
        //   position: 'left',
        // },
        {to: 'blog', label: 'Blog', position: 'right'},
        {
          href: 'https://github.com/RubickLuo/',
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
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
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
          // routeBasePath: '/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

---
id: docusaurus
title: Docusaurus使用(一):安装部署!
author: RubuickLuo
author_title: Full Stack Engineer In The Future.
author_url: https://github.com/RubickLuo
author_image_url: https://avatars2.githubusercontent.com/u/37091851?s=460&u=e40dc2d7c599eb8e32d86dad3a9a20c388f30b3b&v=4
tags: [hello, docusaurus]
---


### 安装 Docusaurus

#### 命令模板
> npx @docusaurus/init@next init [name] [template]

#### 命令可选项的意思
> npx @docusaurus/init@next init [项目名字] [主题/模板]

<!--truncate-->

#### 1.创建一个`lqh-blog`项目，使用官方`classic`主题模板

```
npx @docusaurus/init@next init lqh-blog classic 
```

#### 2.运行 Docusaurus

```
yarn start
```
或者使用npm运行：
```
npm start
```

#### 3.命令行打开项目
```
code
```

#### 4.项目结构
```
my-website
├── blog
│   ├── 2019-05-28-hola.md
│   ├── 2019-05-29-hello-world.md
│   └── 2020-05-30-welcome.md
├── docs
│   ├── doc1.md
│   ├── doc2.md
│   ├── doc3.md
│   └── mdx.md
├── package.json
├── src
│   ├── css
│   │   └── custom.css
│   └── pages
│       ├── styles.module.css
│       └── index.js
├── static
│   └── img
├── docusaurus.config.js
├── package.json
├── README.md
├── sidebars.js
└── yarn.lock
```
文件夹|相关介绍
:-:|:-:
 `/blog/` | 里面就是写博客文章的，都是 markdown 文件。
 `/docs/` | 里面就是写文档的，也都是 markdown 文件。
 `/src/` | 源代码文件夹，里面有一个 css 文件夹，然后它里边有个 custom.css 里面是写自定义的 css 代码的。
 `/src/pages` | 里边放一些自定义的页面，使用 react 语法来写。
 `/static/` | 放静态资源文件，这些文件会出现在最后打包出来的静态网站里面，在它的根目录下边，它下边的 img 文件夹是放静态图片的。
 `/docusaurus.config.js `| 这个是配置这个站点的。
 `/package.json `| node.js 的工程配置文件。
 `/sidebar.js `| 配置文档页面侧边栏，只有文档页面才有，用它来定义文档的目录结构。

#### 配置
docusaurus 默认是文档风格的主页，要是把它改成一个博客形式的，需要做一点点的配置。

打开它的配置文件-->`docusaurus.config.js `。把` presets `这个配置改成如下所示：
```

presets: [
  [
    "@docusaurus/preset-classic",
    {
      // docs: {
      //   sidebarPath: require.resolve('./sidebars.js'),
      //   editUrl:
      //     'https://github.com/facebook/docusaurus/edit/master/website/',
      // },
      blog: {
        path: "./blog",
        routeBasePath: "/"
      }
      // 省略其它代码
    }
  ]
];

```
如果不用文档的话，就把 docs 这个删除或者注释了，然后加上 blog ，里边添加：
+ `path` 属性，它的值为”./blog”，也就是指向 blog 的文件夹。
+ `routeBasePath` 属性，这个是访问这个博客的路径，设置成/斜杠就是默认网站的首页。
+ 顶部导航的` docs `如果要去掉的话，可以找到` navBar `这个配置项，把` links `中的有关` docs `的这段删掉或者注释掉：
```
{ to: "docs/doc1", label: "Docs", position: "left" }
```
#### 发表博客
在`blog`文件夹内创建一个 markdown 文件。标题开始部分是一个日期格式。

` Docusaurus `会自动把这个日期解析成咱们这个博客的发表日期，后边跟着这个文件的名字。
文件的开头是博客的一些基本信息：
```
---
id: welcome
title: Welcome To My Blog!
author: RubuickLuo
author_title: Full Stack Engineer In The Future.
author_url: https://github.com/RubickLuo
author_image_url: https://avatars2.githubusercontent.com/u/37091851?s=460&u=e40dc2d7c599eb8e32d86dad3a9a20c388f30b3b&v=4
tags: [hello, docusaurus]
---
```
字段|相关介绍
:-:|:-:
id | 访问这个博客的 URL。
title | 标题。
author | 作者。
author_title | 就是作者简短的自我介绍，职位之类的。
author_image_url | 头像。
tags | 博客标签, 是个数组形式。

文章太长加上：```<!--truncate-->```其之后的内容将被收起。

>引用：https://www.zxuqian.cn/deploy-a-docusaurus-site


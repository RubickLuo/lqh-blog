---
id: docusaurus2
title: Docusaurus使用(二):部署到服务器
author: RubuickLuo
author_title: Full Stack Engineer In The Future.
author_url: https://github.com/RubickLuo
author_image_url: https://avatars2.githubusercontent.com/u/37091851?s=460&u=e40dc2d7c599eb8e32d86dad3a9a20c388f30b3b&v=4
tags: [hello, docusaurus]
---


#### 1.配置GitHub
在github上创建仓库，细节略去。
网址传送门-->
[GitHub](https://www.github.com)

<!--truncate-->

#### 2.配置git actions

在项目的根目录下创建 `.github/workflows `这样层级的文件夹，然后在里边创建`nodejs.yml`文件，里边写上下边的代码：

```
name: Node.js CI

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [12.x]

    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-version }}
      - run: npm install
      - run: npm run build --if-present
      - run: git status -uno -u
      #- run: git stash
      - name: FTP Deploy
        uses: SamKirkland/FTP-Deploy-Action@3.0.0
        with:
          ftp-server: ftp://******    #虚拟主机的ftp地址
          ftp-username: ${{ secrets.ftp_user }}
          ftp-password: ${{ secrets.ftp_pwd }}
          local-dir: build/
      - run: git stash pop
        env:
          CI: true
```
字段|相关解释
|:-:|:-:|
ftp-server | 你的虚拟主机 FTP 上传地址，比如ftp://byu*********.my3w.com/htdocs。
ftp-username | ftp 用户名。
ftp-password | ftp 密码，这些是私密信息，所以用了 github 的私有环境变量，稍后再讲怎么配置。
local-dir | 上传哪个目录。

因为上传到 github 上的代码不包括build文件夹，所以，需要把 github actions 运行之后生成的 build 文件夹上传到服务器
在项目的根目录里，添加一个` .git-ftp-include `文件，写上：
```
!build/
```
> 意思是将`npm run build` 之后的` build `目录上传到服务器

` ftp-password ` 密钥信息的设置方法是：

1. 打开仓库的首页，点击* settings *。 
2. 在左边的菜单选择* Secretes *。
3. 点击* Add a new secret *。
4. 在* name *处输入变量的名字。
5. 在* value *处输入变量的值。
6. 最后点击** Add secret *按钮添加就可以了。

> 参考:https://www.zxuqian.cn/deploy-a-docusaurus-site-part2
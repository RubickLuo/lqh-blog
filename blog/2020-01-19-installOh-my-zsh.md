---
id: install-oh-my-zsh-on-Linux
title: oh-my-zsh安装及美化
author: RubuickLuo
author_title: Full Stack Engineer In The Future.
author_url: https://github.com/RubickLuo
author_image_url: https://avatars2.githubusercontent.com/u/37091851?s=460&u=e40dc2d7c599eb8e32d86dad3a9a20c388f30b3b&v=4
tags: [Linux, oh-my-zsh, 安装美化, 插件]
---

#### 安装

> 因为之前用的Ubuntu，现在用的Centos，所以都写一下

首先安装zsh和git

<!--truncate-->

> Ubuntu安装zsh和git

zsh:
```
sudo apt-get install zsh -y
```
git:
```
sudo apt-get install git -y
```
---
> CentOS安装zsh和git

zsh:
```
sudo yum install zsh -y
```
git:	
```
sudo yum install git -y
```
---

>下面的Ubuntu和Centos是一样的

克隆仓库:
```
git clone git://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh
```
备份原来的zshrc，如果文件存在的话:
```
cp ~/.zshrc ~/.zshrc.bak
```
从zsh模板创建一个新的zsh配置文件:
```
cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc
```

改变默认的Shell：
```
chsh -s /bin/zsh
```
关闭当前Terminal窗口，重新用`Ctrl+Alt+T`打开新的Terminal窗口；

---
#### 修改主题
```
vim ~/.zshrc
```
找到ZSH_THEME并修改为如下:
```
ZSH_THEME="<主题名字>"
```
可修改的主题：
```
ls ~/.oh-my-zsh/themes/
```

安装PowerLine:

[需要确定你是否安装了pip, 如果没有安装，使用`yum install pip`(CentOS)或者`apt-get install pip`]
```
pip install powerline-status --user
```
安装PowerFonts:

安装字体库需要首先将项目git clone至本地，然后执行源码中的install.sh。

在你习惯的位置新建一个文件夹，如：`~/Desktop/OpenSource/`:
```
mkdir ~/Desktop/OpenSource/
cd ~/Desktop/OpenSource/
```
git clone
```
git clone https://github.com/powerline/fonts.git --depth=1
```
--depth=1 只克隆最近一次commit
```
cd to [folder]
cd fonts
```
run install shell
```
./install.sh
```

安装好字体库之后，我们来设置iTerm2的字体，具体的操作是

`iTerm2 -> Preferences -> Profiles -> Text`

在Font区域选中Change Font，然后找到Meslo LG字体。有L、M、S可选


[iTerm2是一个Mac下的终端工具]
Linux下直接设置默认终端的字体即可，具体操作的目录类似；

####　安装高亮插件

这是oh my zsh的一个插件，安装方式与theme大同小异：
```
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```
> 上述命令来自: <https://github.com/zsh-users/zsh-syntax-highlighting/blob/master/INSTALL.md> 

我们需要把高亮插件加上：
```
vi ~/.zshrc
```
找到*plugins*修改为:
`plugins=(git zsh-syntax-highlighting)`

**请务必保证插件顺序，zsh-syntax-highlighting必须在最后一个。**

安装完成之后需要重载配置文件:
```
source ~/.zshrc
```
使用命令提示插件zsh-autosuggestions:

下载命令提示插件
```
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```
> 上述命令来自: <https://github.com/zsh-users/zsh-autosuggestions/blob/master/INSTALL.md> 

编辑配置文件，使用插件:
```
vim ~/.zshrc
```
找到` plugins `添加以下内容:
`plugins=(git zsh-autosuggestions zsh-syntax-highlighting)`
**请务必保证插件顺序，zsh-syntax-highlighting必须在最后一个。**

推荐一个比较漂亮的主题(spaceship):

Clone this repo:
```
git clone https://github.com/denysdovhan/spaceship-prompt.git "$ZSH_CUSTOM/themes/spaceship-prompt"
```
Symlink spaceship.zsh-theme to your oh-my-zsh custom themes directory:

创建一个连接文件:
```
ln -s "$ZSH_CUSTOM/themes/spaceship-prompt/spaceship.zsh-theme" "$ZSH_CUSTOM/themes/spaceship.zsh-theme"
```
Set` ZSH_THEME="spaceship" `in your .zshrc:
编辑配置文件，修改主题:
```
vim ~/.zshrc
```
找到` ZSH_THEME `修改为:
```
ZSH_THEME="spaceship"
```
***最后不要忘记重载配置文件:***
```
source ~/.zshrc
```
重启你的终端,HF!  

:)
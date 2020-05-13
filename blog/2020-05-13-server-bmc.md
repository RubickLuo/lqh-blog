---
id: server-bmc
title: 服务器3个网口？
author: RubuickLuo
author_title: Full Stack Engineer In The Future.
author_url: https://github.com/RubickLuo
author_image_url: https://avatars2.githubusercontent.com/u/37091851?s=460&u=e40dc2d7c599eb8e32d86dad3a9a20c388f30b3b&v=4
tags: [服务器, 网卡, bmc, ikvm]
---


### 起因

> 配置机房服务器IP时, 发现无论怎么调试都无法ping通网关。最后发现是因为网线插在了BMC/ikvm远程控制口上了。。。

<!--truncate-->

### 分析

> 服务器有两块网卡（两个千兆以太网接口），另外一个是则是前面提到的BCM/IKVM接口了。其实它不算是网口，因为他就是一个接口，要想使用它，需属要接远程控制模块的。

### 什么是BMC ?

> 在介绍BMC之前需要了解一个概念，即平台管理（platform management）。
平台管理表示的是一系列的监视和控制功能，操作的对象是系统硬件。比如通过监视系统的温度，电压，风扇、电源等等，并做相应的调节工作，以保证系统处于健康的状态。
当然如果系统真的不正常了，也可以通过复位的方式来重新启动系统。
同时平台管理还负责记录各种硬件的信息和日志记录，用于提示用户和后续问题的定位。
>
 摘自：<https://blog.csdn.net/weixin_42306122/article/details/95642613>

以上的这些功能可以集成到一个控制器上来实现，这个控制器被称为**基板管理控制器**（Baseboard Manager Controller，简称BMC）。
> 
​BMC是一款服务器AC上电起始即运行的软件，运行在服务器上一款单独的ARM芯片上，这个ARM芯片就是BMC软件的CPU，同时会芯片外围会配置自己的RAM、Flash等器件，只要服务器插上电源线，BMC软件便快速运行起来，此时有可能我们通常意义上的x86服务器侧的OS都还没有安装呢。BMC是整个服务器的大管家，主要用于服务器各个部件（CPU、内存、硬盘、风扇、机框等）的温度、电压等健康状态进行检测，同时根据各个温度采集点情况实时调整风扇转速保证服务器不产生过温、而且控制总体功耗又不能过高，如果单板部件出现任何异常则通过SNMP协议、SMTP协议、Redfish协议等多种业界通用规范讲信息及时上报给上层网管，以便运维人员及时处理，保证业务无损。






---
id: mysql-authentication-forget
title: 修改MySQL密码(Win10)
author: RubuickLuo
author_title: Full Stack Engineer In The Future.
author_url: https://github.com/RubickLuo
author_image_url: https://avatars2.githubusercontent.com/u/37091851?s=460&u=e40dc2d7c599eb8e32d86dad3a9a20c388f30b3b&v=4
tags: [MySQL, 密码, authentication, Password]
---

### 0.此方法适用于MySQL5.x, 若为MySQL8.x请跳转至☞[MySQL8下密码重置的方法](#8mysql8下密码重置的方法)

### 1.修改my.ini文件(文件在MySQL安装目录下): 
设置权限认证跳过
也就是在** [mysqld] **下 加上:

> 或者也可以使用命令行`mysqld –skip-grant-tables`; [无密码启动MySQL]

``` 
skip-grant-tables
```
保存退出

<!-- truncate -->

### 2.重启 mysql 服务(管理员运行CMD):
```
net stop mysql
net start mysql
```
> 若提示找不到服务名，可能需要加上MySQL版本号如 **net stop mysql5.5**

> *或者直接在services.msc里重启mysql服务即可。*

### 3.登录MySQL
可以不需要密码就可以登录; 提示需要密码直接回车登录。
```
mysql -uroot -p
```
### 4.重置密码: 
首先选择mysql数据库：
```
use mysql
```
然后更新 password（new-password是新密码）: 
```
update user set authentication_string=password("new-pawwsord") where user="root";
```

### 5.刷新权限（必须步骤）
```
flush privileges;
```
> 退出MySQL：***quit***

#### 6.使用安全模式关闭数据库（提示输入密码使用新密码）若失败则跳过直接重启mysql服务。

``` 
mysqladmin -uroot -p shutdown
```

>> ***去掉在 my.ini 文件中 加上的 skip-grant-tables (或注释掉)。***

### 7.重启MySQL服务（如上述步骤2）

>> 然后就可以用新密码登录了！

---

**上述步骤只适用于MySQL5.x,MySQL8下不适用**

## 8.MySQL8下密码重置的方法

> **方法一：利用--init-file参数解决** ***【推荐使用】***

> 第一步：关掉系统服务
```
net stop mysql
```
> 第二步：创建一个文本文件，内含一条密码修改命令; 并记下文件目录
```
ALTER USER 'root'@'localhost' IDENTIFIED BY '';
```
> 第三步：命令行方式启动服务器，--init-file=**指定启动时执行命令文件**
```
mysqld --init-file=d:\mysql\c.txt --console
```
> 第四步：以**mysql -uroot -p**登录; 然后执行sql命令设置密码; **[new-password]**为你的新密码
```
UPDATE mysql.user SET authentication_string='[new-password]' WHERE user='root' and host='localhost';
```

---

> **方法二：让--skip-grant-tables参数用起来**

> ①. **同方法一，先关掉系统服务**; 在mysql8系统下，用以下命令可以无密码启动服务:
```
mysqld --console --skip-grant-tables --shared-memory
```
> ②.服务启动后，以空密码登入系统
```
mysql -u root
```
> ③.然后执行sql命令设置密码; **[new-password]**为你的新密码
```
UPDATE mysql.user SET authentication_string='[new-password]' WHERE user='root' and host='localhost';
```